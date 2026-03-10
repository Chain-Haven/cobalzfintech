import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

// Only initialize Stripe if the key is available
const stripe = stripeSecretKey
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2026-02-25.clover",
    })
  : null;

export async function GET(request: NextRequest) {
  // Check if Stripe is configured
  if (!stripe) {
    const { searchParams } = new URL(request.url);
    const accountId = searchParams.get("accountId") || "acct_demo_123456";
    
    // Return demo data for build/testing
    return NextResponse.json({
      success: true,
      demo: true,
      account: {
        id: accountId,
        email: "demo@cobalz.com",
        businessName: "Demo Business",
        country: "US",
        detailsSubmitted: true,
        chargesEnabled: true,
        payoutsEnabled: true,
        isOnboardingComplete: true,
        pendingRequirements: [],
        requirementsDisabled: null,
      },
    });
  }

  try {
    const { searchParams } = new URL(request.url);
    const accountId = searchParams.get("accountId");

    if (!accountId) {
      return NextResponse.json(
        { error: "Account ID is required" },
        { status: 400 }
      );
    }

    const account = await stripe.accounts.retrieve(accountId);

    // Check if onboarding is complete
    const isOnboardingComplete =
      account.details_submitted &&
      account.charges_enabled &&
      account.payouts_enabled;

    // Get pending requirements
    const pendingRequirements = [
      ...(account.requirements?.currently_due || []),
      ...(account.requirements?.eventually_due || []),
    ];

    return NextResponse.json({
      success: true,
      account: {
        id: account.id,
        email: account.email,
        businessName: account.business_profile?.name,
        country: account.country,
        detailsSubmitted: account.details_submitted,
        chargesEnabled: account.charges_enabled,
        payoutsEnabled: account.payouts_enabled,
        isOnboardingComplete,
        pendingRequirements,
        requirementsDisabled: account.requirements?.disabled_reason,
      },
    });
  } catch (error) {
    console.error("Error retrieving account status:", error);

    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      );
    }

    return NextResponse.json(
      { error: "Failed to retrieve account status" },
      { status: 500 }
    );
  }
}
