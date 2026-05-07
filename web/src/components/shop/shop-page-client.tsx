"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SectionHeading } from "@/components/ui/section-heading";
import { FieldLabel, Input } from "@/components/ui/field";
import { ProductCard } from "@/components/shop/product-card";
import { QuickViewModal } from "@/components/shop/quick-view-modal";
import { products, type Product } from "@/lib/products";
import { SHOP_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { useWishlistStore } from "@/store/wishlist-store";

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export function ShopPageClient() {
  const sp = useSearchParams();
  const wishIds = useWishlistStore((s) => s.ids);

  const initialCat = sp.get("cat") ?? "";
  const focus = sp.get("focus") ?? "";
  const wishOnly = sp.get("view") === "wishlist";

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(initialCat);
  const [sort, setSort] = useState<SortKey>("featured");
  const [quick, setQuick] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = [...products];

    if (wishOnly) list = list.filter((p) => wishIds.includes(p.id));

    if (category) list = list.filter((p) => p.category === category);

    if (focus === "trending") list = list.filter((p) => p.isTrending);

    const q = query.trim().toLowerCase();
    if (q)
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q),
      );

    list.sort((a, b) => {
      if (sort === "price-asc") return a.priceGHS - b.priceGHS;
      if (sort === "price-desc") return b.priceGHS - a.priceGHS;
      if (sort === "name") return a.name.localeCompare(b.name);
      return (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0);
    });

    return list;
  }, [category, focus, query, sort, wishIds, wishOnly]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
      <SectionHeading
        eyebrow="Shop"
        title="Premium kids fashion — ready to personalize"
        subtitle="Filter by category, search prints, quick-view details, and fall in love one hoodie at a time."
      />

      <div className="mt-10 rounded-[28px] border border-black/10 bg-white p-5 shadow-sm">
        <div className="grid gap-4 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <FieldLabel>Search</FieldLabel>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try ‘hoodie’, ‘birthday’, ‘ministry’…"
              className="mt-2"
            />
          </div>
          <div className="lg:col-span-4">
            <FieldLabel>Category</FieldLabel>
            <select
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All categories</option>
              {SHOP_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="lg:col-span-3">
            <FieldLabel>Sort</FieldLabel>
            <select
              className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name">Name A–Z</option>
            </select>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-black transition",
              category === "" ? "bg-brand-ink text-white" : "bg-brand-sky-soft text-brand-ink",
            )}
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setCategory("Kids T-Shirts")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-black transition",
              category === "Kids T-Shirts"
                ? "bg-brand-ink text-white"
                : "bg-brand-sky-soft text-brand-ink",
            )}
          >
            Tees
          </button>
          <button
            type="button"
            onClick={() => setCategory("Hoodies")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-black transition",
              category === "Hoodies" ? "bg-brand-ink text-white" : "bg-brand-sky-soft text-brand-ink",
            )}
          >
            Hoodies
          </button>
          <button
            type="button"
            onClick={() => setCategory("Baby Bodysuits")}
            className={cn(
              "rounded-full px-4 py-2 text-xs font-black transition",
              category === "Baby Bodysuits"
                ? "bg-brand-ink text-white"
                : "bg-brand-sky-soft text-brand-ink",
            )}
          >
            Bodysuits
          </button>
        </div>
      </div>

      <div className="mt-8 text-sm font-semibold text-brand-ink/55">
        Showing <span className="font-black text-brand-ink">{filtered.length}</span> products
        {wishOnly ? <span className="ml-2">• Wishlist view</span> : null}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-10 rounded-[28px] border border-dashed border-black/15 bg-brand-sky-soft/35 p-10 text-center">
          <div className="font-display text-2xl text-brand-ink">No matches yet</div>
          <p className="mt-2 text-brand-ink/60">
            Try another keyword — or heart a few pieces and flip to wishlist view.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} onQuickView={setQuick} />
          ))}
        </div>
      )}

      <QuickViewModal product={quick} onClose={() => setQuick(null)} />
    </div>
  );
}
