"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, Code, Webhook, Shield, Building } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Code,
    title: "Clean APIs",
    description: "RESTful APIs with comprehensive documentation and SDKs for popular languages.",
  },
  {
    icon: Webhook,
    title: "Real-time webhooks",
    description: "Get instant notifications for payments, disputes, and account updates.",
  },
  {
    icon: Shield,
    title: "Secure by default",
    description: "OAuth 2.0 authentication, API key management, and request signing.",
  },
  {
    icon: Building,
    title: "Platform management",
    description: "Manage thousands of connected accounts with bulk operations and reporting.",
  },
];

export default function ConnectPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Connect merchants to your platform
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Cobalz Connect is the fastest way to onboard merchants and enable 
                payments on your platform. Built on Stripe Connect with everything 
                you need to scale.
              </p>
              <Link href="/developers/documentation">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  View documentation
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
              Built for platforms
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

        {/* Code Example */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-[#0a2540] mb-4">
                  Simple integration
                </h2>
                <p className="text-[#475569] mb-6">
                  Get started with just a few lines of code. Our APIs are designed 
                  to be intuitive and developer-friendly.
                </p>
                <Link href="/developers/api-reference">
                  <Button className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                    Explore API reference
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1e293b] rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// Create a connected account
const account = await cobalz.accounts.create({
  email: 'merchant@example.com',
  country: 'US',
});

// Generate onboarding link
const link = await cobalz.accountLinks.create({
  account: account.id,
  type: 'account_onboarding',
});

// Redirect merchant to onboarding
res.redirect(link.url);`}</code>
                </pre>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Start building with Connect
              </h2>
              <p className="text-gray-400 mb-8">
                Get started with our comprehensive documentation and SDKs.
              </p>
              <Link href="/developers/documentation">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Read the docs
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
