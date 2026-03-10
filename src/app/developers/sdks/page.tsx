"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Download, ExternalLink } from "lucide-react";

const sdks = [
  {
    name: "Node.js",
    install: "npm install @cobalz/sdk",
    version: "v2.1.0",
    github: "#",
  },
  {
    name: "Python",
    install: "pip install cobalz",
    version: "v1.8.0",
    github: "#",
  },
  {
    name: "Ruby",
    install: "gem install cobalz",
    version: "v1.5.0",
    github: "#",
  },
  {
    name: "PHP",
    install: "composer require cobalz/cobalz-php",
    version: "v3.0.0",
    github: "#",
  },
  {
    name: "Go",
    install: "go get github.com/cobalz/cobalz-go",
    version: "v1.2.0",
    github: "#",
  },
  {
    name: "Java",
    install: "Maven: com.cobalz:cobalz-java:2.0.0",
    version: "v2.0.0",
    github: "#",
  },
];

export default function SDKsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                SDKs
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Official SDKs for popular programming languages. 
                Build integrations faster with our client libraries.
              </p>
            </div>
          </Container>
        </section>

        {/* SDKs Grid */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sdks.map((sdk, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{sdk.name}</CardTitle>
                      <span className="text-sm text-[#64748b]">{sdk.version}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <code className="text-sm text-[#475569] bg-gray-100 px-3 py-2 rounded block mb-4">
                      {sdk.install}
                    </code>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Install
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Community */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-semibold text-[#0a2540] mb-4">
                Community SDKs
              </h2>
              <p className="text-[#475569] mb-6">
                Community-maintained SDKs for additional languages and frameworks.
              </p>
              <div className="bg-[#f8fafc] rounded-lg p-6">
                <p className="text-[#64748b] mb-4">
                  Don&apos;t see your language? Build an SDK and let us know!
                </p>
                <Button variant="outline">
                  Submit your SDK
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
