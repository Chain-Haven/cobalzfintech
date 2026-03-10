"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-[#0f172a]">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Create an account instantly and start onboarding merchants in minutes, 
            or contact us to design a custom package for your business.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Link href="/onboarding">
              <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white px-8">
                Start now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
              Contact sales
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 border-t border-gray-800 pt-8">
            <div>
              <h3 className="font-medium text-white mb-2">See what you'll pay</h3>
              <p className="text-sm text-gray-400 mb-3">
                Integrated per-transaction pricing with no hidden fees.
              </p>
              <a href="#pricing" className="text-[#d4af37] text-sm hover:underline">
                Pricing details →
              </a>
            </div>
            <div>
              <h3 className="font-medium text-white mb-2">Start building</h3>
              <p className="text-sm text-gray-400 mb-3">
                Get up and running with Cobalz in as little as 10 minutes.
              </p>
              <a href="#" className="text-[#d4af37] text-sm hover:underline">
                Integration options →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
