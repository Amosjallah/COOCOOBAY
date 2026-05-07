"use client";

import { cn } from "@/lib/cn";
import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = HTMLMotionProps<"button"> & {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 disabled:opacity-50";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-[15px]",
    lg: "px-8 py-4 text-base",
  }[size];
  const variants = {
    primary:
      "bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-sky text-white shadow-[0_18px_45px_-15px_color-mix(in_oklab,var(--color-brand-coral)_55%,transparent)] hover:brightness-[1.03]",
    secondary:
      "bg-brand-paper text-brand-ink border border-brand-cocoa/15 shadow-sm hover:bg-brand-sky-soft",
    ghost: "bg-transparent text-brand-ink hover:bg-black/5",
    outline:
      "border-2 border-white/70 text-white hover:bg-white/10 backdrop-blur",
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(base, sizes, variants, className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
