"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Minus, Plus, Ruler, Share2, ShieldCheck, Sparkles } from "lucide-react";
import type { Product } from "@/lib/products";
import { getRelated } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { FieldLabel } from "@/components/ui/field";
import { ProductCard } from "@/components/shop/product-card";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { cn } from "@/lib/cn";

export function ProductDetailClient({ product }: { product: Product }) {
  const [idx, setIdx] = useState(0);
  const [color, setColor] = useState(product.colors[0] ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<"details" | "size" | "reviews">("details");

  const add = useCartStore((s) => s.add);
  const toggleWish = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.ids.includes(product.id));

  const related = useMemo(() => getRelated(product), [product]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-[32px] border border-black/10 bg-brand-sky-soft shadow-xl">
            <Image
              src={product.images[idx] ?? product.images[0]}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <button
              type="button"
              onClick={() => toggleWish(product.id)}
              className={cn(
                "absolute right-4 top-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-white/90 backdrop-blur transition hover:bg-white",
                wished && "text-brand-coral",
              )}
              aria-label="Wishlist"
            >
              <Heart className={cn("h-5 w-5", wished && "fill-current")} />
            </button>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {product.images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIdx(i)}
                className={cn(
                  "relative aspect-square overflow-hidden rounded-2xl border transition",
                  idx === i ? "border-brand-purple/50 ring-2 ring-brand-purple/25" : "border-black/10",
                )}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="120px" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
            {product.category}
          </div>
          <h1 className="mt-3 font-display text-4xl text-brand-ink lg:text-5xl">{product.name}</h1>

          <div className="mt-5 flex flex-wrap items-end gap-3">
            <div className="font-display text-5xl text-brand-ink">GH₵ {product.priceGHS}</div>
            {product.compareAtGHS ? (
              <div className="pb-2 text-xl font-bold text-brand-ink/35 line-through">
                GH₵ {product.compareAtGHS}
              </div>
            ) : null}
          </div>

          <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">{product.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-brand-sky-soft px-3 py-1 text-xs font-black text-brand-ink/70"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-5 rounded-[28px] border border-black/10 bg-white p-6">
            <div>
              <FieldLabel>Color</FieldLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-black transition",
                      color === c
                        ? "border-brand-purple/50 bg-brand-purple/15"
                        : "border-black/10 bg-white hover:bg-brand-sky-soft",
                    )}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <FieldLabel>Size</FieldLabel>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-black transition",
                      size === s
                        ? "border-brand-purple/50 bg-brand-purple/15"
                        : "border-black/10 bg-white hover:bg-brand-sky-soft",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div>
                <FieldLabel>Quantity</FieldLabel>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand-sky-soft/35 p-1">
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white"
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center font-black">{qty}</span>
                  <button
                    type="button"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white"
                    onClick={() => setQty(qty + 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="text-right text-sm font-semibold text-brand-ink/55">
                Includes customization consult
                <div className="mt-1 font-black text-brand-ink">Tap “Add to cart” to lock selections</div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                className="flex-1"
                onClick={() =>
                  add({
                    productId: product.id,
                    name: product.name,
                    priceGHS: product.priceGHS,
                    qty,
                    image: product.images[0],
                    color,
                    size,
                    customizationSummary: `${color} • ${size}`,
                  })
                }
              >
                Add to cart
              </Button>
              <Link href="/customize" className="flex-1">
                <Button variant="secondary" className="w-full">
                  <Sparkles className="h-4 w-4" />
                  Deep customize
                </Button>
              </Link>
              <Button
                variant="secondary"
                type="button"
                className="sm:w-auto"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 text-xs font-bold text-brand-ink/55">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-brand-purple" />
                Paystack-ready checkout UI
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-3 py-2">
                <Ruler className="h-4 w-4 text-brand-coral" />
                Ethically sourced blanks
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-[28px] border border-black/10 bg-white">
            <div className="flex flex-wrap gap-2 border-b border-black/10 p-3">
              {(
                [
                  ["details", "Details"],
                  ["size", "Size guide"],
                  ["reviews", "Reviews"],
                ] as const
              ).map(([k, label]) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => setTab(k)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-black transition",
                    tab === k ? "bg-brand-ink text-white" : "bg-brand-sky-soft text-brand-ink",
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="p-6">
              {tab === "details" ? (
                <div className="space-y-3 text-brand-ink/70">
                  <p>
                    Every Coocoobay piece ships with optional personalization proofs via WhatsApp.
                    Need Pantone-accurate ministry colors? Our producers obsess over faithful hues.
                  </p>
                  <ul className="list-disc space-y-2 pl-5 font-semibold">
                    <li>Premium fabric blanks sourced for Ghana&apos;s climate</li>
                    <li>Kid-safe inks with wash-tested longevity</li>
                    <li>Rush lanes for Accra caregivers who forgot until Tuesday 😅</li>
                  </ul>
                </div>
              ) : null}

              {tab === "size" ? (
                <div className="grid gap-6 lg:grid-cols-2">
                  <SizeCalculator />
                  <div className="rounded-[24px] bg-brand-sky-soft/40 p-6">
                    <div className="font-black text-brand-ink">Measurement cheat sheet</div>
                    <p className="mt-2 text-sm font-semibold text-brand-ink/65">
                      Lay their favourite fitting tee flat — shoulder to hem + chest across. Send us a photo,
                      we&apos;ll sanity-check before printing.
                    </p>
                  </div>
                </div>
              ) : null}

              {tab === "reviews" ? (
                <div className="space-y-4">
                  {[
                    {
                      n: "Yasmine",
                      s: 5,
                      t: "Print clarity is insane — even on yellow!",
                    },
                    {
                      n: "Pastor Joel",
                      s: 5,
                      t: "300 ministry tees, organized by size roster. Legendary patience.",
                    },
                  ].map((r) => (
                    <div key={r.n} className="rounded-[24px] border border-black/10 bg-white p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="font-black text-brand-ink">{r.n}</div>
                        <div className="text-sm font-black text-brand-yellow">{r.s}.0 ★</div>
                      </div>
                      <p className="mt-2 text-sm font-semibold text-brand-ink/65">{r.t}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <LivePreviewStrip product={product} color={color} />
        </div>
      </div>

      <div className="mt-16">
        <div className="font-display text-3xl text-brand-ink">You may also love</div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SizeCalculator() {
  const [age, setAge] = useState("5");
  const [height, setHeight] = useState("115");

  const suggestion = useMemo(() => {
    const a = Number(age);
    const h = Number(height);
    if (!Number.isFinite(a) || !Number.isFinite(h)) return "6Y";
    if (h < 75 || a < 1) return "12-18M";
    if (h < 90) return "2Y";
    if (h < 100) return "4Y";
    if (h < 115) return "6Y";
    if (h < 130) return "8Y";
    if (h < 145) return "10Y";
    return "12Y";
  }, [age, height]);

  return (
    <div className="rounded-[24px] border border-black/10 bg-gradient-to-br from-white via-brand-sky-soft to-brand-purple/10 p-6">
      <div className="flex items-center gap-2 font-black text-brand-ink">
        <Ruler className="h-5 w-5 text-brand-coral" />
        Interactive kids size calculator
      </div>
      <p className="mt-2 text-sm font-semibold text-brand-ink/60">
        Enter age + height (cm). This is guidance — our team confirms before bulk orders.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel>Age (years)</FieldLabel>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
            inputMode="decimal"
          />
        </div>
        <div>
          <FieldLabel>Height (cm)</FieldLabel>
          <input
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
            inputMode="decimal"
          />
        </div>
      </div>
      <motion.div
        key={suggestion}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-2xl bg-brand-ink px-5 py-4 text-white"
      >
        <div className="text-xs font-black uppercase tracking-[0.22em] text-white/60">
          Suggested size
        </div>
        <div className="mt-2 font-display text-3xl">{suggestion}</div>
      </motion.div>
    </div>
  );
}

function LivePreviewStrip({ product, color }: { product: Product; color: string }) {
  return (
    <div className="mt-8 rounded-[28px] border border-black/10 bg-white p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
            Live design preview (concept)
          </div>
          <div className="mt-2 font-display text-2xl text-brand-ink">
            {product.name} • {color}
          </div>
        </div>
        <Link href="/customize" className="text-sm font-black text-brand-purple">
          Open full studio →
        </Link>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-brand-sky-soft">
          <Image src={product.images[0]} alt="Preview base" fill className="object-cover opacity-90" sizes="500px" />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-yellow/25 via-transparent to-brand-purple/25" />
          <div className="absolute left-4 top-4 rounded-2xl bg-white/85 px-4 py-2 text-sm font-black backdrop-blur">
            Name + graphic overlay (studio)
          </div>
        </div>
        <div className="rounded-[24px] bg-brand-sky-soft/35 p-6">
          <div className="text-sm font-semibold text-brand-ink/65">
            This preview mirrors your selected colorway. Final proofs are sent via WhatsApp with pixel-perfect placement guides.
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Front print", "Back nickname", "Sleeve icon"].map((x) => (
              <span key={x} className="rounded-full bg-white px-3 py-1 text-xs font-black text-brand-ink/60">
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
