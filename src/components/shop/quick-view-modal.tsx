"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Product } from "@/lib/products";

export function QuickViewModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-[75]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close quick view"
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.98 }}
            className="relative mx-auto mt-16 w-[min(980px,calc(100%-2rem))] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative aspect-square bg-brand-sky-soft md:aspect-auto md:min-h-[420px]">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-8">
                <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
                  {product.category}
                </div>
                <div className="mt-2 font-display text-3xl text-brand-ink">{product.name}</div>
                <div className="mt-4 flex items-end gap-3">
                  <div className="font-display text-4xl text-brand-ink">
                    GH₵ {product.priceGHS}
                  </div>
                  {product.compareAtGHS ? (
                    <div className="pb-1 text-lg font-bold text-brand-ink/35 line-through">
                      GH₵ {product.compareAtGHS}
                    </div>
                  ) : null}
                </div>
                <p className="mt-4 text-base leading-relaxed text-brand-ink/65">
                  {product.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {product.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full bg-brand-sky-soft px-3 py-1 text-xs font-bold text-brand-ink/70"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={onClose}
                    className="flex-1 rounded-full bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-sky py-4 text-center text-sm font-black text-brand-ink shadow-lg"
                  >
                    Customize & buy
                  </Link>
                  <Link
                    href={`/shop/${product.slug}`}
                    onClick={onClose}
                    className="flex-1 rounded-full border border-black/10 bg-white py-4 text-center text-sm font-black text-brand-ink"
                  >
                    Full details
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
