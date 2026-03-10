"use client";

import { Container } from "@/components/ui/Container";

const stats = [
  { value: "135+", label: "currencies and payment methods supported" },
  { value: "$1.2B", label: "in payments volume processed in 2024" },
  { value: "99.999%", label: "historical uptime for Cobalz services" },
  { value: "50K+", label: "active merchants managed on our platform" },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            The backbone of platform commerce
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#64748b]">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
