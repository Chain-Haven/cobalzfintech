"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search, Plus, Mail, ExternalLink } from "lucide-react";

interface Merchant {
  id: string;
  name: string;
  email: string;
  status: "active" | "pending" | "suspended";
  volume: string;
  transactions: number;
  joined: string;
}

const mockMerchants: Merchant[] = [
  { id: "mer_1", name: "Acme Corporation", email: "billing@acme.com", status: "active", volume: "$45,230", transactions: 234, joined: "Jan 2025" },
  { id: "mer_2", name: "TechStart Inc", email: "payments@techstart.io", status: "active", volume: "$32,150", transactions: 189, joined: "Feb 2025" },
  { id: "mer_3", name: "Global Retail Co", email: "finance@globalretail.com", status: "active", volume: "$67,890", transactions: 456, joined: "Dec 2024" },
  { id: "mer_4", name: "SaaS Company", email: "billing@saas.co", status: "pending", volume: "$0", transactions: 0, joined: "Mar 2026" },
  { id: "mer_5", name: "Small Biz LLC", email: "owner@smallbiz.com", status: "active", volume: "$12,340", transactions: 67, joined: "Jan 2025" },
  { id: "mer_6", name: "Enterprise Solutions", email: "ap@enterprise.com", status: "suspended", volume: "$8,900", transactions: 45, joined: "Nov 2024" },
];

export default function MerchantsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0a2540]">Merchants</h1>
          <p className="text-[#475569]">Manage your connected merchants</p>
        </div>
        <Button className="bg-[#d4af37] hover:bg-[#b8960c] text-white">
          <Plus className="w-4 h-4 mr-2" />
          Invite Merchant
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Total Merchants</p>
            <p className="text-2xl font-bold text-[#0a2540] mt-1">128</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Active</p>
            <p className="text-2xl font-bold text-green-600 mt-1">112</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Pending</p>
            <p className="text-2xl font-bold text-[#d4af37] mt-1">14</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Suspended</p>
            <p className="text-2xl font-bold text-red-600 mt-1">2</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <Input placeholder="Search merchants..." className="pl-10" />
        </div>
      </div>

      {/* Merchants Table */}
      <Card>
        <CardHeader>
          <CardTitle>All Merchants</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Merchant</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Volume</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Transactions</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Joined</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockMerchants.map((merchant) => (
                  <tr key={merchant.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div>
                        <p className="text-sm font-medium text-[#0a2540]">{merchant.name}</p>
                        <p className="text-xs text-[#64748b]">{merchant.email}</p>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          merchant.status === "active"
                            ? "green"
                            : merchant.status === "pending"
                            ? "gold"
                            : "gray"
                        }
                      >
                        {merchant.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{merchant.volume}</td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{merchant.transactions}</td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{merchant.joined}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Mail className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
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
