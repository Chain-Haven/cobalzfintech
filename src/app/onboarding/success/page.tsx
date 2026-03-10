"use client";

import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Navigation } from "@/components/Navigation";
import { CheckCircle, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface AccountStatus {
  id: string;
  email: string;
  businessName?: string;
  country: string;
  detailsSubmitted: boolean;
  chargesEnabled: boolean;
  payoutsEnabled: boolean;
  isOnboardingComplete: boolean;
  pendingRequirements: string[];
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const accountId = searchParams.get("accountId");

  const [status, setStatus] = useState<"loading" | "success" | "incomplete" | "error">("loading");
  const [accountData, setAccountData] = useState<AccountStatus | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!accountId) {
      setStatus("error");
      setError("No account ID provided");
      return;
    }

    const checkStatus = async () => {
      try {
        const response = await fetch(`/api/stripe/account-status?accountId=${accountId}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to check account status");
        }

        setAccountData(data.account);

        if (data.account.isOnboardingComplete) {
          setStatus("success");
        } else {
          setStatus("incomplete");
        }
      } catch (err) {
        setStatus("error");
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    };

    checkStatus();
  }, [accountId]);

  return (
    <Card className="shadow-lg">
      {status === "loading" && (
        <CardContent className="py-16 text-center">
          <Loader2 className="w-12 h-12 text-[#d4af37] animate-spin mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Checking your account...
          </h3>
          <p className="text-gray-600">
            Please wait while we verify your onboarding status.
          </p>
        </CardContent>
      )}

      {status === "success" && (
        <>
          <CardHeader className="text-center pb-2">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Welcome to Cobalz!</CardTitle>
            <CardDescription>
              Your merchant account is fully set up and ready to accept payments.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Account ID:</span>
                <span className="font-mono text-xs text-gray-900">{accountData?.id}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Status:</span>
                <span className="inline-flex items-center gap-1 text-green-600 font-medium">
                  <CheckCircle className="w-4 h-4" />
                  Active
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Charges:</span>
                <span className="text-green-600 font-medium">Enabled</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Payouts:</span>
                <span className="text-green-600 font-medium">Enabled</span>
              </div>
            </div>

            <div className="space-y-3">
              <Link href="/dashboard">
                <Button className="w-full" size="lg">
                  Go to Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Need help?{" "}
                <Link href="#" className="text-[#d4af37] hover:underline">
                  Contact support
                </Link>
              </p>
            </div>
          </CardContent>
        </>
      )}

      {status === "incomplete" && (
        <>
          <CardHeader className="text-center pb-2">
            <div className="w-20 h-20 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-yellow-600" />
            </div>
            <CardTitle className="text-2xl">Almost There!</CardTitle>
            <CardDescription>
              Your account is created but needs a few more details to go live.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800 mb-2">
                <strong>Pending requirements:</strong>
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                {accountData?.pendingRequirements.map((req, index) => (
                  <li key={index}>• {req}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <Link href={`/onboarding/refresh?accountId=${accountId}`}>
                <Button className="w-full" size="lg">
                  Complete Onboarding
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </>
      )}

      {status === "error" && (
        <>
          <CardHeader className="text-center pb-2">
            <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <CardTitle className="text-2xl">Something Went Wrong</CardTitle>
            <CardDescription>
              We couldn&apos;t verify your account status.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>

            <div className="space-y-3">
              <Link href="/onboarding">
                <Button className="w-full" size="lg">
                  Try Again
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
}

export default function OnboardingSuccessPage() {
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
            <SuccessContent />
          </Suspense>
        </Container>
      </main>
    </>
  );
}
