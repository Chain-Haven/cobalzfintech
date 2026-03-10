"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

const releases = [
  {
    version: "2.1.0",
    date: "March 10, 2026",
    type: "feature",
    changes: [
      "Added support for instant payouts",
      "New merchant analytics dashboard",
      "Improved webhook reliability",
    ],
  },
  {
    version: "2.0.0",
    date: "February 15, 2026",
    type: "breaking",
    changes: [
      "New API versioning scheme",
      "Updated authentication flow",
      "Removed deprecated endpoints",
    ],
  },
  {
    version: "1.9.2",
    date: "January 28, 2026",
    type: "fix",
    changes: [
      "Fixed race condition in webhook processing",
      "Improved error messages for invalid API keys",
    ],
  },
  {
    version: "1.9.1",
    date: "January 10, 2026",
    type: "fix",
    changes: [
      "Resolved issue with payout scheduling",
      "Performance improvements for transaction queries",
    ],
  },
  {
    version: "1.9.0",
    date: "December 20, 2025",
    type: "feature",
    changes: [
      "Added support for 10 new currencies",
      "New fraud detection rules",
      "Enhanced reporting capabilities",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Changelog
              </h1>
              <p className="text-xl text-[#475569] mb-8 leading-relaxed">
                Track the latest updates, features, and improvements to the Cobalz platform.
              </p>
            </div>
          </Container>
        </section>

        {/* Releases */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="max-w-2xl mx-auto">
              {releases.map((release, index) => (
                <div key={index} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-semibold text-[#0a2540]">
                      {release.version}
                    </h2>
                    <Badge 
                      variant={
                        release.type === "feature" ? "green" : 
                        release.type === "breaking" ? "gold" : "gray"
                      }
                    >
                      {release.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#64748b] mb-4">{release.date}</p>
                  <ul className="space-y-2">
                    {release.changes.map((change, cIndex) => (
                      <li key={cIndex} className="flex items-start gap-2 text-[#475569]">
                        <span className="text-[#d4af37]">•</span>
                        {change}
                      </li>
                    ))}
                  </ul>
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
