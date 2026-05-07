import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Rainbow, Stars } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/products";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-[36px] border border-black/10 shadow-2xl">
          <div className="relative aspect-[4/5]">
            <Image src={IMG.aboutStory} alt="Coocoobay story" fill className="object-cover" sizes="800px" priority />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/25 via-transparent to-brand-yellow/25" />
          </div>
        </div>
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60">
            <Stars className="h-4 w-4 text-brand-yellow" />
            Our heart
          </div>
          <h1 className="mt-5 font-display text-4xl leading-tight text-brand-ink lg:text-5xl">
            Joy is a outfit that fits their personality — not just their size.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-ink/65">
            Coocoobay Limited began as a sketchbook full of doodles and grown-up dreams: what if Ghanaian kids had access to Disney-level magic with Carter&apos;s-level softness and Nike Kids-level confidence?
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-ink/65">
            Today, we customize apparel, choreograph shoot-ready wardrobes, and serve churches, schools, and families who believe childhood deserves ceremony — without sacrificing affordability.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Heart,
                t: "Family-centered experiences",
                d: "Parents co-create proofs with us — no mysterious surprises.",
              },
              {
                icon: Rainbow,
                t: "Creativity & personalization",
                d: "Every graphic decision is intentional — color psychology included.",
              },
              {
                icon: Stars,
                t: "Affordable premium",
                d: "Luxury tactility with transparent Ghana pricing.",
              },
            ].map((x) => (
              <div key={x.t} className="rounded-[24px] border border-black/10 bg-white p-5">
                <x.icon className="h-6 w-6 text-brand-coral" />
                <div className="mt-3 font-black text-brand-ink">{x.t}</div>
                <div className="mt-2 text-sm font-semibold text-brand-ink/60">{x.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/customize">
              <Button size="lg">Start customizing</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Talk to the team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
