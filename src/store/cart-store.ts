"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  key: string;
  productId: string;
  name: string;
  priceGHS: number;
  qty: number;
  image: string;
  color?: string;
  size?: string;
  customizationSummary?: string;
};

type CartState = {
  items: CartItem[];
  add: (item: Omit<CartItem, "key"> & { key?: string }) => void;
  remove: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  clear: () => void;
};

function makeKey(i: Omit<CartItem, "key"> & { key?: string }) {
  if (i.key) return i.key;
  return [
    i.productId,
    i.color ?? "",
    i.size ?? "",
    i.customizationSummary ?? "",
  ].join("|");
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (raw) => {
        const key = makeKey(raw);
        const items = get().items;
        const existing = items.find((x) => x.key === key);
        if (existing) {
          set({
            items: items.map((x) =>
              x.key === key ? { ...x, qty: x.qty + raw.qty } : x,
            ),
          });
          return;
        }
        set({
          items: [
            ...items,
            {
              key,
              productId: raw.productId,
              name: raw.name,
              priceGHS: raw.priceGHS,
              qty: raw.qty,
              image: raw.image,
              color: raw.color,
              size: raw.size,
              customizationSummary: raw.customizationSummary,
            },
          ],
        });
      },
      remove: (key) =>
        set({ items: get().items.filter((x) => x.key !== key) }),
      setQty: (key, qty) =>
        set({
          items: get().items
            .map((x) => (x.key === key ? { ...x, qty: Math.max(1, qty) } : x))
            .filter((x) => x.qty > 0),
        }),
      clear: () => set({ items: [] }),
    }),
    { name: "coocoobay-cart" },
  ),
);

export function cartTotal(items: CartItem[]) {
  return items.reduce((s, i) => s + i.priceGHS * i.qty, 0);
}
