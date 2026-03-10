"use client";

import { Container } from "@/components/ui/Container";

const certifications = [
  { label: "PCI DSS Level 1", description: "Certified" },
  { label: "SOC 2 Type II", description: "Compliant" },
  { label: "GDPR", description: "Compliant" },
  { label: "99.999%", description: "Uptime SLA" },
];

const securityFeatures = [
  {
    title: "Advanced fraud detection",
    description: "Machine learning models analyze every transaction in real-time to prevent fraud before it happens.",
  },
  {
    title: "3D Secure authentication",
    description: "Strong customer authentication for European transactions to reduce liability and improve security.",
  },
  {
    title: "End-to-end encryption",
    description: "All sensitive data is encrypted at rest and in transit using AES-256 encryption standards.",
  },
  {
    title: "Secure infrastructure",
    description: "Hosted on world-class cloud infrastructure with multiple redundancy layers and DDoS protection.",
  },
];

export function Security() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0a2540] mb-4">
            Enterprise-grade security
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl">
            Bank-grade security infrastructure with compliance certifications trusted by Fortune 500 companies.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center p-6 bg-[#f8fafc] rounded-lg">
              <div className="text-2xl font-semibold text-[#0a2540] mb-1">{cert.label}</div>
              <div className="text-sm text-[#64748b]">{cert.description}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#d4af37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#0a2540] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#475569] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
