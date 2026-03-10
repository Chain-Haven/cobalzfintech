"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "completed" | "pending" | "failed";
  type: "payment" | "payout";
}

const mockTransactions: Transaction[] = [
  { id: "txn_1", date: "Mar 10, 2026", description: "Payment from Customer #1234", amount: "$1,250.00", status: "completed", type: "payment" },
  { id: "txn_2", date: "Mar 9, 2026", description: "Payout to Bank Account", amount: "$980.50", status: "completed", type: "payout" },
  { id: "txn_3", date: "Mar 9, 2026", description: "Payment from Customer #1235", amount: "$450.00", status: "completed", type: "payment" },
  { id: "txn_4", date: "Mar 8, 2026", description: "Payment from Customer #1236", amount: "$2,100.00", status: "pending", type: "payment" },
  { id: "txn_5", date: "Mar 8, 2026", description: "Refund to Customer #1230", amount: "$125.00", status: "completed", type: "payout" },
  { id: "txn_6", date: "Mar 7, 2026", description: "Payment from Customer #1237", amount: "$875.25", status: "completed", type: "payment" },
];

export function TransactionTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Transaction</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 last:border-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${transaction.type === "payment" ? "bg-green-100" : "bg-blue-100"}`}>
                        {transaction.type === "payment" ? (
                          <ArrowUpRight className="w-4 h-4 text-green-600" />
                        ) : (
                          <ArrowDownLeft className="w-4 h-4 text-blue-600" />
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{transaction.description}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-600">{transaction.date}</td>
                  <td className="py-4 px-4 text-sm font-medium text-gray-900">{transaction.amount}</td>
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
  );
}
