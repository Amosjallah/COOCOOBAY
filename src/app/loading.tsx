"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 md:px-6">
      <motion.div
        className="h-14 w-14 rounded-3xl bg-gradient-to-br from-brand-sky via-brand-yellow to-brand-coral shadow-xl"
        animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      />
      <div className="mt-6 font-display text-2xl text-brand-ink">Coocoobay is getting sparkly…</div>
      <div className="mt-2 text-sm font-semibold text-brand-ink/55">Loading premium pixels</div>
    </div>
  );
}
