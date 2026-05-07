import type { Metadata } from "next";
import { PartyPopper } from "lucide-react";
import { EventBookingForm } from "@/components/forms/event-booking-form";

export const metadata: Metadata = {
  title: "Book an Event",
};

export default function EventBookingPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 md:px-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-sky-soft px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60">
        <PartyPopper className="h-4 w-4 text-brand-coral" />
        Kids event booking
      </div>
      <h1 className="mt-5 font-display text-4xl text-brand-ink">Birthday packages & institutional events</h1>
      <p className="mt-3 text-brand-ink/65">
        Tell us about headcounts, themes, and delivery deadlines — producers reply with moodboards fast.
      </p>

      <div className="mt-10 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <EventBookingForm />
      </div>
    </div>
  );
}
