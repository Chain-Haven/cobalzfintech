"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Shield, Lock, Server, FileCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "PCI DSS Level 1",
    description: "We maintain the highest level of PCI compliance, ensuring all cardholder data is protected.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3.",
  },
  {
    icon: Server,
    title: "Infrastructure Security",
    description: "Our infrastructure is hosted on SOC 2 compliant data centers with 24/7 monitoring.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "We comply with GDPR, SOC 2 Type II, and other international security standards.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Security
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Security is built into everything we do. We protect your data 
                with industry-leading security practices and compliance standards.
              </p>
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
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

        {/* Certifications */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Certifications & Compliance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "PCI DSS", level: "Level 1 Certified" },
                { name: "SOC 2", level: "Type II Compliant" },
                { name: "GDPR", level: "Compliant" },
                { name: "ISO 27001", level: "Certified" },
              ].map((cert, index) => (
                <div key={index} className="text-center p-6 bg-[#f8fafc] rounded-lg">
                  <p className="font-semibold text-[#0a2540] mb-1">{cert.name}</p>
                  <p className="text-sm text-[#64748b]">{cert.level}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Bug Bounty */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Security Research
              </h2>
              <p className="text-gray-400 mb-8">
                We operate a responsible disclosure program. If you&apos;ve found 
                a security vulnerability, please let us know.
              </p>
              <a 
                href="mailto:security@cobalz.com" 
                className="inline-flex items-center text-[#d4af37] hover:underline"
              >
                Report a vulnerability
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
