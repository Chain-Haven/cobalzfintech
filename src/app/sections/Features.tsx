"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  CreditCard,
  Users,
  BarChart3,
  Shield,
  Headphones,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Instant Payments",
    description:
      "Accept credit cards, debit cards, and ACH transfers from customers worldwide. Real-time processing with instant confirmation.",
  },
  {
    icon: Users,
    title: "Merchant Onboarding",
    description:
      "Onboard merchants in under 5 minutes with our streamlined KYC flow. Stripe handles verification, compliance, and risk management.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get real-time insights into transaction volumes, revenue trends, and merchant performance with comprehensive reporting dashboards.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "PCI DSS Level 1 compliant infrastructure with advanced fraud detection, 3D Secure authentication, and chargeback protection.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Support for 135+ currencies and 40+ countries. Accept payments from customers anywhere in the world with local payment methods.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support for you and your merchants. Dedicated account managers for enterprise clients.",
  },
];

export function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{" "}
            <span className="text-[#d4af37]">Run Your Payfac</span>
          </h2>
          <p className="text-lg text-gray-600">
            A complete payments platform that handles the complexity so you can
            focus on growing your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} hover>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#d4af37]" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
