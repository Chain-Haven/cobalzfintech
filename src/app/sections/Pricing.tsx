"use client";

import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "For small platforms just getting started",
    price: "2.9% + 30¢",
    priceDetail: "per transaction",
    revenueShare: "Keep 70% of revenue",
    features: [
      "Up to 100 active merchants",
      "Standard onboarding flow",
      "Basic analytics dashboard",
      "Email support",
      "USD, EUR, GBP support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    description: "For growing platforms with volume",
    price: "2.5% + 25¢",
    priceDetail: "per transaction",
    revenueShare: "Keep 80% of revenue",
    features: [
      "Up to 1,000 active merchants",
      "Express onboarding (5 minutes)",
      "Advanced analytics & reporting",
      "Priority support",
      "25+ currencies supported",
      "Custom branding options",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large platforms with custom needs",
    price: "Custom",
    priceDetail: "volume pricing",
    revenueShare: "Keep up to 90% of revenue",
    features: [
      "Unlimited merchants",
      "White-label onboarding",
      "Real-time analytics & webhooks",
      "Dedicated account manager",
      "135+ currencies & local methods",
      "Full API & SDK access",
      "Custom contracts & SLAs",
      "On-premise options",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-white" id="pricing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent{" "}
            <span className="text-[#d4af37]">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600">
            No hidden fees, no monthly commitments. Scale your platform and keep
            more revenue as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular ? "border-[#d4af37] shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="gold">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col">
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </div>
                  <div className="text-sm text-gray-500">{plan.priceDetail}</div>
                  <div className="mt-3 text-sm font-medium text-[#d4af37]">
                    {plan.revenueShare}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          All plans include PCI compliance, fraud protection, and 99.99% uptime SLA.
          {" "}
          <a href="#faq" className="text-[#d4af37] hover:underline">
            Learn more about pricing
          </a>
        </p>
      </Container>
    </section>
  );
}
