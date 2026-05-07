"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input } from "@/components/ui/field";
import { cartTotal, useCartStore } from "@/store/cart-store";

export function CheckoutPageClient() {
  const items = useCartStore((s) => s.items);
  const total = useMemo(() => cartTotal(items), [items]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
            Checkout
          </div>
          <h1 className="font-display text-4xl text-brand-ink">Secure checkout (UI-ready)</h1>
          <p className="mt-2 max-w-2xl text-brand-ink/65">
            Connect Paystack + Mobile Money providers here. This page already reflects cart state and totals for Ghana-first UX.
          </p>
        </div>
        <Link href="/shop" className="text-sm font-black text-brand-purple">
          ← Continue shopping
        </Link>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
            <div className="font-display text-2xl text-brand-ink">Customer</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <FieldLabel>Full name</FieldLabel>
                <Input className="mt-2" placeholder="Parent / guardian" />
              </div>
              <div>
                <FieldLabel>WhatsApp</FieldLabel>
                <Input className="mt-2" placeholder="024…" />
              </div>
              <div className="md:col-span-2">
                <FieldLabel>Delivery address</FieldLabel>
                <Input className="mt-2" placeholder="Digital address / landmarks across Ghana" />
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
            <div className="font-display text-2xl text-brand-ink">Payment method</div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                className="rounded-[24px] border border-black/10 bg-brand-sky-soft/35 p-6 text-left transition hover:bg-brand-sky-soft"
              >
                <div className="flex items-center gap-2 font-black text-brand-ink">
                  <CreditCard className="h-5 w-5 text-brand-purple" />
                  Paystack (cards)
                </div>
                <div className="mt-2 text-sm font-semibold text-brand-ink/60">
                  Visa / Mastercard — webhook-ready placeholder.
                </div>
              </button>
              <button
                type="button"
                className="rounded-[24px] border border-black/10 bg-brand-sky-soft/35 p-6 text-left transition hover:bg-brand-sky-soft"
              >
                <div className="flex items-center gap-2 font-black text-brand-ink">
                  <Smartphone className="h-5 w-5 text-brand-coral" />
                  Mobile Money
                </div>
                <div className="mt-2 text-sm font-semibold text-brand-ink/60">
                  MTN • Vodafone • AirtelTigo — prompt UX baked in.
                </div>
              </button>
            </div>
            <div className="mt-6 rounded-[24px] bg-brand-ink p-5 text-white">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-white/60">
                Developer note
              </div>
              <div className="mt-2 text-sm font-semibold text-white/75">
                Drop your Paystack public key + callback routes into environment variables. Cart lines already include customization summaries for reconciliation.
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="sticky top-24 rounded-[28px] border border-black/10 bg-white p-8 shadow-lg">
            <div className="font-display text-2xl text-brand-ink">Order summary</div>
            {items.length === 0 ? (
              <div className="mt-6 rounded-[24px] border border-dashed border-black/15 bg-brand-sky-soft/35 p-6 text-sm font-semibold text-brand-ink/60">
                Your cart is empty — add a customized piece first.
                <div className="mt-4">
                  <Link href="/shop" className="font-black text-brand-purple">
                    Browse shop →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                {items.map((it) => (
                  <div key={it.key} className="flex gap-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-brand-sky-soft">
                      <Image src={it.image} alt="" fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate font-bold text-brand-ink">{it.name}</div>
                      <div className="text-xs font-semibold text-brand-ink/55">
                        Qty {it.qty} • GH₵ {it.priceGHS}
                      </div>
                      {it.customizationSummary ? (
                        <div className="mt-1 truncate text-[11px] font-semibold text-brand-purple">
                          {it.customizationSummary}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 flex items-center justify-between border-t border-black/10 pt-6">
              <span className="font-black text-brand-ink/55">Total</span>
              <span className="font-display text-3xl text-brand-ink">GH₵ {total.toFixed(0)}</span>
            </div>

            <Button className="mt-6 w-full" disabled={items.length === 0} type="button">
              Pay now (demo)
            </Button>
            <div className="mt-4 text-xs font-semibold text-brand-ink/55">
              By placing an order you agree to delightful packaging, transparent timelines, and Coocoobay care standards.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
