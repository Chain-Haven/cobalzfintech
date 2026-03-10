"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownLeft, Download, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  type: "payment" | "payout" | "refund";
  merchant: string;
}

const mockTransactions: Transaction[] = [
  { id: "txn_1", date: "Mar 10, 2026", description: "Payment for Invoice #1234", amount: "$1,250.00", status: "completed", type: "payment", merchant: "Acme Corp" },
  { id: "txn_2", date: "Mar 9, 2026", description: "Payout to Bank Account ••••4242", amount: "$980.50", status: "completed", type: "payout", merchant: "Platform" },
  { id: "txn_3", date: "Mar 9, 2026", description: "Payment for Subscription", amount: "$450.00", status: "completed", type: "payment", merchant: "TechStart Inc" },
  { id: "txn_4", date: "Mar 8, 2026", description: "Payment for Order #5678", amount: "$2,100.00", status: "pending", type: "payment", merchant: "Global Retail" },
  { id: "txn_5", date: "Mar 8, 2026", description: "Refund for Order #1230", amount: "$125.00", status: "completed", type: "refund", merchant: "Acme Corp" },
  { id: "txn_6", date: "Mar 7, 2026", description: "Monthly Subscription", amount: "$875.25", status: "completed", type: "payment", merchant: "SaaS Company" },
  { id: "txn_7", date: "Mar 7, 2026", description: "Payout to Bank Account ••••4242", amount: "$3,250.00", status: "completed", type: "payout", merchant: "Platform" },
  { id: "txn_8", date: "Mar 6, 2026", description: "Failed Payment Retry", amount: "$500.00", status: "failed", type: "payment", merchant: "Small Biz LLC" },
];

export default function TransactionsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0a2540]">Transactions</h1>
          <p className="text-[#475569]">View and manage all platform transactions</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Total Volume</p>
            <p className="text-2xl font-bold text-[#0a2540] mt-1">$48,250.00</p>
            <p className="text-sm text-green-600 mt-1">+12.5% vs last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Successful Payments</p>
            <p className="text-2xl font-bold text-[#0a2540] mt-1">1,247</p>
            <p className="text-sm text-green-600 mt-1">98.5% success rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <p className="text-sm text-[#64748b]">Pending</p>
            <p className="text-2xl font-bold text-[#0a2540] mt-1">$8,450.00</p>
            <p className="text-sm text-[#64748b] mt-1">23 transactions</p>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Transaction</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Merchant</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-[#64748b]">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          transaction.type === "payment" ? "bg-green-100" : 
                          transaction.type === "refund" ? "bg-red-100" : "bg-blue-100"
                        }`}>
                          {transaction.type === "payment" ? (
                            <ArrowUpRight className="w-4 h-4 text-green-600" />
                          ) : transaction.type === "refund" ? (
                            <ArrowDownLeft className="w-4 h-4 text-red-600" />
                          ) : (
                            <ArrowDownLeft className="w-4 h-4 text-blue-600" />
                          )}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-[#0a2540]">{transaction.description}</span>
                          <p className="text-xs text-[#64748b]">{transaction.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{transaction.merchant}</td>
                    <td className="py-4 px-4 text-sm text-[#475569]">{transaction.date}</td>
                    <td className="py-4 px-4 text-sm font-medium text-[#0a2540]">{transaction.amount}</td>
                    <td className="py-4 px-4">
                      <Badge
                        variant={
                          transaction.status === "completed"
                            ? "green"
                            : transaction.status === "pending"
                            ? "gold"
                            : "gray"
                        }
                      >
                        {transaction.status}
                      </Badge>
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
