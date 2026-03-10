"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Zap, Shield, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#f4e4a6]/20 pt-20 pb-24 lg:pt-32 lg:pb-40">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[#d4af37]/5 rounded-full blur-2xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f4e4a6]/50 border border-[#d4af37]/20 mb-8">
            <Zap className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#8a6d0b]">
              Now with Instant Onboarding
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Payment Infrastructure
            <br />
            <span className="text-[#d4af37]">for Modern Platforms</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cobalz empowers your platform to onboard merchants instantly, accept
            payments globally, and keep more of your revenue. The complete
            Payfac solution powered by Stripe Connect.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/onboarding">
              <Button size="lg" className="w-full sm:w-auto group">
                Start Onboarding
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#d4af37]" />
              <span>135+ Currencies</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#d4af37]" />
              <span>99.99% Uptime</span>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: "$2B+", label: "Payments Processed" },
            { value: "10K+", label: "Active Merchants" },
            { value: "135+", label: "Countries Supported" },
            { value: "< 5 min", label: "Avg. Onboarding Time" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
