"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    company: "TechMarketplace",
    headline: "TechMarketplace scales to $50M in GMV with Cobalz",
    metric: "160",
    metricLabel: "countries supported",
    metric2: "11K+",
    metric2Label: "active merchants",
    quote: "Cobalz cut our merchant onboarding time from weeks to minutes. Our platform revenue increased 40% in the first quarter alone.",
    author: "Sarah Chen",
    role: "CEO",
    products: ["Payments", "Connect", "Onboarding"],
  },
  {
    company: "PayFlow",
    headline: "PayFlow consolidates $5B in platform revenue onto Cobalz",
    metric: "5+",
    metricLabel: "consumer platforms",
    metric2: "700+",
    metric2Label: "payment integrations",
    quote: "The revenue share model is fantastic. We're keeping significantly more than we did with our previous Payfac provider.",
    author: "Michael Rodriguez",
    role: "CFO",
    products: ["Connect", "Revenue Share", "Analytics"],
  },
  {
    company: "CommerceHub",
    headline: "CommerceHub powers global commerce with Cobalz",
    metric: "600K+",
    metricLabel: "merchants onboarded",
    metric2: "1.8K",
    metric2Label: "enterprise clients",
    quote: "Best developer experience I've seen. The API is clean, documentation is excellent, and support is genuinely helpful.",
    author: "Emily Watson",
    role: "CTO",
    products: ["API", "Webhooks", "Dashboard"],
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            Powering businesses of all sizes
          </h2>
          <p className="text-lg text-[#475569]">
            Run your platform on reliable infrastructure that adapts to your needs.
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] rounded-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-xl font-semibold text-[#0a2540] mb-4">
                  {study.headline}
                </h3>
                
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-3xl font-semibold text-[#0a2540]">{study.metric}</div>
                    <div className="text-sm text-[#64748b]">{study.metricLabel}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-semibold text-[#0a2540]">{study.metric2}</div>
                    <div className="text-sm text-[#64748b]">{study.metric2Label}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-sm text-[#64748b]">Products used:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {study.products.map((product, pIndex) => (
                      <span
                        key={pIndex}
                        className="text-sm font-medium text-[#0a2540] bg-white px-3 py-1 rounded-full border border-gray-200"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href="/onboarding"
                  className="inline-flex items-center text-[#d4af37] font-medium hover:gap-2 transition-all"
                >
                  Read the story
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <blockquote className="text-[#475569] leading-relaxed mb-6">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                    <span className="text-[#d4af37] font-semibold">
                      {study.author.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-[#0a2540]">{study.author}</div>
                    <div className="text-sm text-[#64748b]">{study.role}, {study.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
