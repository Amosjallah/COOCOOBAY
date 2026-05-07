import type { Metadata } from "next";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input } from "@/components/ui/field";

export const metadata: Metadata = {
  title: "Referral Rewards",
};

export default function ReferralsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow/35 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60">
        <Share2 className="h-4 w-4 text-brand-purple" />
        Referral rewards
      </div>
      <h1 className="mt-5 font-display text-4xl text-brand-ink">Share sparkle, earn perks</h1>
      <p className="mt-3 text-brand-ink/65">
        Refer schools, churches, or parent pods — both sides earn Coocoobay credits when orders complete.
      </p>

      <div className="mt-10 rounded-[28px] border border-black/10 bg-gradient-to-br from-brand-sky-soft via-white to-brand-yellow/25 p-8">
        <div className="font-black text-brand-ink">Your referral code (demo)</div>
        <div className="mt-3 rounded-2xl bg-white px-4 py-4 font-mono text-lg font-black text-brand-ink">
          CCBY-FAM-7XK2
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <FieldLabel>Friend&apos;s WhatsApp</FieldLabel>
            <Input className="mt-2" placeholder="024…" />
          </div>
          <div>
            <FieldLabel>Occasion</FieldLabel>
            <Input className="mt-2" placeholder="School sports day" />
          </div>
        </div>
        <Button className="mt-6 w-full md:w-auto" type="button">
          Send invite (demo)
        </Button>
      </div>
    </div>
  );
}
