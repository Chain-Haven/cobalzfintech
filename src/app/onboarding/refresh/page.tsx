"use client";

import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Navigation } from "@/components/Navigation";
import { Loader2, RefreshCw, ArrowRight } from "lucide-react";

function RefreshContent() {
  const searchParams = useSearchParams();
  const accountId = searchParams.get("accountId");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const restartOnboarding = async () => {
    if (!accountId) {
      setError("No account ID provided");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/stripe/create-account-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accountId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to create new onboarding link");
      }

      // Redirect to Stripe onboarding
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      setIsLoading(false);
    }
  };

  // Auto-start onboarding when page loads
  useEffect(() => {
    if (accountId) {
      restartOnboarding();
    }
  }, [accountId]);

  return (
    <Card className="shadow-lg">
      <CardHeader className="text-center pb-2">
        <div className="w-20 h-20 rounded-full bg-[#f4e4a6]/50 flex items-center justify-center mx-auto mb-4">
          <RefreshCw className="w-10 h-10 text-[#d4af37]" />
        </div>
        <CardTitle className="text-2xl">Resume Onboarding</CardTitle>
        <CardDescription>
          Your previous session expired. Let&apos;s continue where you left off.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {isLoading ? (
          <div className="py-8 text-center">
            <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin mx-auto mb-4" />
            <p className="text-gray-600">
              Generating a new secure onboarding link...
            </p>
          </div>
        ) : (
          <>
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                {error}
              </div>
            )}

            <Button
              onClick={restartOnboarding}
              className="w-full"
              size="lg"
              disabled={!accountId}
            >
              Continue Onboarding
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Link href="/onboarding">
              <Button variant="ghost" className="w-full">
                Start Over
              </Button>
            </Link>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default function OnboardingRefreshPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#f4e4a6]/10 pt-20">
        <Container size="sm" className="py-12">
          <Suspense fallback={
            <Card className="shadow-lg">
              <CardContent className="py-16 text-center">
                <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">Loading...</h3>
              </CardContent>
            </Card>
          }>
            <RefreshContent />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
