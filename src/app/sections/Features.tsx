"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Accept and optimise payments globally",
    description: "Accept credit cards, debit cards, and 135+ local payment methods from customers worldwide. Real-time processing with intelligent routing for higher approval rates.",
    link: "Explore payments",
    image: "payments",
  },
  {
    title: "Enable any merchant to start selling fast",
    description: "Onboard merchants in under 5 minutes with our streamlined KYC flow. Stripe handles identity verification, compliance, and risk management automatically.",
    link: "Explore onboarding",
    image: "onboarding",
  },
  {
    title: "Monetise your platform transactions",
    description: "Keep up to 90% of payment revenue with our transparent revenue share model. No hidden fees, no monthly commitments. Scale as you grow.",
    link: "Explore revenue share",
    image: "revenue",
  },
  {
    title: "Embed payments in your platform",
    description: "White-label the entire payment experience. Custom branding, embedded components, and APIs that feel native to your platform.",
    link: "Explore embedded payments",
    image: "embed",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-[#f8fafc]" id="features">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            A complete payments platform
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl">
            Everything you need to run your Payfac — from merchant onboarding to global payouts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-100 card-hover cursor-pointer"
            >
              {/* Placeholder for feature image */}
              <div className="h-48 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] rounded-lg mb-6 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#d4af37]">{index + 1}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#0a2540] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#475569] mb-4 leading-relaxed">
                {feature.description}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-[#d4af37] font-medium group-hover:gap-2 transition-all"
              >
                {feature.link}
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
