"use client";

import { Container } from "@/components/ui/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 bg-white">
          <Container size="md">
            <h1 className="text-4xl font-semibold text-[#0a2540] mb-8">
              Privacy Policy
            </h1>
            <p className="text-[#64748b] mb-8">Last updated: March 10, 2026</p>
            
            <div className="prose prose-lg max-w-none text-[#475569]">
              <p className="mb-6">
                At Cobalz, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you use our platform.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Information We Collect
              </h2>
              <p className="mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Account information (name, email, business details)</li>
                <li>Payment and billing information</li>
                <li>Merchant information you provide for onboarding</li>
                <li>Communication history with our support team</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Provide and maintain our services</li>
                <li>Process payments and transactions</li>
                <li>Comply with legal and regulatory requirements</li>
                <li>Improve our products and services</li>
                <li>Communicate with you about updates and support</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Data Security
              </h2>
              <p className="mb-6">
                We implement appropriate technical and organizational security measures 
                to protect your data. This includes encryption, access controls, and regular 
                security audits. However, no method of transmission over the internet is 
                100% secure.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Your Rights
              </h2>
              <p className="mb-4">
                Depending on your location, you may have rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate data</li>
                <li>Deletion of your data</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@cobalz.com" className="text-[#d4af37] hover:underline">
                  privacy@cobalz.com
                </a>.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
