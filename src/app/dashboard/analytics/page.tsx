"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Download, TrendingUp, TrendingDown, Calendar } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0a2540]">Analytics</h1>
          <p className="text-[#475569]">Track your platform performance</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 days
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748b]">Total Revenue</p>
                <p className="text-2xl font-bold text-[#0a2540] mt-1">$48,250</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">+12.5% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748b]">New Merchants</p>
                <p className="text-2xl font-bold text-[#0a2540] mt-1">24</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
            </div>
            <p className="text-sm text-green-600 mt-2">+18.2% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748b]">Transaction Volume</p>
                <p className="text-2xl font-bold text-[#0a2540] mt-1">1,247</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#d4af37]" />
              </div>
            </div>
            <p className="text-sm text-[#d4af37] mt-2">+8.4% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#64748b]">Churn Rate</p>
                <p className="text-2xl font-bold text-[#0a2540] mt-1">2.1%</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <TrendingDown className="w-5 h-5 text-red-600" />
              </div>
            </div>
            <p className="text-sm text-red-600 mt-2">+0.3% vs last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Placeholder */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#64748b]">Revenue Chart</p>
                <p className="text-sm text-[#94a3b8]">Integration with Chart.js or similar</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Merchant Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#64748b]">Merchant Growth Chart</p>
                <p className="text-sm text-[#94a3b8]">Integration with Chart.js or similar</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Merchants */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Top Performing Merchants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Merchant</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Revenue</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Growth</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Transactions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Global Retail Co", revenue: "$67,890", growth: "+24%", transactions: 456 },
                  { name: "Acme Corporation", revenue: "$45,230", growth: "+12%", transactions: 234 },
                  { name: "TechStart Inc", revenue: "$32,150", growth: "+18%", transactions: 189 },
                  { name: "Small Biz LLC", revenue: "$12,340", growth: "+8%", transactions: 67 },
                ].map((merchant, index) => (
                  <tr key={index} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 px-4 text-sm font-medium text-[#0a2540]">{merchant.name}</td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{merchant.revenue}</td>
                    <td className="py-4 px-4 text-sm text-green-600">{merchant.growth}</td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{merchant.transactions}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
