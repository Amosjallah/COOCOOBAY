"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Camera, Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { products } from "@/lib/products";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/customize", label: "Customize" },
  { href: "/shop", label: "Shop" },
  { href: "/photography", label: "Photography" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar({
  onOpenCart,
}: {
  onOpenCart: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const items = useCartStore((s) => s.items);
  const wishIds = useWishlistStore((s) => s.ids);

  const cartCount = useMemo(
    () => items.reduce((n, i) => n + i.qty, 0),
    [items],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-brand-cocoa/10 bg-brand-paper/85 backdrop-blur-xl shadow-[0_8px_30px_-18px_color-mix(in_oklab,var(--color-brand-cocoa)_35%,transparent)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>

            <Link
              href="/"
              className="relative flex h-11 min-w-[140px] shrink-0 items-center sm:h-[52px] sm:min-w-[168px]"
              aria-label="Coocoobay Limited — Home"
            >
              <Image
                src="/coocoobay-logo.png"
                alt="Coocoobay Limited"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width:640px) 140px, 168px"
              />
            </Link>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-2 text-sm font-semibold text-brand-ink/70 transition hover:bg-brand-sky-soft/80 hover:text-brand-ink"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper transition hover:bg-brand-sky-soft/70"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-brand-ink" />
            </button>

            <Link
              href="/shop?view=wishlist"
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper transition hover:bg-brand-sky-soft/70"
              aria-label="Wishlist"
            >
              <Heart className="h-5 w-5 text-brand-ink" />
              {wishIds.length ? (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-coral px-1 text-[11px] font-bold text-white">
                  {wishIds.length}
                </span>
              ) : null}
            </Link>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper transition hover:bg-brand-sky-soft/70"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5 text-brand-ink" />
              {cartCount ? (
                <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-brand-purple px-1 text-[11px] font-bold text-white">
                  {cartCount}
                </span>
              ) : null}
            </button>

            <Link
              href="/photography"
              className="hidden items-center gap-2 rounded-full bg-brand-cocoa px-4 py-2 text-sm font-bold text-brand-paper shadow-lg shadow-brand-cocoa/25 transition hover:bg-brand-ink md:inline-flex"
            >
              <Camera className="h-4 w-4" />
              Book shoot
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/40"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 26, stiffness: 260 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-brand-paper p-5 shadow-2xl ring-1 ring-brand-cocoa/10"
            >
              <div className="flex items-center justify-between gap-3">
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="relative h-10 w-40 shrink-0"
                  aria-label="Coocoobay Limited — Home"
                >
                  <Image
                    src="/coocoobay-logo.png"
                    alt=""
                    fill
                    className="object-contain object-left"
                    sizes="160px"
                  />
                </Link>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-cream"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
                Menu
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {nav.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-semibold text-brand-ink hover:bg-brand-sky-soft"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/checkout"
                  onClick={() => setOpen(false)}
                  className="mt-3 rounded-2xl bg-gradient-to-r from-brand-coral via-brand-yellow to-brand-sky px-4 py-3 text-center text-base font-bold text-brand-ink"
                >
                  Checkout
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {searchOpen ? (
          <motion.div
            className="fixed inset-0 z-[70]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/45 backdrop-blur-sm"
              aria-label="Close search"
              onClick={() => setSearchOpen(false)}
            />
            <motion.div
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              className="relative mx-auto mt-24 w-[min(920px,calc(100%-2rem))] overflow-hidden rounded-3xl border border-brand-cocoa/12 bg-brand-paper shadow-2xl ring-1 ring-brand-cocoa/5"
            >
              <div className="flex items-center gap-3 border-b border-brand-cocoa/10 p-4">
                <Search className="h-5 w-5 text-brand-ink/50" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search bodysuits, hoodies, birthday kits…"
                  className="w-full bg-transparent text-base font-semibold text-brand-ink outline-none placeholder:text-brand-ink/35"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="rounded-2xl bg-brand-sky-soft px-3 py-2 text-sm font-bold text-brand-ink"
                >
                  Close
                </button>
              </div>
              <div className="max-h-[60vh] overflow-auto p-3">
                <div className="grid gap-2 sm:grid-cols-2">
                  {results.map((p) => (
                    <Link
                      key={p.id}
                      href={`/shop/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className={cn(
                        "flex gap-3 rounded-2xl border border-brand-cocoa/10 bg-brand-cream/40 p-3 transition hover:bg-brand-sky-soft/80",
                      )}
                    >
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-brand-sky-soft">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate font-bold text-brand-ink">
                          {p.name}
                        </div>
                        <div className="text-xs font-semibold text-brand-ink/50">
                          {p.category}
                        </div>
                        <div className="mt-1 text-sm font-bold text-brand-ink">
                          GH₵ {p.priceGHS.toFixed(0)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
