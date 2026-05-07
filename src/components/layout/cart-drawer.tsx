"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { cartTotal, useCartStore } from "@/store/cart-store";

export function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const setQty = useCartStore((s) => s.setQty);

  const total = cartTotal(items);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[80]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button
            type="button"
            aria-label="Close cart"
            className="absolute inset-0 bg-black/45 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="absolute right-0 top-0 h-full w-[min(440px,100%)] bg-brand-paper shadow-2xl ring-1 ring-brand-cocoa/10"
          >
            <div className="flex items-center justify-between border-b border-brand-cocoa/10 p-5">
              <div>
                <div className="font-display text-2xl text-brand-ink">Your cart</div>
                <div className="text-sm font-semibold text-brand-ink/55">
                  Ghana-wide delivery • Gift-ready wrapping
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-cream"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[calc(100%-190px)] overflow-auto p-4">
              {items.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-brand-cocoa/20 bg-brand-sky-soft/50 p-8 text-center">
                  <div className="font-display text-xl text-brand-ink">So empty…</div>
                  <p className="mt-2 text-sm font-semibold text-brand-ink/60">
                    Add a customized tee or a birthday kit — we’ll print magic.
                  </p>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="mt-5 inline-flex rounded-full bg-brand-cocoa px-5 py-3 text-sm font-black text-brand-paper"
                  >
                    Browse collection
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((it) => (
                    <div
                      key={it.key}
                      className="flex gap-3 rounded-3xl border border-brand-cocoa/10 bg-brand-cream/60 p-3"
                    >
                      <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-brand-sky-soft">
                        <Image src={it.image} alt={it.name} fill className="object-cover" sizes="80px" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-bold text-brand-ink">{it.name}</div>
                        <div className="mt-1 text-xs font-semibold text-brand-ink/55">
                          {[it.color, it.size].filter(Boolean).join(" • ")}
                          {it.customizationSummary ? ` • ${it.customizationSummary}` : ""}
                        </div>
                        <div className="mt-2 flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-2 rounded-full border border-brand-cocoa/12 bg-brand-sky-soft/50 p-1">
                            <button
                              type="button"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-paper"
                              aria-label="Decrease quantity"
                              onClick={() => setQty(it.key, it.qty - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="min-w-6 text-center text-sm font-black">{it.qty}</span>
                            <button
                              type="button"
                              className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-paper"
                              aria-label="Increase quantity"
                              onClick={() => setQty(it.key, it.qty + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          <button
                            type="button"
                            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper"
                            aria-label="Remove item"
                            onClick={() => remove(it.key)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-brand-cocoa/10 bg-brand-paper p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-brand-ink/55">Subtotal</span>
                <span className="font-display text-2xl text-brand-ink">GH₵ {total.toFixed(0)}</span>
              </div>
              <Link
                href="/checkout"
                onClick={onClose}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-sky py-4 text-sm font-black text-white shadow-lg"
              >
                Secure checkout
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="mt-3 w-full rounded-full border border-brand-cocoa/15 bg-brand-cream/50 py-3 text-sm font-bold text-brand-ink/70"
              >
                Continue shopping
              </button>
            </div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
