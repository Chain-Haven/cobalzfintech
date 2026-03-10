"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "2.9% + 30¢",
    description: "per transaction",
    revenueShare: "Keep 70%",
    features: [
      "Up to 100 active merchants",
      "Standard onboarding flow",
      "Basic analytics dashboard",
      "Email support",
      "USD, EUR, GBP support",
    ],
    cta: "Get started",
    popular: false,
  },
  {
    name: "Growth",
    price: "2.5% + 25¢",
    description: "per transaction",
    revenueShare: "Keep 80%",
    features: [
      "Up to 1,000 active merchants",
      "Express onboarding (5 minutes)",
      "Advanced analytics & reporting",
      "Priority support",
      "25+ currencies supported",
      "Custom branding options",
      "Full API access",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "volume pricing",
    revenueShare: "Keep up to 90%",
    features: [
      "Unlimited merchants",
      "White-label onboarding",
      "Real-time analytics & webhooks",
      "Dedicated account manager",
      "135+ currencies & local methods",
      "Full API & SDK access",
      "Custom contracts & SLAs",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-24 bg-[#f8fafc]" id="pricing">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-[#475569]">
            No hidden fees. No monthly commitments. Scale your platform and keep more revenue as you grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border ${
                plan.popular ? "border-[#d4af37] shadow-lg" : "border-gray-200"
              } p-8 flex flex-col`}
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-[#0a2540] mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-semibold text-[#0a2540] mb-1">
                  {plan.price}
                </div>
                <div className="text-sm text-[#64748b]">{plan.description}</div>
                <div className="mt-3 text-sm font-medium text-[#d4af37]">
                  {plan.revenueShare} of processing revenue
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-[#475569]">
                    <svg className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "primary" : "outline"}
                className={`w-full ${plan.popular ? "bg-[#d4af37] hover:bg-[#b8960c] text-white" : ""}`}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#64748b]">
            All plans include PCI compliance, fraud protection, and 99.99% uptime SLA.{" "}
            <a href="#faq" className="text-[#d4af37] hover:underline">
              Compare all features
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
