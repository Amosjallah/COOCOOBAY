"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import type { Product } from "@/lib/products";
import { cn } from "@/lib/cn";
import { useWishlistStore } from "@/store/wishlist-store";

export function ProductCard({
  product,
  onQuickView,
  index = 0,
}: {
  product: Product;
  onQuickView?: (p: Product) => void;
  index?: number;
}) {
  const toggle = useWishlistStore((s) => s.toggle);
  const has = useWishlistStore((s) => s.ids.includes(product.id));

  return (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: Math.min(0.15, index * 0.03) }}
      className="group relative overflow-hidden rounded-[28px] border border-brand-cocoa/12 bg-brand-paper/95 shadow-[0_16px_44px_-28px_color-mix(in_oklab,var(--color-brand-cocoa)_45%,transparent)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-sky-soft">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.isTrending ? (
            <span className="rounded-full bg-brand-paper/95 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-ink shadow-sm ring-1 ring-brand-cocoa/10">
              Trending
            </span>
          ) : null}
          {product.compareAtGHS ? (
            <span className="rounded-full bg-brand-yellow px-3 py-1 text-[11px] font-black uppercase tracking-wide text-brand-ink">
              Save
            </span>
          ) : null}
        </div>

        <div className="absolute right-3 top-3 flex gap-2">
          <button
            type="button"
            onClick={() => toggle(product.id)}
            className={cn(
              "grid h-11 w-11 place-items-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper/95 backdrop-blur transition hover:bg-brand-cream",
              has && "text-brand-coral",
            )}
            aria-label="Wishlist"
          >
            <Heart className={cn("h-5 w-5", has && "fill-current")} />
          </button>
          {onQuickView ? (
            <button
              type="button"
              onClick={() => onQuickView(product)}
              className="grid h-11 w-11 place-items-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper/95 backdrop-blur transition hover:bg-brand-cream"
              aria-label="Quick view"
            >
              <Eye className="h-5 w-5" />
            </button>
          ) : null}
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-black text-white drop-shadow">
              {product.category}
            </div>
            <div className="truncate font-display text-lg text-white drop-shadow">
              {product.name}
            </div>
          </div>
          <div className="shrink-0 rounded-2xl bg-brand-paper/95 px-3 py-2 text-sm font-black text-brand-ink shadow-lg ring-1 ring-brand-cocoa/10">
            GH₵ {product.priceGHS}
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {product.colors.slice(0, 3).map((c) => (
            <span
              key={c}
              className="rounded-full bg-brand-sky-soft px-3 py-1 text-xs font-bold text-brand-ink/70"
            >
              {c}
            </span>
          ))}
        </div>
        <Link
          href={`/shop/${product.slug}`}
          className="mt-4 flex items-center justify-center rounded-full bg-brand-cocoa py-3 text-sm font-black text-brand-paper shadow-md shadow-brand-cocoa/25 transition hover:bg-brand-ink"
        >
          View details
        </Link>
      </div>
    </motion.article>
  );
}
