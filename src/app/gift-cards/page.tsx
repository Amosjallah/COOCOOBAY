import type { Metadata } from "next";
import { Gift } from "lucide-react";
import { GiftCardForm } from "@/components/forms/gift-card-form";

export const metadata: Metadata = {
  title: "Gift Cards",
};

export default function GiftCardsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60">
        <Gift className="h-4 w-4 text-brand-coral" />
        Gift card system
      </div>
      <h1 className="mt-5 font-display text-4xl text-brand-ink">Send wearable joy</h1>
      <p className="mt-3 text-brand-ink/65">
        Digital gift cards apply at checkout — perfect for aunties abroad who still want local magic.
      </p>

      <div className="mt-10 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <GiftCardForm />
      </div>
    </div>
  );
}
