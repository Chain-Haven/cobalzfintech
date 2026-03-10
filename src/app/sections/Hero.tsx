"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[#f4e4a6]/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-2xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#0a2540] tracking-tight leading-[1.1] mb-6">
            Financial infrastructure for platforms that want to own their payments
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#475569] max-w-2xl mb-8 leading-relaxed">
            Cobalz is the complete payment facilitator platform. Onboard merchants instantly, 
            accept payments globally, and keep up to 90% of your revenue. Built on Stripe Connect.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Link href="/onboarding">
              <Button size="lg" className="btn-primary bg-[#d4af37] hover:bg-[#b8960c] text-white px-8">
                Start onboarding
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-[#0a2540] hover:text-[#d4af37]">
              <Play className="mr-2 w-4 h-4" />
              Watch demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#64748b]">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No monthly fees
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Instant onboarding
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 text-[#d4af37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              PCI compliant
            </span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 relative">
          <div className="relative rounded-xl bg-[#0f172a] p-2 shadow-2xl">
            <div className="rounded-lg bg-[#1e293b] p-6 overflow-hidden">
              {/* Mock dashboard UI */}
              <div className="flex gap-4 mb-6">
                <div className="w-48 h-32 bg-[#334155] rounded-lg" />
                <div className="w-48 h-32 bg-[#334155] rounded-lg" />
                <div className="w-48 h-32 bg-[#334155] rounded-lg" />
              </div>
              <div className="h-48 bg-[#334155] rounded-lg" />
            </div>
          </div>
          {/* Floating stats */}
          <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 border border-gray-100">
            <div className="text-sm text-gray-500">Monthly volume</div>
            <div className="text-2xl font-bold text-[#0a2540]">$2.4M</div>
            <div className="text-sm text-green-600">+24% vs last month</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
