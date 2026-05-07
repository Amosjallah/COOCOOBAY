"use client";

import { cn } from "@/lib/cn";

export function FieldLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("text-sm font-semibold text-brand-ink/80", className)}>
      {children}
    </label>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-brand-ink shadow-inner outline-none transition focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/20",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[140px] w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-brand-ink shadow-inner outline-none transition focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/20",
        className,
      )}
      {...props}
    />
  );
}

export function Select({
  className,
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-brand-ink shadow-inner outline-none transition focus:border-brand-purple/40 focus:ring-2 focus:ring-brand-purple/20",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
