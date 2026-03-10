"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Badge } from "@/components/ui/Badge";

const endpoints = [
  {
    method: "POST",
    path: "/v1/accounts",
    name: "Create account",
    description: "Create a new connected account for a merchant.",
  },
  {
    method: "GET",
    path: "/v1/accounts/{id}",
    name: "Retrieve account",
    description: "Retrieve the details of an existing account.",
  },
  {
    method: "POST",
    path: "/v1/account_links",
    name: "Create account link",
    description: "Create a link for merchant onboarding.",
  },
  {
    method: "POST",
    path: "/v1/payment_intents",
    name: "Create payment intent",
    description: "Create a payment intent to process a payment.",
  },
  {
    method: "GET",
    path: "/v1/transactions",
    name: "List transactions",
    description: "List all transactions for your platform.",
  },
  {
    method: "GET",
    path: "/v1/payouts",
    name: "List payouts",
    description: "List all payouts for your platform or a specific merchant.",
  },
];

export default function ApiReferencePage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                API Reference
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Complete reference documentation for the Cobalz API. 
                Build integrations with our RESTful endpoints.
              </p>
            </div>
          </Container>
        </section>

        {/* Authentication */}
        <section className="py-12 bg-[#f8fafc] border-y border-gray-200">
          <Container>
            <h2 className="text-2xl font-semibold text-[#0a2540] mb-4">Authentication</h2>
            <p className="text-[#475569] mb-4">
              All API requests must include your API key in the Authorization header:
            </p>
            <div className="bg-[#1e293b] rounded-lg p-4 overflow-x-auto">
              <code className="text-sm text-gray-300">
                Authorization: Bearer sk_live_...
              </code>
            </div>
          </Container>
        </section>

        {/* Endpoints */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              API Endpoints
            </h2>
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={endpoint.method === "GET" ? "blue" : "green"}
                        className={endpoint.method === "POST" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm font-mono text-[#0a2540]">{endpoint.path}</code>
                    </div>
                    <CardTitle className="mt-2">{endpoint.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569]">{endpoint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* SDKs */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-8">
              Official SDKs
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Node.js", desc: "npm install @cobalz/sdk" },
                { name: "Python", desc: "pip install cobalz" },
                { name: "Ruby", desc: "gem install cobalz" },
              ].map((sdk, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{sdk.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <code className="text-sm text-[#475569] bg-gray-100 px-2 py-1 rounded">
                      {sdk.desc}
                    </code>
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
