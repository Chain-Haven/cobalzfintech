"use client";

import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "What is Cobalz and how does it work?",
    answer:
      "Cobalz is a Payment Facilitator (Payfac) platform that enables software platforms to offer payment processing to their merchants. We handle all the complexity of merchant onboarding, compliance, and payment infrastructure through Stripe Connect, so you can focus on building your platform.",
  },
  {
    question: "How long does merchant onboarding take?",
    answer:
      "With Cobalz, merchants can complete onboarding in under 5 minutes using our Express flow. We collect essential information upfront and handle identity verification, KYC, and compliance checks automatically through Stripe's infrastructure.",
  },
  {
    question: "What are the fees and pricing?",
    answer:
      "Our pricing starts at 2.9% + 30¢ per transaction for the Starter plan, with lower rates as you scale. You keep between 70-90% of the payment revenue depending on your plan. There are no monthly fees, setup fees, or hidden charges.",
  },
  {
    question: "Is Cobalz PCI compliant?",
    answer:
      "Yes, Cobalz is PCI DSS Level 1 certified, the highest level of security certification in the payments industry. We handle all PCI compliance requirements so you and your merchants never have to worry about it.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support all major credit and debit cards (Visa, Mastercard, Amex, Discover), ACH bank transfers, Apple Pay, Google Pay, and 135+ local payment methods across 40+ countries including iDEAL, Bancontact, and more.",
  },
  {
    question: "How do payouts work?",
    answer:
      "Merchants receive payouts automatically based on their chosen schedule (daily, weekly, or monthly). Funds are transferred directly to their linked bank account. As the platform, you receive your revenue share with each transaction in real-time.",
  },
  {
    question: "Can I customize the payment experience?",
    answer:
      "Absolutely! You can customize the onboarding flow with your branding, build custom checkout experiences using our APIs, and white-label the entire payment experience. Enterprise plans include full white-label capabilities.",
  },
  {
    question: "What countries are supported?",
    answer:
      "Cobalz supports merchant onboarding in 40+ countries including the US, Canada, UK, EU member states, Australia, and many more. We can process payments from customers in 135+ countries worldwide.",
  },
  {
    question: "How do I get started?",
    answer:
      "Getting started is simple: sign up for an account, complete our platform verification, integrate our API or use our no-code options, and start onboarding merchants. Most platforms are live within 24-48 hours.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer email support for all plans, priority support with faster response times for Growth plans, and dedicated account managers with 24/7 phone support for Enterprise customers. Our documentation and API reference are comprehensive and always available.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-gray-50" id="faq">
      <Container size="md">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-[#d4af37]">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Cobalz and how it can help your
            platform.
          </p>
        </div>

        <Accordion items={faqItems} />

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-[#d4af37] font-medium hover:underline">
              Contact our team
            </a>{" "}
            for personalized assistance.
          </p>
        </div>
      </Container>
    </section>
  );
}
