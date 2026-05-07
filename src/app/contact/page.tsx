import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/section-heading";
import { SITE } from "@/lib/constants";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s plan something sparkly"
        subtitle="Visit us at George’s Plaza, chat on WhatsApp, or drop a note — we reply quickly during studio hours."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm">
            <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
              Business card
            </div>
            <div className="mt-3 font-display text-3xl text-brand-ink">{SITE.name}</div>
            <div className="mt-4 space-y-3 text-brand-ink/70">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-coral" />
                <div className="font-semibold">
                  {SITE.addressLine}
                  <div className="text-sm text-brand-ink/55">{SITE.area}</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-purple" />
                <a className="font-black text-brand-ink" href={`tel:+${SITE.phoneWa}`}>
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              <a href={`https://wa.me/${SITE.phoneWa}`} target="_blank" rel="noreferrer">
                <Button className="w-full">WhatsApp Coocoobay</Button>
              </a>
              <a href={SITE.website} target="_blank" rel="noreferrer">
                <Button variant="secondary" className="w-full">
                  {SITE.website.replace("https://", "")}
                </Button>
              </a>
              <a
                href={`https://www.facebook.com/search/top/?q=${encodeURIComponent(SITE.facebook)}`}
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="secondary" className="w-full">
                  Facebook • {SITE.facebook}
                </Button>
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-gradient-to-br from-brand-sky-soft via-white to-brand-yellow/25 p-7">
            <div className="font-black text-brand-ink">Studio hours (demo)</div>
            <p className="mt-2 text-sm font-semibold text-brand-ink/60">
              Mon–Sat • 9a–6p GMT • Holiday shoots by appointment only.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-black/10 shadow-lg">
            <iframe
              title="Coocoobay map — North Legon"
              src={mapSrc}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-8">
            <div className="font-display text-2xl text-brand-ink">Send a note</div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
