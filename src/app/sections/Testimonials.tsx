"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Cobalz cut our merchant onboarding time from weeks to minutes. Our platform revenue increased 40% in the first quarter alone.",
    author: "Sarah Chen",
    role: "CEO, TechMarketplace",
    rating: 5,
  },
  {
    quote:
      "The revenue share model is fantastic. We're keeping significantly more than we did with our previous Payfac provider.",
    author: "Michael Rodriguez",
    role: "CFO, PayFlow Solutions",
    rating: 5,
  },
  {
    quote:
      "Best developer experience I've seen. The API is clean, documentation is excellent, and support is genuinely helpful.",
    author: "Emily Watson",
    role: "CTO, CommerceHub",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by{" "}
            <span className="text-[#d4af37]">Industry Leaders</span>
          </h2>
          <p className="text-lg text-gray-600">
            See what platform operators and merchants are saying about Cobalz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardContent className="pt-6 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#f4e4a6] flex items-center justify-center">
                    <span className="text-[#8a6d0b] font-semibold">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500 mb-8">
            Powering payments for leading platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
            {["TechMarketplace", "PayFlow", "CommerceHub", "FinServe", "BizPay"].map(
              (company) => (
                <div
                  key={company}
                  className="text-lg font-semibold text-gray-400"
                >
                  {company}
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
