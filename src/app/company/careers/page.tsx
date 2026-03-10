"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, Heart, Zap, Users, Globe } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: Heart,
    title: "Health & wellness",
    description: "Comprehensive health, dental, and vision coverage for you and your family.",
  },
  {
    icon: Zap,
    title: "Competitive compensation",
    description: "Salary, equity, and bonuses that reflect your impact.",
  },
  {
    icon: Users,
    title: "Flexible work",
    description: "Hybrid work environment with flexible hours and unlimited PTO.",
  },
  {
    icon: Globe,
    title: "Learning & growth",
    description: "Annual learning budget and conference attendance.",
  },
];

const openings = [
  {
    title: "Senior Backend Engineer",
    department: "Engineering",
    location: "San Francisco / Remote",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "New York / Remote",
  },
  {
    title: "Sales Engineer",
    department: "Sales",
    location: "Remote",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "San Francisco / Remote",
  },
];

export default function CareersPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Join our team
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                We&apos;re building the future of payments infrastructure. 
                Come build it with us.
              </p>
              <Link href="#openings">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  View open positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Container>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Benefits & perks
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569]">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Openings */}
        <section id="openings" className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Open positions
            </h2>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <Card key={index} className="hover:border-[#d4af37] transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-[#0a2540] text-lg">{job.title}</h3>
                        <p className="text-[#64748b]">{job.department} • {job.location}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#d4af37]" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
