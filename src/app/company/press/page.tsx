"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";
import { Download, ExternalLink } from "lucide-react";

const mentions = [
  {
    publication: "TechCrunch",
    title: "Cobalz raises $50M to build payments infrastructure for platforms",
    date: "January 15, 2026",
    link: "#",
  },
  {
    publication: "Forbes",
    title: "The rise of Payfac-as-a-Service: How Cobalz is changing the game",
    date: "December 10, 2025",
    link: "#",
  },
  {
    publication: "Wall Street Journal",
    title: "Why platforms are choosing Cobalz over building payments in-house",
    date: "November 22, 2025",
    link: "#",
  },
];

export default function PressPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Press
              </h1>
              <p className="text-xl text-[#475569] mb-8">
                News, press releases, and media resources.
              </p>
              <div className="flex gap-4">
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Download press kit
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Press Releases */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              Press releases
            </h2>
            <div className="space-y-4">
              {[
                { title: "Cobalz Announces $50M Series B Funding", date: "January 15, 2026" },
                { title: "Cobalz Expands to 40+ Countries", date: "November 5, 2025" },
                { title: "Cobalz Partners with Stripe to Power Platform Payments", date: "September 20, 2025" },
              ].map((release, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-[#0a2540]">{release.title}</h3>
                      <p className="text-[#64748b]">{release.date}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-[#d4af37]" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Media Mentions */}
        <section className="py-24 bg-white">
          <Container>
            <h2 className="text-3xl font-semibold text-[#0a2540] mb-12">
              In the news
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {mentions.map((mention, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <p className="text-sm text-[#d4af37] font-medium">{mention.publication}</p>
                    <CardTitle className="text-lg">{mention.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#64748b] text-sm mb-4">{mention.date}</p>
                    <a href={mention.link} className="text-[#d4af37] hover:underline text-sm inline-flex items-center">
                      Read article
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
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
