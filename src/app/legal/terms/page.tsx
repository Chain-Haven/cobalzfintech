"use client";

import { Container } from "@/components/ui/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 bg-white">
          <Container size="md">
            <h1 className="text-4xl font-semibold text-[#0a2540] mb-8">
              Terms of Service
            </h1>
            <p className="text-[#64748b] mb-8">Last updated: March 10, 2026</p>
            
            <div className="prose prose-lg max-w-none text-[#475569]">
              <p className="mb-6">
                These Terms of Service (&quot;Terms&quot;) govern your access to and use of 
                the Cobalz platform and services. By using our services, you agree 
                to these Terms.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="mb-6">
                By accessing or using Cobalz services, you agree to be bound by these 
                Terms and all applicable laws and regulations. If you do not agree 
                with any part of these Terms, you may not use our services.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                2. Description of Services
              </h2>
              <p className="mb-6">
                Cobalz provides payment processing and merchant onboarding services 
                for platforms. Our services include payment processing, merchant 
                account management, and related financial services.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                3. Account Registration
              </h2>
              <p className="mb-6">
                To use our services, you must create an account. You agree to provide 
                accurate and complete information and keep your account credentials 
                secure. You are responsible for all activity under your account.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                4. Fees and Payments
              </h2>
              <p className="mb-6">
                You agree to pay all fees associated with your use of our services 
                as described on our pricing page. Fees are subject to change with 
                30 days notice. All payments are non-refundable unless otherwise 
                specified.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                5. Prohibited Activities
              </h2>
              <p className="mb-4">
                You may not use our services for:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Illegal activities or fraud</li>
                <li>Money laundering or terrorist financing</li>
                <li>Selling prohibited goods or services</li>
                <li>Violating intellectual property rights</li>
                <li>Any activity that harms our systems or other users</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                6. Limitation of Liability
              </h2>
              <p className="mb-6">
                To the maximum extent permitted by law, Cobalz shall not be liable 
                for any indirect, incidental, special, consequential, or punitive 
                damages arising out of your use of our services.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                7. Changes to Terms
              </h2>
              <p className="mb-6">
                We may modify these Terms at any time. We will notify you of significant 
                changes via email or through our platform. Your continued use of our 
                services after changes constitutes acceptance of the new Terms.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                8. Contact Information
              </h2>
              <p className="mb-6">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@cobalz.com" className="text-[#d4af37] hover:underline">
                  legal@cobalz.com
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
