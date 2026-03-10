"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, Book, Code, Zap, Shield } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    icon: Zap,
    title: "Quick start",
    description: "Get up and running with Cobalz in under 10 minutes.",
    href: "#",
  },
  {
    icon: Code,
    title: "Integration guides",
    description: "Step-by-step guides for popular platforms and frameworks.",
    href: "#",
  },
  {
    icon: Book,
    title: "API reference",
    description: "Complete API documentation with examples and SDKs.",
    href: "/developers/api-reference",
  },
  {
    icon: Shield,
    title: "Security best practices",
    description: "Learn how to keep your integration secure and compliant.",
    href: "#",
  },
];

export default function DocumentationPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Documentation
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Everything you need to integrate Cobalz into your platform. 
                From quick starts to detailed API references.
              </p>
              <Link href="/developers/api-reference">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  API Reference
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Guides */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Popular guides
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {guides.map((guide, index) => (
                <Link key={index} href={guide.href}>
                  <Card className="h-full hover:border-[#d4af37] transition-colors cursor-pointer">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                        <guide.icon className="w-6 h-6 text-[#d4af37]" />
                      </div>
                      <CardTitle>{guide.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[#475569]">{guide.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* Getting Started */}
        <section className="py-24 bg-white">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-[#0a2540] mb-4">
                  Getting started
                </h2>
                <p className="text-[#475569] mb-6">
                  Integrate Cobalz in three simple steps. Our APIs are designed 
                  to be intuitive and developer-friendly.
                </p>
                <ol className="space-y-4 mb-6">
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center flex-shrink-0 font-medium">1</span>
                    <div>
                      <p className="font-medium text-[#0a2540]">Create an account</p>
                      <p className="text-[#475569]">Sign up and get your API keys.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center flex-shrink-0 font-medium">2</span>
                    <div>
                      <p className="font-medium text-[#0a2540]">Set up webhooks</p>
                      <p className="text-[#475569]">Configure webhooks to receive real-time events.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#d4af37] text-white flex items-center justify-center flex-shrink-0 font-medium">3</span>
                    <div>
                      <p className="font-medium text-[#0a2540]">Onboard merchants</p>
                      <p className="text-[#475569]">Start onboarding merchants through your platform.</p>
                    </div>
                  </li>
                </ol>
                <Link href="/developers/api-reference">
                  <Button className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                    View API docs
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="bg-[#1e293b] rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// Install the Cobalz SDK
npm install @cobalz/sdk

// Initialize the client
import { Cobalz } from '@cobalz/sdk';

const cobalz = new Cobalz({
  apiKey: process.env.COBALZ_API_KEY,
});

// Create a merchant account
const account = await cobalz.accounts.create({
  email: 'merchant@example.com',
  country: 'US',
});`}</code>
                </pre>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
