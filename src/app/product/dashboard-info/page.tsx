"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { ArrowRight, BarChart3, Users, CreditCard, Bell } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BarChart3,
    title: "Real-time analytics",
    description: "Track revenue, transaction volume, and merchant activity with live dashboards.",
  },
  {
    icon: Users,
    title: "Merchant management",
    description: "View and manage all your connected merchants from a single interface.",
  },
  {
    icon: CreditCard,
    title: "Transaction monitoring",
    description: "Monitor all platform transactions with advanced filtering and search.",
  },
  {
    icon: Bell,
    title: "Smart alerts",
    description: "Get notified about important events like failed payments or disputed charges.",
  },
];

export default function DashboardInfoPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Your command center
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                The Cobalz Dashboard gives you complete visibility and control over 
                your payment platform. Monitor performance, manage merchants, 
                and track revenue in real-time.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Open dashboard
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
              Dashboard features
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

        {/* Screenshot Placeholder */}
        <section className="py-24 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-[#0a2540] mb-4">
                Powerful insights at your fingertips
              </h2>
              <p className="text-[#475569]">
                Track key metrics, monitor transactions, and manage your platform with ease.
              </p>
            </div>
            <div className="bg-[#1e293b] rounded-xl p-4 shadow-2xl">
              <div className="rounded-lg bg-[#0f172a] p-8">
                <div className="grid grid-cols-4 gap-4 mb-8">
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <p className="text-sm text-gray-400">Total Revenue</p>
                    <p className="text-2xl font-bold text-white">$48,250</p>
                    <p className="text-sm text-green-400">+12.5%</p>
                  </div>
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <p className="text-sm text-gray-400">Active Merchants</p>
                    <p className="text-2xl font-bold text-white">128</p>
                    <p className="text-sm text-green-400">+8.2%</p>
                  </div>
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <p className="text-sm text-gray-400">Transactions</p>
                    <p className="text-2xl font-bold text-white">1,247</p>
                    <p className="text-sm text-green-400">+23.1%</p>
                  </div>
                  <div className="bg-[#1e293b] rounded-lg p-4">
                    <p className="text-sm text-gray-400">Success Rate</p>
                    <p className="text-2xl font-bold text-white">98.5%</p>
                    <p className="text-sm text-green-400">+0.3%</p>
                  </div>
                </div>
                <div className="h-48 bg-[#1e293b] rounded-lg" />
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 bg-[#0f172a]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-4">
                Ready to take control?
              </h2>
              <p className="text-gray-400 mb-8">
                Access your dashboard to start monitoring your platform.
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
                  Go to dashboard
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
