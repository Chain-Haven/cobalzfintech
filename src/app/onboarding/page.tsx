"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, Loader2, CheckCircle, Building2, Mail, Globe } from "lucide-react";
import Link from "next/link";

const countries = [
  { code: "US", name: "United States" },
  { code: "CA", name: "Canada" },
  { code: "GB", name: "United Kingdom" },
  { code: "AU", name: "Australia" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "IT", name: "Italy" },
  { code: "NL", name: "Netherlands" },
  { code: "IE", name: "Ireland" },
];

export default function OnboardingPage() {
  const [formData, setFormData] = useState({
    email: "",
    businessName: "",
    country: "US",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [accountId, setAccountId] = useState("");
  const [step, setStep] = useState<"form" | "created" | "redirecting">("form");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Step 1: Create Stripe account
      const createResponse = await fetch("/api/stripe/create-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const createData = await createResponse.json();

      if (!createResponse.ok) {
        throw new Error(createData.error || "Failed to create account");
      }

      setAccountId(createData.accountId);
      setStep("created");
      setIsLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsLoading(false);
    }
  };

  const startOnboarding = async () => {
    setIsLoading(true);
    setStep("redirecting");

    try {
      // Step 2: Create account link for onboarding
      const linkResponse = await fetch("/api/stripe/create-account-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId }),
      });

      const linkData = await linkResponse.json();

      if (!linkResponse.ok) {
        throw new Error(linkData.error || "Failed to create onboarding link");
      }

      // Redirect to Stripe onboarding
      window.location.href = linkData.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setStep("created");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f4e4a6]/10 pt-20">
        <Container size="sm" className="py-12">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step === "form" ? "text-[#d4af37]" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "form" ? "bg-[#d4af37] text-white" : "bg-gray-200"}`}>
                  1
                </div>
                <span className="text-sm font-medium">Sign Up</span>
              </div>
              <div className="w-12 h-px bg-gray-200" />
              <div className={`flex items-center gap-2 ${step === "created" || step === "redirecting" ? "text-[#d4af37]" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${step === "created" || step === "redirecting" ? "bg-[#d4af37] text-white" : "bg-gray-200"}`}>
                  2
                </div>
                <span className="text-sm font-medium">Verify</span>
              </div>
              <div className="w-12 h-px bg-gray-200" />
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="text-sm font-medium">Go Live</span>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            {step === "form" && (
              <>
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-[#f4e4a6]/50 flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <CardTitle className="text-2xl">Create Your Merchant Account</CardTitle>
                  <CardDescription>
                    Start accepting payments in minutes. Fill out the form below to get started.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      label="Business Email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />

                    <Input
                      label="Business Name"
                      type="text"
                      placeholder="Your Company Inc."
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      required
                    />

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <select
                          value={formData.country}
                          onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 focus:border-[#d4af37] appearance-none"
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Creating Account...
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      By continuing, you agree to our{" "}
                      <Link href="#" className="text-[#d4af37] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#d4af37] hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </form>
                </CardContent>
              </>
            )}

            {step === "created" && (
              <>
                <CardHeader className="text-center pb-2">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Account Created!</CardTitle>
                  <CardDescription>
                    Great! Now let&apos;s complete your verification to start accepting payments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Business:</span>
                      <span className="font-medium text-gray-900">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium text-gray-900">{formData.email}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Account ID:</span>
                      <span className="font-mono text-xs text-gray-900">{accountId}</span>
                    </div>
                  </div>

                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  <Button
                    onClick={startOnboarding}
                    className="w-full"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Preparing Onboarding...
                      </>
                    ) : (
                      <>
                        Complete Verification
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    You&apos;ll be redirected to Stripe to securely complete identity verification.
                  </p>
                </CardContent>
              </>
            )}

            {step === "redirecting" && (
              <CardContent className="py-16 text-center">
                <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Redirecting to Stripe...
                </h3>
                <p className="text-gray-600">
                  Please wait while we prepare your secure onboarding session.
                </p>
              </CardContent>
            )}
          </Card>
        </Container>
      </main>
    </>
  );
}
