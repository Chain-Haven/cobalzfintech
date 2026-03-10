import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cobalz | Payment Infrastructure for Platforms",
  description: "Cobalz is the complete payment facilitator platform. Onboard merchants instantly, accept payments globally, and keep more revenue with our Stripe Connect-powered infrastructure.",
  keywords: ["payments", "fintech", "payment facilitator", "payfac", "stripe connect", "merchant onboarding", "payment processing"],
  openGraph: {
    title: "Cobalz | Payment Infrastructure for Platforms",
    description: "The complete payment facilitator platform. Onboard merchants instantly and accept payments globally.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
