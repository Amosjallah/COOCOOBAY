"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

const quick = [
  { href: "/shop", label: "Shop all" },
  { href: "/customize", label: "Customization studio" },
  { href: "/photography", label: "Photography" },
  { href: "/gift-cards", label: "Gift cards" },
  { href: "/referrals", label: "Referrals" },
  { href: "/track-order", label: "Track order" },
  { href: "/events/book", label: "Event booking" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-brand-cocoa/12 bg-brand-paper/95 backdrop-blur-sm">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <div className="relative h-16 w-48 max-w-full">
            <Image
              src="/coocoobay-logo.png"
              alt="Coocoobay Limited"
              fill
              className="object-contain object-left"
              sizes="192px"
            />
          </div>
          <p className="mt-3 max-w-md text-base leading-relaxed text-brand-ink/65">
            Premium personalized kids fashion, joyful event merch, and heirloom
            photography — handcrafted for Ghanaian families who love extra sparkle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-4 py-2 text-sm font-bold text-brand-ink transition hover:bg-brand-sky"
              href={`https://wa.me/${SITE.phoneWa}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp orders
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-brand-cocoa/12 bg-brand-paper px-4 py-2 text-sm font-bold text-brand-ink transition hover:bg-brand-sky-soft/80"
              href={SITE.website}
              target="_blank"
              rel="noreferrer"
            >
              {SITE.website.replace("https://", "")}
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-brand-ink/45">
            Explore
          </div>
          <ul className="mt-4 space-y-2">
            {quick.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-base font-semibold text-brand-ink/70 hover:text-brand-ink"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-brand-ink/45">
            Visit
          </div>
          <ul className="mt-4 space-y-3 text-brand-ink/75">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
              <span>
                {SITE.addressLine}
                <span className="block text-sm text-brand-ink/55">{SITE.area}</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
              <a className="font-bold text-brand-ink" href={`tel:+${SITE.phoneWa}`}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-sky" />
              <span className="font-semibold">hello@coocoobay.com</span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <a
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper transition hover:bg-brand-sky-soft/70"
              href={`https://www.facebook.com/search/top/?q=${encodeURIComponent(SITE.facebook)}`}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-brand-cocoa/12 bg-brand-paper transition hover:bg-brand-sky-soft/70"
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <form
            className="mt-8 rounded-3xl border border-brand-cocoa/12 bg-gradient-to-br from-brand-sky-soft via-brand-paper to-brand-mint/20 p-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="text-sm font-black uppercase tracking-[0.22em] text-brand-ink/45">
              Newsletter
            </div>
            <p className="mt-2 text-sm font-semibold text-brand-ink/65">
              Drops, birthday bundles, and mini fashion drops — no spam, just joy.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                className="w-full rounded-2xl border border-brand-cocoa/12 bg-brand-paper px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
                placeholder="Parent email"
                type="email"
              />
              <button
                type="submit"
                className="rounded-2xl bg-brand-ink px-5 py-3 text-sm font-black text-white"
              >
                Join
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="border-t border-brand-cocoa/10 bg-brand-cream/90">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-brand-ink/55 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            © {new Date().getFullYear()} {SITE.name}. Crafted with love in Greater Accra.
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 font-semibold">
            <span>Delivery across Ghana</span>
            <span className="hidden md:inline">•</span>
            <span>Secure checkout (Paystack-ready UI)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
