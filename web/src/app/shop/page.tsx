import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopPageClient } from "@/components/shop/shop-page-client";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-7xl px-4 py-16 text-center font-semibold text-brand-ink/60 md:px-6">
          Loading the boutique…
        </div>
      }
    >
      <ShopPageClient />
    </Suspense>
  );
}
