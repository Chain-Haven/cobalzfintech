"use client";

import { Container } from "@/components/ui/Container";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { TransactionTable } from "@/components/dashboard/TransactionTable";
import { PayoutWidget } from "@/components/dashboard/PayoutWidget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  CreditCard,
  ArrowUpRight,
  Bell,
  Download
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$48,250.00",
    change: "+12.5%",
    isPositive: true,
    icon: <DollarSign className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: "Active Merchants",
    value: "128",
    change: "+8.2%",
    isPositive: true,
    icon: <Users className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: "Transaction Volume",
    value: "$125,430",
    change: "+23.1%",
    isPositive: true,
    icon: <TrendingUp className="w-5 h-5 text-[#d4af37]" />,
  },
  {
    title: "Success Rate",
    value: "98.5%",
    change: "+0.3%",
    isPositive: true,
    icon: <CreditCard className="w-5 h-5 text-[#d4af37]" />,
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your platform.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <ArrowUpRight className="w-4 h-4 mr-2" />
            View Reports
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Transactions */}
        <div className="lg:col-span-2">
          <TransactionTable />
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <PayoutWidget />
          
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-2" />
                Create Payment Link
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="w-4 h-4 mr-2" />
                Invite Merchant
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Bell className="w-4 h-4 mr-2" />
                Set Up Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Platform Status */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
              <p className="text-sm text-gray-300">
                API response time: <span className="text-white font-medium">45ms</span>
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Uptime: <span className="text-white font-medium">99.99%</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
