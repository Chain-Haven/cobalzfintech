"use client";

import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "What is Cobalz?",
    answer: "Cobalz is a Payment Facilitator (Payfac) platform built on Stripe Connect. We enable software platforms to offer payment processing to their merchants without building complex payments infrastructure from scratch. You focus on your platform; we handle the payments.",
  },
  {
    question: "How does merchant onboarding work?",
    answer: "Merchants complete a streamlined 5-minute onboarding flow. We collect essential information and Stripe handles identity verification, KYC checks, and compliance automatically. Most merchants can start accepting payments the same day.",
  },
  {
    question: "What are the fees?",
    answer: "We charge a percentage of each transaction (starting at 2.9% + 30¢ for Starter plans). You keep 70-90% of the processing revenue depending on your plan. There are no monthly fees, setup fees, or hidden charges.",
  },
  {
    question: "Is Cobalz PCI compliant?",
    answer: "Yes. Because we build on Stripe Connect, both Cobalz and your platform inherit Stripe's PCI DSS Level 1 certification. You never handle sensitive card data, and neither do your merchants.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support all major credit and debit cards (Visa, Mastercard, Amex, Discover), ACH bank transfers, Apple Pay, Google Pay, and 135+ local payment methods across 40+ countries.",
  },
  {
    question: "How do payouts work?",
    answer: "Merchants receive automatic payouts to their linked bank account based on their chosen schedule (daily, weekly, or monthly). As the platform, you receive your revenue share with each transaction in real-time.",
  },
  {
    question: "Can I customize the payment experience?",
    answer: "Absolutely. You can customize the onboarding flow with your branding, build custom checkout experiences using our APIs, and white-label the entire payment experience. Enterprise plans include full white-label capabilities.",
  },
  {
    question: "What countries are supported?",
    answer: "We support merchant onboarding in 40+ countries including the US, Canada, UK, EU member states, Australia, and more. We can process payments from customers in 135+ countries worldwide.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-[#f8fafc]" id="faq">
      <Container size="md">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-lg border border-gray-200 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 p-6 text-[#0a2540] font-medium">
                <span>{faq.question}</span>
                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-[#475569] leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
