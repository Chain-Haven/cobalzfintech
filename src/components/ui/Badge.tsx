import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "gray" | "green" | "blue";
  className?: string;
}

export function Badge({
  children,
  variant = "gray",
  className,
}: BadgeProps) {
  const variants = {
    gold: "bg-[#f4e4a6] text-[#8a6d0b] border-[#d4af37]/30",
    gray: "bg-gray-100 text-gray-700 border-gray-200",
    green: "bg-green-100 text-green-700 border-green-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
