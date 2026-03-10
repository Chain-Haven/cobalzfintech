"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-[#1a1a2e]">
      <Container className="text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 mb-8">
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-medium text-[#f4e4a6]">
              Start for free today
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="text-[#d4af37]"> Payment Experience?</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of platforms that have accelerated their growth with
            Cobalz. Get started in minutes, not months.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/onboarding">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#b8960c] text-white group"
              >
                Start Onboarding Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              Schedule a Demo
            </Button>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            No credit card required. Free to get started.
          </p>
        </div>
      </Container>
    </section>
  );
}
