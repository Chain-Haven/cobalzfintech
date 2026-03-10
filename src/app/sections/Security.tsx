"use client";

import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import {
  Shield,
  Lock,
  FileCheck,
  Server,
  Fingerprint,
  Eye,
} from "lucide-react";

const certifications = [
  { icon: Shield, label: "PCI DSS Level 1", description: "Certified" },
  { icon: Lock, label: "SOC 2 Type II", description: "Compliant" },
  { icon: FileCheck, label: "GDPR", description: "Compliant" },
  { icon: Server, label: "99.99%", description: "Uptime SLA" },
];

const securityFeatures = [
  {
    icon: Fingerprint,
    title: "Advanced Fraud Detection",
    description:
      "Machine learning models analyze every transaction in real-time to prevent fraud before it happens.",
  },
  {
    icon: Eye,
    title: "3D Secure Authentication",
    description:
      "Strong customer authentication for European transactions to reduce liability and improve security.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All sensitive data is encrypted at rest and in transit using AES-256 encryption standards.",
  },
  {
    icon: Server,
    title: "Secure Infrastructure",
    description:
      "Hosted on world-class cloud infrastructure with multiple redundancy layers and DDoS protection.",
  },
];

export function Security() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gold" className="mb-4">
            Enterprise Security
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Security is Our{" "}
            <span className="text-[#d4af37]">Top Priority</span>
          </h2>
          <p className="text-lg text-gray-600">
            Bank-grade security infrastructure with compliance certifications
            trusted by Fortune 500 companies.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
            >
              <cert.icon className="w-8 h-8 text-[#d4af37] mx-auto mb-3" />
              <div className="font-semibold text-gray-900">{cert.label}</div>
              <div className="text-sm text-gray-500">{cert.description}</div>
            </div>
          ))}
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
