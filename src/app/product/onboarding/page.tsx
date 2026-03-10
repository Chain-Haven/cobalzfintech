"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, UserPlus, CheckCircle, Zap } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: UserPlus,
    title: "Merchant signs up",
    description: "Merchant provides basic business information through your branded onboarding flow.",
  },
  {
    icon: CheckCircle,
    title: "Automatic verification",
    description: "We handle KYC, identity verification, and compliance checks automatically.",
  },
  {
    icon: Zap,
    title: "Start accepting payments",
    description: "Most merchants can start processing payments within 5 minutes of signing up.",
  },
];

export default function OnboardingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Onboard merchants in minutes
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Streamlined merchant onboarding with built-in identity verification, 
                KYC checks, and compliance management. Your merchants can start 
                accepting payments the same day they sign up.
              </p>
              <Link href="/onboarding">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Try it now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              How merchant onboarding works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                      <step.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569]">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Onboarding features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>White-label experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Customize the onboarding flow with your branding, colors, and domain. 
                    Merchants never know they&apos;re using Cobalz.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Global compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Automatic compliance with KYC, AML, and PCI requirements in 40+ countries. 
                    We handle the complexity so you don&apos;t have to.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Smart form prefilling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Pre-fill merchant information you already have to reduce friction 
                    and increase completion rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Real-time status tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Track merchant onboarding progress in real-time. Know exactly 
                    when merchants are ready to start processing.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-white mb-2">&lt; 5 min</p>
                <p className="text-gray-400">Average onboarding time</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">95%</p>
                <p className="text-gray-400">Completion rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-white mb-2">40+</p>
                <p className="text-gray-400">Countries supported</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
