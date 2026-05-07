export const SITE = {
  name: "Coocoobay Limited",
  shortName: "Coocoobay",
  description:
    "Premium personalized kids fashion and memories — customized apparel delivered across Ghana.",
  phoneDisplay: "0244098418",
  /** WhatsApp click-to-chat (Ghana: drop leading 0, country 233) */
  phoneWa: "233244098418",
  addressLine: "Agbogba Road, George's Plaza, opposite Papa's Pizza",
  area: "North Legon, Greater Accra, Ghana",
  website: "https://www.coocoobay.com",
  facebook: "Coocoobay Official",
  mapsQuery: "George's Plaza Agbogba Road North Legon Ghana",
} as const;

export const SHOP_CATEGORIES = [
  "Baby Bodysuits",
  "Kids T-Shirts",
  "Hoodies",
  "Onesies",
  "Jeans",
  "Birthday Collections",
  "Christmas Collections",
  "Church Event Collections",
  "School Event Collections",
] as const;

export type ShopCategory = (typeof SHOP_CATEGORIES)[number];
