"use client";

import { Container } from "@/components/ui/Container";
import { UserPlus, Link2, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description:
      "Create your platform account in minutes. Tell us about your business and we'll customize your Payfac experience.",
  },
  {
    icon: Link2,
    number: "02",
    title: "Connect",
    description:
      "Integrate our API or use our no-code solutions. Our team will help you get set up and running quickly.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Start Earning",
    description:
      "Onboard merchants instantly and start processing payments. Keep up to 90% of your payment revenue.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in{" "}
            <span className="text-[#d4af37]">Three Simple Steps</span>
          </h2>
          <p className="text-lg text-gray-600">
            From signup to first payment in under 24 hours. No lengthy approvals
            or complex integrations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-8 px-3 py-1 bg-[#d4af37] text-white text-sm font-bold rounded-full">
                {step.number}
              </div>

              {/* Connector line (hidden on mobile, visible on desktop between items) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-[#d4af37]/30" />
              )}

              <div className="w-14 h-14 rounded-xl bg-[#f4e4a6]/50 flex items-center justify-center mb-6 mt-2">
                <step.icon className="w-7 h-7 text-[#d4af37]" />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
