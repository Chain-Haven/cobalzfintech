import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#d4af37] text-white hover:bg-[#b8960c] focus:ring-[#d4af37] rounded-lg",
    secondary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-900 rounded-lg",
    outline:
      "border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white focus:ring-[#d4af37] rounded-lg",
    ghost:
      "text-gray-700 hover:text-[#d4af37] hover:bg-[#f4e4a6]/20 focus:ring-[#d4af37] rounded-lg",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
