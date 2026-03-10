"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, CreditCard, Globe, Shield, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: CreditCard,
    title: "All major card networks",
    description: "Accept Visa, Mastercard, American Express, Discover, and JCB cards from customers worldwide.",
  },
  {
    icon: Globe,
    title: "135+ currencies",
    description: "Process payments in 135+ currencies and settle in your preferred currency.",
  },
  {
    icon: Shield,
    title: "Built-in fraud protection",
    description: "Machine learning fraud detection and 3D Secure authentication included.",
  },
  {
    icon: Zap,
    title: "Real-time processing",
    description: "Instant authorization and confirmation for faster checkout experiences.",
  },
];

export default function PaymentsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Accept payments globally
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Cobalz enables your platform to accept payments from anywhere in the world. 
                Support for credit cards, digital wallets, and 135+ local payment methods.
              </p>
              <Link href="/onboarding">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Start accepting payments
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Everything you need to accept payments
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569]">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Payment Methods */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Supported payment methods
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Credit & Debit Cards",
                "Apple Pay",
                "Google Pay",
                "ACH Transfers",
                "SEPA Direct Debit",
                "iDEAL",
                "Bancontact",
                "Alipay",
              ].map((method, index) => (
                <div key={index} className="p-4 bg-[#f8fafc] rounded-lg text-center">
                  <p className="font-medium text-[#0a2540]">{method}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Ready to start accepting payments?
              </h2>
              <p className="text-gray-400 mb-8">
                Get started in minutes with our streamlined onboarding process.
              </p>
              <Link href="/onboarding">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Get started now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
