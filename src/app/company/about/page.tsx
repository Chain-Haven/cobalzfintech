"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Target, Users, Globe, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission-first",
    description: "We exist to help platforms succeed. Every decision we make is in service of that mission.",
  },
  {
    icon: Users,
    title: "Customer obsession",
    description: "We start with the customer and work backwards. Their success is our success.",
  },
  {
    icon: Globe,
    title: "Global mindset",
    description: "We build for a global market from day one. Borders shouldn't limit commerce.",
  },
  {
    icon: Zap,
    title: "Move fast",
    description: "Speed matters. We prioritize action and learn from our mistakes.",
  },
];

const stats = [
  { value: "50+", label: "Team members" },
  { value: "40+", label: "Countries supported" },
  { value: "$1B+", label: "Payments processed" },
  { value: "10K+", label: "Active merchants" },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                About Cobalz
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                We&apos;re building the financial infrastructure for the next generation 
                of platforms. Our mission is to make it easy for any platform to 
                offer payments to their merchants.
              </p>
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Story */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold text-[#0a2540] mb-6">
                Our story
              </h2>
              <div className="prose prose-lg text-[#475569] space-y-4">
                <p>
                  Cobalz was founded in 2023 by a team of payments engineers who saw 
                  firsthand how difficult it was for platforms to offer payments to 
                  their merchants.
                </p>
                <p>
                  We believed there had to be a better way. So we built Cobalz on top 
                  of Stripe&apos;s world-class infrastructure, adding the platform-specific 
                  features that businesses actually need.
                </p>
                <p>
                  Today, we power payments for hundreds of platforms across 40+ countries, 
                  helping them onboard merchants faster and keep more of their revenue.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Our values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569]">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Team */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Leadership team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "CEO & Co-founder" },
                { name: "Michael Rodriguez", role: "CTO & Co-founder" },
                { name: "Emily Watson", role: "Head of Product" },
              ].map((person, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[#f4e4a6]/50 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-[#d4af37]">
                      {person.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#0a2540]">{person.name}</h3>
                  <p className="text-[#64748b]">{person.role}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
