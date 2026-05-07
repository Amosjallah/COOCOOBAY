"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Camera, HeartHandshake, Images, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/field";
import { IMG } from "@/lib/products";

const portfolio = [
  { src: IMG.photoPortfolio1, t: "Kids editorial • pastel bounce light" },
  { src: IMG.photoPortfolio2, t: "Family heirlooms • warm cocoa tones" },
  { src: IMG.photoPortfolio3, t: "Portrait glam • soft-loop smiles" },
  { src: IMG.photoPortfolio4, t: "Newborn whisper • gentle tones" },
];

const packages = [
  {
    name: "Sprinkle Session",
    price: "GH₵ 850",
    bullets: ["45 mins studio", "15 edited frames", "Outfit styling consult"],
  },
  {
    name: "Golden Hour Family",
    price: "GH₵ 1,450",
    bullets: ["90 mins on-location", "35 edited frames", "Gallery wall layout PDF"],
  },
  {
    name: "Event Chronicle",
    price: "GH₵ 2,800+",
    bullets: ["School/church coverage", "Dual shooters optional", "48h teaser reel"],
  },
];

export function PhotographyPageClient() {
  const [i, setI] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHeading
        eyebrow="Photography & photoshoots"
        title="Kids, families, portraits — wardrobe synergy built-in"
        subtitle="Pair Coocoobay outfits with curated lighting recipes and playful posing prompts."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-xl">
          <div className="relative aspect-[16/11] bg-brand-sky-soft">
            <AnimatePresence mode="wait">
              <motion.div
                key={portfolio[i].src}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image src={portfolio[i].src} alt={portfolio[i].t} fill className="object-cover" sizes="900px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div className="text-white">
                    <div className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                      Portfolio slider
                    </div>
                    <div className="mt-2 font-display text-2xl">{portfolio[i].t}</div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-brand-ink"
                      onClick={() => setI((x) => (x - 1 + portfolio.length) % portfolio.length)}
                    >
                      Prev
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-white/90 px-4 py-2 text-xs font-black text-brand-ink"
                      onClick={() => setI((x) => (x + 1) % portfolio.length)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid gap-3 p-4 sm:grid-cols-4">
            {portfolio.map((p, idx) => (
              <button
                key={p.src}
                type="button"
                onClick={() => setI(idx)}
                className={`relative aspect-video overflow-hidden rounded-2xl border ${idx === i ? "border-brand-purple/50 ring-2 ring-brand-purple/25" : "border-black/10"}`}
              >
                <Image src={p.src} alt="" fill className="object-cover" sizes="200px" />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-black/10 bg-white p-8">
            <div className="flex items-center gap-3 font-display text-3xl text-brand-ink">
              <Camera className="h-7 w-7 text-brand-coral" />
              Services
            </div>
            <ul className="mt-5 space-y-3 text-brand-ink/70">
              {[
                "Kids photography with candy-colored gradients",
                "Family photography — wardrobe pulls from our boutique",
                "Portrait photography with editorial polish",
                "Studio sessions with modular backdrop cubes",
                "Event photography for schools & ministries",
              ].map((x) => (
                <li key={x} className="flex gap-3 font-semibold">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                  {x}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-gradient-to-br from-brand-sky-soft via-white to-brand-purple/10 p-8">
            <div className="flex items-center gap-3 font-black text-brand-ink">
              <HeartHandshake className="h-6 w-6 text-brand-purple" />
              Booking form (demo)
            </div>
            <p className="mt-2 text-sm font-semibold text-brand-ink/60">
              Wire this to your CRM — fields map cleanly to studio producers + stylists.
            </p>
            <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <FieldLabel>Parent name</FieldLabel>
                  <Input className="mt-2" placeholder="Your full name" />
                </div>
                <div>
                  <FieldLabel>WhatsApp number</FieldLabel>
                  <Input className="mt-2" placeholder="024…" />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <FieldLabel>Session type</FieldLabel>
                  <Select className="mt-2" defaultValue="kids">
                    <option value="kids">Kids photography</option>
                    <option value="family">Family photography</option>
                    <option value="portrait">Portrait photography</option>
                    <option value="studio">Studio session</option>
                    <option value="event">Event photography</option>
                  </Select>
                </div>
                <div>
                  <FieldLabel>Preferred date</FieldLabel>
                  <Input className="mt-2" type="date" />
                </div>
              </div>
              <div>
                <FieldLabel>Tell us the vibe</FieldLabel>
                <Textarea className="mt-2" placeholder="Theme, colors, siblings, surprise guests…" />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <CalendarDays className="h-4 w-4" />
                Request booking
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-3">
          <Images className="h-7 w-7 text-brand-purple" />
          <div className="font-display text-3xl text-brand-ink">Package pricing</div>
        </div>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
              <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
                Package
              </div>
              <div className="mt-2 font-display text-3xl text-brand-ink">{p.name}</div>
              <div className="mt-2 font-display text-2xl text-brand-purple">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm font-semibold text-brand-ink/65">
                {p.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant="secondary" type="button">
                Customize package
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
