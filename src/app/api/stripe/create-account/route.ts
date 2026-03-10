import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Only initialize Stripe if the key is available
const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2026-02-25.clover",
    })
  : null;

export async function POST(request: NextRequest) {
  // Check if Stripe is configured
  if (!stripe) {
    return NextResponse.json(
      { 
        error: "Stripe is not configured. Please set STRIPE_SECRET_KEY environment variable.",
        demo: true,
        accountId: "acct_demo_" + Math.random().toString(36).substring(2, 10)
      },
      { status: 200 }
    );
  }

  try {
    const body = await request.json();
    const { email, businessName, country = "US" } = body;

    if (!email || !businessName) {
      return NextResponse.json(
        { error: "Email and business name are required" },
        { status: 400 }
      );
    }

    // Create a Standard connected account
    const account = await stripe.accounts.create({
      type: "standard",
      email,
      business_profile: {
        name: businessName,
      },
      country,
      capabilities: {
        card_payments: { requested: true },
        transfers: { requested: true },
      },
    });

    return NextResponse.json({
      success: true,
      accountId: account.id,
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Error creating Stripe account:", error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to create account" },
      { status: 500 }
    );
  }
}
