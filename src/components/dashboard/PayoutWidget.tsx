"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, Wallet } from "lucide-react";

export function PayoutWidget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payout Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Next Payout */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-[#d4af37]" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Next Payout</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$3,425.75</p>
            <p className="text-sm text-gray-500">Scheduled for March 14, 2026</p>
          </div>
        </div>

        {/* Available Balance */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
            <Wallet className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Available Balance</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">$8,750.00</p>
            <p className="text-sm text-gray-500">Ready for instant payout</p>
          </div>
        </div>

        {/* Payout Settings */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Payout Frequency</span>
            <span className="text-sm font-medium text-gray-900">Daily (Automatic)</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Bank Account</span>
            <span className="text-sm font-medium text-gray-900">•••• 4242</span>
          </div>
        </div>

        <Button variant="outline" className="w-full">
          View Payout History
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
