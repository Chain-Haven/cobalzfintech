"use client";

import { Container } from "@/components/ui/Container";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/app/sections/Footer";

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 bg-white">
          <Container size="md">
            <h1 className="text-4xl font-semibold text-[#0a2540] mb-8">
              Cookie Policy
            </h1>
            <p className="text-[#64748b] mb-8">Last updated: March 10, 2026</p>
            
            <div className="prose prose-lg max-w-none text-[#475569]">
              <p className="mb-6">
                This Cookie Policy explains how Cobalz uses cookies and similar 
                technologies on our website and platform.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                What are Cookies?
              </h2>
              <p className="mb-6">
                Cookies are small text files that are stored on your device when 
                you visit a website. They help us provide you with a better experience 
                and understand how you use our services.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Types of Cookies We Use
              </h2>
              
              <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
                Essential Cookies
              </h3>
              <p className="mb-4">
                These cookies are necessary for our website to function properly. 
                They enable core functionality like security, account authentication, 
                and accessibility. You cannot opt out of these cookies.
              </p>

              <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
                Performance Cookies
              </h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our 
                website by collecting anonymous information. This helps us improve 
                our website and services.
              </p>

              <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
                Functional Cookies
              </h3>
              <p className="mb-4">
                These cookies enable enhanced functionality and personalization, 
                such as remembering your preferences and settings.
              </p>

              <h3 className="text-xl font-semibold text-[#0a2540] mt-8 mb-3">
                Marketing Cookies
              </h3>
              <p className="mb-6">
                These cookies are used to deliver relevant advertisements and track 
                the effectiveness of our marketing campaigns.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Managing Cookies
              </h2>
              <p className="mb-6">
                Most web browsers allow you to control cookies through their 
                settings. You can usually find these settings in the &quot;Options&quot; 
                or &quot;Preferences&quot; menu of your browser. Please note that disabling 
                certain cookies may affect the functionality of our website.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Third-Party Cookies
              </h2>
              <p className="mb-6">
                We may use third-party services that set their own cookies, such 
                as analytics providers and advertising networks. These third parties 
                have their own cookie policies.
              </p>

              <h2 className="text-2xl font-semibold text-[#0a2540] mt-12 mb-4">
                Contact Us
              </h2>
              <p className="mb-6">
                If you have questions about our Cookie Policy, please contact us at{" "}
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
