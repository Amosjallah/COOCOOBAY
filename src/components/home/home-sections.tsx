"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  Gift,
  Palette,
  Sparkles,
  Star,
  Truck,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { FieldLabel, Input } from "@/components/ui/field";
import { IMG, products } from "@/lib/products";
import { SHOP_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/cn";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-yellow/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-brand-purple/25 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60"
          >
            <Sparkles className="h-4 w-4 text-brand-purple" />
            Premium Ghana kids brand
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="mt-6 font-display text-4xl leading-[1.05] text-brand-ink sm:text-5xl lg:text-6xl"
          >
            Customized Fashion &amp; Memories For Every Child
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-brand-ink/65"
          >
            Premium Personalized Kids Wear Delivered Across Ghana — plus joyful prints,
            heirloom photography, and event magic in one sparkling destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/customize">
              <Button size="lg" className="w-full sm:w-auto">
                Customize Now <Wand2 className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/shop">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Shop Collection <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-10 grid max-w-xl grid-cols-3 gap-3"
          >
            {[
              ["24h", "Accra rush"],
              ["100%", "Designed with heart"],
              ["Ghana", "Nationwide delivery"],
            ].map(([a, b]) => (
              <div key={b} className="rounded-3xl border border-black/10 bg-white/70 p-4">
                <div className="font-display text-2xl text-brand-ink">{a}</div>
                <div className="mt-1 text-xs font-bold text-brand-ink/55">{b}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08, type: "spring", damping: 18 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] border border-black/10 shadow-2xl shadow-brand-sky/25">
            <Image
              src={IMG.hero}
              alt="Happy kids wearing customized outfits"
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 100vw, (max-width:1536px) 52vw, 960px"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/25 via-transparent to-brand-yellow/25" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute left-5 top-5 rounded-3xl bg-white/90 p-4 shadow-lg backdrop-blur"
            >
              <div className="flex items-center gap-2 text-sm font-black text-brand-ink">
                <Palette className="h-4 w-4 text-brand-coral" />
                Live mockups
              </div>
              <div className="mt-1 text-xs font-semibold text-brand-ink/55">
                See names & cartoons before we print.
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute bottom-5 right-5 rounded-3xl bg-brand-ink p-4 text-white shadow-xl"
            >
              <div className="flex items-center gap-2 text-sm font-black">
                <Camera className="h-4 w-4 text-brand-yellow" />
                Shoot-ready styling
              </div>
              <div className="mt-1 text-xs font-semibold text-white/70">
                Wardrobe + set design bundles.
              </div>
            </motion.div>
          </div>

          <div className="pointer-events-none absolute -bottom-10 -left-10 hidden h-40 w-40 rounded-full bg-brand-coral/25 blur-2xl md:block" />
        </motion.div>
      </div>
    </section>
  );
}

function CollectionCard({
  title,
  subtitle,
  href,
  img,
  tone,
}: {
  title: string;
  subtitle: string;
  href: string;
  img: string;
  tone: "sky" | "coral" | "purple";
}) {
  const toneCls =
    tone === "sky"
      ? "from-brand-sky/35"
      : tone === "coral"
        ? "from-brand-coral/35"
        : "from-brand-purple/35";

  return (
    <motion.div {...fadeUp} className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white">
      <Link href={href} className="block">
        <div className="relative aspect-[16/11]">
          <Image src={img} alt={title} fill className="object-cover transition duration-500 group-hover:scale-[1.05]" sizes="(max-width:768px) 100vw, (max-width:1200px) 33vw, 720px" />
          <div className={cn("absolute inset-0 bg-gradient-to-t", toneCls, "via-transparent to-transparent")} />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="font-display text-2xl text-white drop-shadow">{title}</div>
            <div className="mt-1 text-sm font-semibold text-white/85 drop-shadow">{subtitle}</div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedCollections() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Featured"
        title="Kids collections with runway energy"
        subtitle="From newborn essentials to youth hoodies — each piece is a canvas for names, verses, and celebration art."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <CollectionCard
          title="Sunrise Streetwear"
          subtitle="Bold tees • Cartoon panels • Sibling sets"
          href="/shop?focus=trending"
          img={IMG.collectionSunrise}
          tone="sky"
        />
        <CollectionCard
          title="Royal Birthdays"
          subtitle="Crown motifs • Cake-smash safe ink"
          href="/shop?cat=Birthday%20Collections"
          img={IMG.collectionRoyal}
          tone="coral"
        />
        <CollectionCard
          title="School & Ministry"
          subtitle="Bulk packs • Crest embroidery"
          href="/shop?cat=School%20Event%20Collections"
          img={IMG.collectionSchool}
          tone="purple"
        />
      </div>
    </section>
  );
}

export function NewbornEssentials() {
  const items = products.filter((p) => p.isNewborn).slice(0, 3);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Newborn essentials"
            title="Soft enough for first hugs. Bold enough for first photos."
            subtitle="Bodysuits and onesies engineered for delicate skin — personalize announcements, scripture, and nicknames."
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/shop?cat=Baby%20Bodysuits">
              <Button size="lg">Shop bodysuits</Button>
            </Link>
            <Link href="/customize">
              <Button variant="secondary" size="lg">
                Start a custom design
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {items.map((p) => (
            <Link key={p.id} href={`/shop/${p.slug}`} className="group overflow-hidden rounded-[28px] border border-black/10 bg-white">
              <div className="relative aspect-square bg-brand-sky-soft">
                <Image src={p.images[0]} alt={p.name} fill className="object-cover transition duration-500 group-hover:scale-[1.05]" sizes="(max-width:768px) 45vw, 380px" />
              </div>
              <div className="p-4">
                <div className="font-bold text-brand-ink">{p.name}</div>
                <div className="mt-1 text-sm font-semibold text-brand-ink/55">{p.category}</div>
                <div className="mt-3 font-display text-xl text-brand-ink">GH₵ {p.priceGHS}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BirthdayOutfits() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-yellow/25 via-white to-brand-coral/20" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Birthday outfit designs"
          title="Themes that feel like confetti — without the mess"
          subtitle="Princess galaxies, superhero chalkboards, church dedications, and twin celebrations — we storyboard the vibe."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Pastel Party", "Super Kid", "Garden Fairy", "Royal Gala"].map((t, i) => (
            <motion.div key={t} {...fadeUp} transition={{ delay: i * 0.05 }} className="rounded-[28px] border border-black/10 bg-white p-6">
              <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-brand-ink/45">
                <Gift className="h-4 w-4 text-brand-coral" />
                Theme
              </div>
              <div className="mt-3 font-display text-2xl text-brand-ink">{t}</div>
              <p className="mt-2 text-sm font-semibold text-brand-ink/60">
                Includes curated palettes, typography pairs, and printable invite-match graphics.
              </p>
              <Link href="/events/book" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-brand-purple">
                Book birthday package <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrendingCartoons() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Trending cartoon collections"
        title="Friendly characters — premium print science"
        subtitle="Pick from our studio sticker library or upload your illustrator files. We optimize every pixel for fabric."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          { t: "STEM Squad", d: "Rockets, atoms, and curiosity quotes." },
          { t: "Forest Friends", d: "Soft palettes for classrooms & parks." },
          { t: "Sunday Joy", d: "Faith-forward motifs with kid-safe tones." },
        ].map((x) => (
          <motion.div key={x.t} {...fadeUp} className="rounded-[28px] border border-black/10 bg-white p-8">
            <div className="font-display text-3xl text-brand-ink">{x.t}</div>
            <p className="mt-3 text-brand-ink/65">{x.d}</p>
            <Link href="/customize" className="mt-6 inline-flex rounded-full bg-brand-sky-soft px-5 py-3 text-sm font-black text-brand-ink">
              Open studio
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function CustomStudioTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="overflow-hidden rounded-[36px] border border-black/10 bg-gradient-to-br from-brand-sky-soft via-white to-brand-purple/15">
        <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Custom design studio"
              title="Your signature Coocoobay wizard — upload, preview, adore."
              subtitle="Multi-step customization: apparel type, palette, quotes, kids’ names, cartoons, and live mockups."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/customize">
                <Button size="lg">
                  Launch studio <Wand2 className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/virtual-try-on">
                <Button variant="secondary" size="lg">
                  Virtual try-on concept
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-xl">
            <Image src={IMG.studioTeaser} alt="Customization preview concept" fill className="object-cover" sizes="(max-width:768px) 100vw, 900px" />
            <div className="absolute left-4 top-4 rounded-3xl bg-white/90 px-4 py-3 text-sm font-black backdrop-blur">
              Live apparel mockup generator
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PhotographyTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] border border-black/10 shadow-2xl">
          <Image src={IMG.photographyFamily} alt="Family photography" fill className="object-cover" sizes="(max-width:1024px) 100vw, 1100px" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
            <div className="text-white">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-white/70">Coocoobay lenses</div>
              <div className="font-display text-3xl">Photography &amp; shoot styling</div>
            </div>
            <Link href="/photography" className="rounded-full bg-white px-5 py-3 text-sm font-black text-brand-ink">
              View services
            </Link>
          </div>
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="Photography & photoshoots"
            title="Portraits that feel like your family playlist — on shuffle."
            subtitle="Kids, family, and event photography with wardrobe pairing from our fashion floor."
          />
          <ul className="mt-6 space-y-3 text-brand-ink/70">
            {[
              "Studio sessions with playful lighting rigs",
              "On-location Accra storytelling sets",
              "Cake-smash safe floors & backdrops",
            ].map((x) => (
              <li key={x} className="flex gap-3">
                <Star className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                <span className="font-semibold">{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link href="/photography">
              <Button size="lg">
                Book a session <Camera className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Customer testimonials"
        title="Parents, pastors, and planners trust the sparkle"
      />
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {[
          {
            q: "Our twins’ dedication outfits matched the décor perfectly — down to the hymn typography.",
            a: "Ama • Cantonments",
          },
          {
            q: "Bulk school hoodies in five house colors, flawless sizing calculator, and Paystack-ready checkout UI.",
            a: "Mr. Kofi • School PTA",
          },
          {
            q: "The customization studio let my daughter see her cartoon BEFORE printing. Huge parent win.",
            a: "Delali • North Legon",
          },
        ].map((t) => (
          <motion.figure key={t.a} {...fadeUp} className="rounded-[28px] border border-black/10 bg-white p-8">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
              ))}
            </div>
            <blockquote className="mt-4 text-lg font-semibold leading-relaxed text-brand-ink/75">
              “{t.q}”
            </blockquote>
            <figcaption className="mt-4 text-sm font-black text-brand-ink/45">{t.a}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

export function HappyKidsGallery() {
  const imgs = [
    IMG.galleryHappy1,
    IMG.galleryHappy2,
    IMG.galleryHappy3,
    IMG.galleryHappy4,
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Happy kids gallery"
        title="A carousel of sunshine moments"
      />
      <div className="mt-10 columns-2 gap-4 md:columns-3">
        {imgs.map((src, i) => (
          <motion.div key={src + i} {...fadeUp} className="mb-4 break-inside-avoid overflow-hidden rounded-[24px] border border-black/10">
            <div className="relative aspect-[3/4]">
              <Image src={src} alt="Happy kids gallery" fill className="object-cover" sizes="(max-width:768px) 48vw, 640px" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function EventPackages() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Event packages"
        title="Choirs, sports days, baby dedications — shipped like clockwork"
        subtitle="Tiered packages with onsite measuring days for schools and ministries across Greater Accra."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {[
          { n: "Spark", p: "GH₵ 2,500+", d: "Up to 25 units • Single ink • 2 design revisions" },
          { n: "Glow", p: "GH₵ 6,500+", d: "Up to 80 units • Multi-placement • Dedicated producer" },
          { n: "Aurora", p: "GH₵ 12,000+", d: "200+ units • Embroidery options • Onsite fitting day" },
        ].map((pk) => (
          <motion.div key={pk.n} {...fadeUp} className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">Package</div>
            <div className="mt-2 font-display text-3xl text-brand-ink">{pk.n}</div>
            <div className="mt-2 font-display text-2xl text-brand-purple">{pk.p}</div>
            <p className="mt-4 text-sm font-semibold text-brand-ink/65">{pk.d}</p>
            <Link href="/events/book" className="mt-6 inline-flex rounded-full bg-brand-ink px-5 py-3 text-sm font-black text-white">
              Build my quote
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function DeliveryBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-[28px] border border-black/10 bg-gradient-to-r from-brand-ink via-brand-purple to-brand-coral p-8 text-white shadow-xl"
      >
        <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em]">
              <Truck className="h-4 w-4" />
              Delivery promise
            </div>
            <div className="mt-4 font-display text-3xl md:text-4xl">
              Accra orders: dispatch-ready within 24 hours*
            </div>
            <p className="mt-3 max-w-2xl text-sm font-semibold text-white/75">
              Nationwide courier partners • SMS tracking • Gift messaging • *Peak seasons may adjust — we always communicate like grown-ups.
            </p>
          </div>
          <Link href="/track-order" className="rounded-full bg-white px-6 py-4 text-sm font-black text-brand-ink">
            Track an order
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export function InstagramGallery() {
  const imgs = products.slice(0, 8).map((p) => p.images[0]);
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Instagram-style gallery"
        title="#CoocoobayKids — tag us for repost love"
      />
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {imgs.map((src, i) => (
          <motion.div key={src + i} {...fadeUp} className="relative aspect-square overflow-hidden rounded-[24px] border border-black/10">
            <Image src={src} alt="Instagram style gallery" fill className="object-cover" sizes="(max-width:768px) 45vw, 420px" />
            <div className="absolute inset-0 opacity-0 transition hover:opacity-100">
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 text-xs font-black text-white">@coocoobaykids</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function AIRecommendations() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="overflow-hidden rounded-[36px] border border-black/10 bg-white">
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="p-10">
            <SectionHeading
              align="left"
              eyebrow="AI outfit assistant"
              title='“Design Your Child’s Outfit” — smart picks, magical rationale'
              subtitle="Frontend demo: choose an occasion and get curated bundles from our catalog (wire-ready for your AI backend)."
            />
            <OccasionPicker />
          </div>
          <div className="relative min-h-[360px] bg-brand-sky-soft">
            <Image src={IMG.aiStyling} alt="AI styling concept" fill className="object-cover" sizes="(max-width:1024px) 100vw, 1200px" />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/25 via-transparent to-brand-yellow/25" />
          </div>
        </div>
      </div>
    </section>
  );
}

function OccasionPicker() {
  return (
    <div className="mt-8 rounded-[28px] border border-black/10 bg-brand-sky-soft/40 p-6">
      <FieldLabel>Occasion</FieldLabel>
      <select
        className="mt-2 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
        defaultValue="birthday"
      >
        <option value="birthday">Birthday glow-up</option>
        <option value="church">Church dedication</option>
        <option value="school">Sports day / prefectship</option>
        <option value="photoshoot">Studio photoshoot day</option>
      </select>
      <div className="mt-5 grid gap-3">
        {products.filter((p) => p.isTrending).slice(0, 3).map((p) => (
          <Link key={p.id} href={`/shop/${p.slug}`} className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-4 py-3 transition hover:bg-brand-sky-soft">
            <span className="font-bold text-brand-ink">{p.name}</span>
            <span className="text-sm font-black text-brand-purple">GH₵ {p.priceGHS}</span>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold text-brand-ink/55">
        Tip: connect your recommendation API to `/api/recommendations` later — UI states are ready.
      </p>
    </div>
  );
}

export function NewsletterSignup() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="rounded-[36px] border border-black/10 bg-gradient-to-br from-brand-yellow/35 via-white to-brand-sky-soft p-10 md:p-14">
        <div className="mx-auto max-w-2xl text-center">
          <div className="font-display text-4xl text-brand-ink">Join the joy letter</div>
          <p className="mt-3 text-brand-ink/65">
            Mini style drops, printable party prompts, and shoot-date reminders — quarterly, not spammy.
          </p>
          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <Input placeholder="you@family.com" type="email" className="sm:flex-1" />
            <Button type="submit" className="sm:w-auto">
              Subscribe
            </Button>
          </form>
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-bold text-brand-ink/45">
            {SHOP_CATEGORIES.slice(0, 6).map((c) => (
              <span key={c} className="rounded-full bg-white/70 px-3 py-1">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
