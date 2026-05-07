import type { ShopCategory } from "./constants";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ShopCategory;
  priceGHS: number;
  compareAtGHS?: number;
  images: string[];
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
  isTrending?: boolean;
  isNewborn?: boolean;
};

/** Verified Unsplash photo-* ids (CDN removes older assets — keep list curated). */
function unsplashPhoto(id: string, w = 2400) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=90&ixlib=rb-4.0.0`;
}

/** Premium tier assets (allowlisted in next.config → plus.unsplash.com). */
function premiumPhoto(id: string, w = 2400) {
  return `https://plus.unsplash.com/premium_photo-${id}?auto=format&fit=crop&w=${w}&q=90&ixlib=rb-4.0.0`;
}

/**
 * 49 unique images centered on children's wear & retail: kids in tees/hoodies/dresses/party fits,
 * baby onesies & gifting flat lays, hangers/racks/mannequins (shop storytelling), and sibling sets.
 * Indices 0–31 → product gallery pairs; 32–48 → homepage / photography / about / try-on.
 */
const PHOTO_IDS = [
  "1578897367107-2828e351c8a8",
  "1590480598135-3be152c87913",
  "1519238263530-99bdd11df2ea",
  "1518831959646-742c3a14ebf7",
  "1611428813653-aa606c998586",
  "1621452773781-0f992fd1f5cb",
  "1519457431-44ccd64a579b",
  "1566454544259-f4b94c3d758c",
  "1622218286192-95f6a20083c7",
  "1622290291468-a28f7a7dc6a8",
  "1622290291720-ac961c43ee30",
  "1622290319146-7b63df48a635",
  "1622290291165-d341f1938b8a",
  "1560859259-fcf2b952aed8",
  "1684244160171-97f5dac39204",
  "1741992556912-3b2d62461e75",
  "1502451885777-16c98b07834a",
  "1560506840-ec148e82a604",
  "1542355581-caf7454785ca",
  "1569974641446-22542de88536",
  "1634188157846-c6e3bdf99420",
  "1604482858862-1db908a653e4",
  "1725147874938-7904e3362841",
  "1604303768345-038b79a8c47a",
  "1522771930-78848d9293e8",
  "1635874714425-c342060a4c58",
  "1642379831634-1eb6a4e2788d",
  "1632337948797-ba161d29532b",
  "1586038693164-cb7ee3fb8e2c",
  "1732041101188-eff6bfc65692",
  "1631084412577-9f4d5829be98",
  "1528072418361-06c8a41310d7",
  "1601054704854-1a2e79dda4d3",
  "1759143103540-78298031a86a",
  "1719421992052-e7d4394fa7fd",
  "1775836214324-843581b270ee",
  "1772814843701-40411a4ffa7d",
  "1608093602094-e9c880dd9622",
  "1758782213532-bbb5fd89885e",
  "1685770101390-58e99f56202e",
  "1760287363879-6012adab292c",
  "1775124849272-e8e48752061a",
  "1773901170639-5cc769ce1cfd",
  "1613248948503-74857459cd73",
  "1633382931031-4475750b6837",
  "1770155468032-fe35d04b21f8",
  "1764883318039-22273d13c9df",
  "1707289439849-ff50d272e322",
  "1763013258923-f8c06366abb5",
] as const;

function sitePhoto(index: number) {
  return unsplashPhoto(PHOTO_IDS[index]!);
}

/** Marketing / layout imagery — each URL distinct from products and from each other. */
export const IMG = {
  hero: sitePhoto(32),
  collectionSunrise: sitePhoto(33),
  collectionRoyal: sitePhoto(34),
  collectionSchool: sitePhoto(35),
  studioTeaser: sitePhoto(36),
  photographyFamily: sitePhoto(37),
  galleryHappy1: sitePhoto(38),
  galleryHappy2: sitePhoto(39),
  galleryHappy3: sitePhoto(40),
  galleryHappy4: sitePhoto(41),
  aiStyling: sitePhoto(42),
  photoPortfolio1: sitePhoto(43),
  photoPortfolio2: sitePhoto(44),
  photoPortfolio3: sitePhoto(45),
  photoPortfolio4: sitePhoto(46),
  aboutStory: sitePhoto(47),
  virtualTryOn: sitePhoto(48),
} as const;

/** Studio wizard: child portrait + kidswear print textiles (premium — distinct from catalog URLs). */
export const WIZARD_IMG = {
  inspiration: premiumPhoto("1770559376144-d17f236daa7c"),
  fabricPreview: premiumPhoto("1725295197895-06cd2aa89fee"),
  cartPlaceholder: premiumPhoto("1725295198292-7961de344604"),
} as const;

export const products: Product[] = [
  {
    id: "p1",
    slug: "cloud-nine-baby-bodysuit",
    name: "Cloud Nine Baby Bodysuit",
    category: "Baby Bodysuits",
    priceGHS: 120,
    compareAtGHS: 145,
    images: [sitePhoto(0), sitePhoto(1)],
    colors: ["Sky Blue", "Soft White", "Coral"],
    sizes: ["0-3M", "3-6M", "6-12M"],
    description:
      "Buttery-soft cotton bodysuit made for sensitive newborn skin. Perfect canvas for names, quotes, and tiny heroes.",
    highlights: ["Snap closure", "OEKO-TEX friendly inks", "24h Accra rush available"],
    isNewborn: true,
    isTrending: true,
  },
  {
    id: "p2",
    slug: "little-legends-tee",
    name: "Little Legends Tee",
    category: "Kids T-Shirts",
    priceGHS: 95,
    images: [sitePhoto(2), sitePhoto(3)],
    colors: ["White", "Sun Yellow", "Lavender"],
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    description:
      "Premium jersey tee with a luxe hand-feel. Ideal for cartoon prints, birthday shout-outs, and church event branding.",
    highlights: ["Reinforced collar", "Vivid print zone", "Sibling matching sets"],
    isTrending: true,
  },
  {
    id: "p3",
    slug: "sunbeam-hoodie",
    name: "Sunbeam Hoodie",
    category: "Hoodies",
    priceGHS: 185,
    compareAtGHS: 210,
    images: [sitePhoto(4), sitePhoto(5)],
    colors: ["Butter Yellow", "Sky Blue", "Graphite"],
    sizes: ["3Y", "5Y", "7Y", "9Y", "12Y"],
    description:
      "Cozy fleece-lined hoodie for breezy Harmattan mornings and airport-drop swagger.",
    highlights: ["Kangaroo pocket", "Kid-safe cords", "Embroidery-ready"],
  },
  {
    id: "p4",
    slug: "dreamland-onesie",
    name: "Dreamland Onesie",
    category: "Onesies",
    priceGHS: 110,
    images: [sitePhoto(6), sitePhoto(7)],
    colors: ["Milk", "Mint", "Blush"],
    sizes: ["0-6M", "6-12M", "12-18M"],
    description:
      "One-piece wonder with envelope shoulders — dress-up cute, change-time fast.",
    highlights: ["Double zipper option", "Snap-free variant", "Gift-ready box"],
    isNewborn: true,
  },
  {
    id: "p5",
    slug: "street-star-kids-jeans",
    name: "Street Star Kids Jeans",
    category: "Jeans",
    priceGHS: 165,
    images: [sitePhoto(8), sitePhoto(9)],
    colors: ["Classic Blue", "Soft Black"],
    sizes: ["4Y", "6Y", "8Y", "10Y", "14Y"],
    description:
      "Stretch denim engineered for cartwheels and cake smashes. Add patches, initials, or event crests.",
    highlights: ["Flex waistband", "Reinforced knees", "Tailorable hems"],
  },
  {
    id: "p6",
    slug: "birthday-prince-set",
    name: "Birthday Prince Set",
    category: "Birthday Collections",
    priceGHS: 260,
    compareAtGHS: 295,
    images: [sitePhoto(10), sitePhoto(11)],
    colors: ["Royal Purple", "Gold Trim"],
    sizes: ["2Y", "4Y", "6Y", "8Y"],
    description:
      "Statement birthday kit with foil-ready graphics and crown motifs — studio shoot ready.",
    highlights: ["Matching socks add-on", "Keepsake hanger", "Same-week turnaround"],
    isTrending: true,
  },
  {
    id: "p7",
    slug: "pixie-party-dress-tee",
    name: "Pixie Party Dress Tee",
    category: "Birthday Collections",
    priceGHS: 140,
    images: [sitePhoto(12), sitePhoto(13)],
    colors: ["Coral Pink", "Lilac"],
    sizes: ["3Y", "5Y", "7Y", "9Y"],
    description:
      "Twirl-friendly silhouette with breathable lining — customize with age, theme, and sparkle-safe prints.",
    highlights: ["Glitter-free shimmer ink", "Hair bow bundle", "Extra tulle layer"],
  },
  {
    id: "p8",
    slug: "north-pole-crew-hoodie",
    name: "North Pole Crew Hoodie",
    category: "Christmas Collections",
    priceGHS: 195,
    images: [sitePhoto(14), sitePhoto(15)],
    colors: ["Snow White", "Berry Red", "Pine Green"],
    sizes: ["2Y", "4Y", "6Y", "8Y", "12Y"],
    description:
      "Festive hoodie collection for school concerts, family cards, and matching cousin squads.",
    highlights: ["Metallic-safe prints", "Patch personalization", "Bulk school pricing"],
  },
  {
    id: "p9",
    slug: "carols-kids-tee",
    name: "Carols Kids Tee",
    category: "Christmas Collections",
    priceGHS: 88,
    images: [sitePhoto(16), sitePhoto(17)],
    colors: ["White", "Evergreen"],
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y"],
    description:
      "Lightweight tee for nativity plays and classroom parties — crisp typography for verses and lyrics.",
    highlights: ["Bulk choir packs", "Rush print lane", "Ministry discounts"],
  },
  {
    id: "p10",
    slug: "grace-kids-ministry-tee",
    name: "Grace Kids Ministry Tee",
    category: "Church Event Collections",
    priceGHS: 75,
    images: [sitePhoto(18), sitePhoto(19)],
    colors: ["White", "Heather Grey", "Navy"],
    sizes: ["XS–XXL kids"],
    description:
      "Ministry-ready tees with reverent palettes and durable washes for Sunday after Sunday.",
    highlights: ["Scripture layouts", "Department color coding", "Leader bulk portal"],
  },
  {
    id: "p11",
    slug: "rise-youth-camp-hoodie",
    name: "Rise Youth Camp Hoodie",
    category: "Church Event Collections",
    priceGHS: 210,
    images: [sitePhoto(20), sitePhoto(21)],
    colors: ["Purple Accent", "Black", "Sand"],
    sizes: ["6Y", "8Y", "10Y", "12Y", "14Y"],
    description:
      "Event-grade hoodies with bold placement prints for camps, VBS, and youth rallies.",
    highlights: ["Name roster printing", "Volunteer matching adult sizes", "Onsite pickup"],
  },
  {
    id: "p12",
    slug: "class-captain-polo",
    name: "Class Captain Polo",
    category: "School Event Collections",
    priceGHS: 115,
    images: [sitePhoto(22), sitePhoto(23)],
    colors: ["School White", "Sky Blue", "Bottle Green"],
    sizes: ["4Y", "6Y", "8Y", "10Y", "12Y"],
    description:
      "Crisp polos for prefect investitures, sports days, and prefectorial boards.",
    highlights: ["Embroidery crests", "House color splits", "Purchase orders accepted"],
  },
  {
    id: "p13",
    slug: "stem-fair-lab-coat-tee",
    name: "STEM Fair Lab Coat Tee",
    category: "School Event Collections",
    priceGHS: 105,
    images: [sitePhoto(24), sitePhoto(25)],
    colors: ["White", "Electric Blue"],
    sizes: ["6Y", "8Y", "10Y", "12Y"],
    description:
      "Playful lab-coat illusion tee — ideal for science fairs and robotics clubs.",
    highlights: ["UV-safe inks", "Teacher bundle pricing", "Custom back nicknames"],
  },
  {
    id: "p14",
    slug: "tiny-star-snap-bodysuit",
    name: "Tiny Star Snap Bodysuit",
    category: "Baby Bodysuits",
    priceGHS: 115,
    images: [sitePhoto(26), sitePhoto(27)],
    colors: ["White", "Buttercup"],
    sizes: ["NB", "0-3M", "3-6M"],
    description:
      "Announcement-ready bodysuit with premium snaps and cloud-soft cotton.",
    highlights: ["Gift note card", "Twin bundle discount"],
    isNewborn: true,
  },
  {
    id: "p15",
    slug: "cartoon-heroes-paint-splash-tee",
    name: "Cartoon Heroes Splash Tee",
    category: "Kids T-Shirts",
    priceGHS: 102,
    images: [sitePhoto(28), sitePhoto(29)],
    colors: ["White", "Black", "Sky Blue"],
    sizes: ["2Y", "4Y", "6Y", "8Y", "10Y", "12Y"],
    description:
      "Comic-panel layout tee — pair with our studio cartoon library or your supplied artwork.",
    highlights: ["CMYK-safe proofs", "Name banner add-on"],
    isTrending: true,
  },
  {
    id: "p16",
    slug: "harmattan-snug-onesie",
    name: "Harmattan Snug Onesie",
    category: "Onesies",
    priceGHS: 125,
    images: [sitePhoto(30), sitePhoto(31)],
    colors: ["Cream", "Dusty Rose"],
    sizes: ["3-6M", "6-12M", "12-18M"],
    description:
      "Slightly heavier interlock cotton for cooler weeks — still gentle on delicate skin.",
    highlights: ["Fold-over mitts option", "Footed variant on request"],
    isNewborn: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}
