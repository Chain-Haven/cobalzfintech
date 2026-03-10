"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, TrendingUp, DollarSign, PieChart, Clock } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    share: "70%",
    description: "Keep 70% of payment processing revenue",
    features: ["Up to 100 active merchants", "2.9% + 30¢ per transaction", "Standard support"],
  },
  {
    name: "Growth",
    share: "80%",
    description: "Keep 80% of payment processing revenue",
    features: ["Up to 1,000 active merchants", "2.5% + 25¢ per transaction", "Priority support"],
  },
  {
    name: "Enterprise",
    share: "90%",
    description: "Keep up to 90% of payment processing revenue",
    features: ["Unlimited merchants", "Custom pricing", "Dedicated account manager"],
  },
];

export default function RevenueSharePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Monetize your platform
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Keep up to 90% of payment processing revenue with our transparent 
                revenue share model. No hidden fees, no monthly commitments. 
                Scale your revenue as your platform grows.
              </p>
              <Link href="/onboarding">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Get started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              How revenue sharing works
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <DollarSign className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Merchant pays</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Your merchant processes a payment and pays the standard transaction fee.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <PieChart className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Fee split</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    We split the fee according to your revenue share percentage.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Instant payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Your share is deposited to your account in real-time with each transaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <TrendingUp className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Grow revenue</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Scale your platform revenue as your merchants process more payments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Tiers */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Revenue share tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <Card key={index} className={index === 1 ? "border-[#d4af37]" : ""}>
                  <CardHeader>
                    <p className="text-sm text-[#64748b] mb-2">{tier.name}</p>
                    <p className="text-4xl font-bold text-[#0a2540] mb-2">{tier.share}</p>
                    <p className="text-sm text-[#64748b]">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-[#475569]">
                          <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Example */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-[#0a2540] mb-6">
                Revenue share example
              </h2>
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="space-y-4 text-left">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#475569]">Merchant transaction</span>
                    <span className="font-medium text-[#0a2540]">$1,000.00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#475569]">Processing fee (2.9% + 30¢)</span>
                    <span className="font-medium text-[#0a2540]">$29.30</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-[#475569]">Your revenue share (80%)</span>
                    <span className="font-medium text-[#d4af37]">$23.44</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-[#475569]">Cobalz platform fee</span>
                    <span className="font-medium text-[#475569]">$5.86</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
