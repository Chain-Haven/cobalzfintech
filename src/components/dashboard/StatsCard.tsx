"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

export function StatsCard({ title, value, change, isPositive, icon }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
          </div>
          <div className="w-10 h-10 rounded-lg bg-[#f4e4a6]/50 flex items-center justify-center">
            {icon}
          </div>
        </div>
        <div className="flex items-center gap-1 mt-4">
          {isPositive ? (
            <ArrowUpRight className="w-4 h-4 text-green-600" />
          ) : (
            <ArrowDownRight className="w-4 h-4 text-red-600" />
          )}
          <span className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
            {change}
          </span>
          <span className="text-sm text-gray-500">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}
