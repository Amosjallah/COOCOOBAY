import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { StudioWizard } from "@/components/customize/studio-wizard";

export const metadata: Metadata = {
  title: "Customization Studio",
  description:
    "Upload art, add kids names and quotes, choose cartoons, preview live on apparel, and add to cart.",
};

export default function CustomizePage() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6">
        <SectionHeading
          eyebrow="Signature experience"
          title="Online customization studio"
          subtitle="A multi-step wizard with uploads, live mockups, save-for-later, and cart integration — designed for modern Ghanaian families."
        />
        <div className="mx-auto mt-6 flex max-w-3xl flex-wrap gap-3 text-sm font-semibold text-brand-ink/60">
          <span className="rounded-full bg-brand-sky-soft px-3 py-1 font-black text-brand-ink/70">
            Upload images
          </span>
          <span className="rounded-full bg-brand-sky-soft px-3 py-1 font-black text-brand-ink/70">
            Cartoon library
          </span>
          <span className="rounded-full bg-brand-sky-soft px-3 py-1 font-black text-brand-ink/70">
            Quotes & names
          </span>
          <Link href="/virtual-try-on" className="rounded-full bg-white px-3 py-1 font-black text-brand-purple ring-1 ring-black/10">
            Virtual try-on concept →
          </Link>
        </div>
      </div>
      <StudioWizard />
    </div>
  );
}
