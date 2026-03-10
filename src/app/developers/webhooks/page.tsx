"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Bell, Shield, Code } from "lucide-react";
import Link from "next/link";

const events = [
  "account.created",
  "account.updated",
  "payment_intent.succeeded",
  "payment_intent.payment_failed",
  "payout.created",
  "payout.paid",
  "dispute.created",
  "refund.created",
];

export default function WebhooksPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Webhooks
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Receive real-time notifications about events in your Cobalz account. 
                Webhooks allow you to build reactive systems that respond instantly 
                to payment events.
              </p>
            </div>
          </Container>
        </section>

        {/* How it Works */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              How webhooks work
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Bell className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Event occurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    A payment is processed, a merchant is onboarded, or a dispute is filed.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Code className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>Payload sent</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Cobalz sends a JSON payload to your configured webhook endpoint.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <CardTitle>You process</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#475569]">
                    Your application receives the event and takes appropriate action.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Events */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-8">
              Available events
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {events.map((event, index) => (
                <div key={index} className="p-4 bg-[#f8fafc] rounded-lg">
                  <code className="text-sm text-[#0a2540] font-mono">{event}</code>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Code Example */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold text-[#0a2540] mb-8">
                Handling webhooks
              </h2>
              <div className="bg-[#1e293b] rounded-lg p-6 overflow-x-auto">
                <pre className="text-sm text-gray-300">
                  <code>{`// Express webhook handler
app.post('/webhooks', (req, res) => {
  const event = req.body;
  
  switch (event.type) {
    case 'payment_intent.succeeded':
      // Handle successful payment
      console.log('Payment succeeded:', event.data.id);
      break;
    case 'account.updated':
      // Handle account update
      console.log('Account updated:', event.data.id);
      break;
    default:
      console.log('Unhandled event:', event.type);
  }
  
  res.json({ received: true });
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
