"use client";

import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

const posts = [
  {
    title: "Introducing instant payouts for all merchants",
    excerpt: "Merchants can now receive funds in their bank account within minutes, not days.",
    category: "Product",
    date: "March 10, 2026",
    readTime: "3 min read",
  },
  {
    title: "How we scaled to process $1B in payments",
    excerpt: "A deep dive into the engineering challenges of building payment infrastructure at scale.",
    category: "Engineering",
    date: "March 5, 2026",
    readTime: "8 min read",
  },
  {
    title: "The future of platform payments",
    excerpt: "Our vision for the next decade of payments infrastructure.",
    category: "Industry",
    date: "February 28, 2026",
    readTime: "5 min read",
  },
  {
    title: "New SDKs for Go and Java",
    excerpt: "Announcing official SDK support for two more programming languages.",
    category: "Developers",
    date: "February 20, 2026",
    readTime: "2 min read",
  },
  {
    title: "Security best practices for payment platforms",
    excerpt: "Essential security measures every platform should implement.",
    category: "Security",
    date: "February 15, 2026",
    readTime: "6 min read",
  },
  {
    title: "Customer spotlight: TechMarketplace",
    excerpt: "How TechMarketplace scaled their payments with Cobalz.",
    category: "Customers",
    date: "February 10, 2026",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-24 bg-white">
          <Container>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold text-[#0a2540] mb-6">
                Blog
              </h1>
              <p className="text-xl text-[#475569]">
                Insights, updates, and stories from the Cobalz team.
              </p>
            </div>
          </Container>
        </section>

        {/* Posts */}
        <section className="py-24 bg-[#f8fafc]">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card key={index} className="cursor-pointer hover:border-[#d4af37] transition-colors">
                  <CardHeader>
                    <Badge variant="gold" className="mb-2">{post.category}</Badge>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#475569] mb-4">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-sm text-[#64748b]">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
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
