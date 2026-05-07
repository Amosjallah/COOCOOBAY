import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IMG } from "@/lib/products";

export const metadata: Metadata = {
  title: "Virtual Try-On (Concept)",
};

export default function VirtualTryOnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-purple/15 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-ink/60">
        <ScanFace className="h-4 w-4 text-brand-purple" />
        Concept experience
      </div>
      <h1 className="mt-5 font-display text-4xl text-brand-ink">Virtual try-on runway</h1>
      <p className="mt-3 max-w-3xl text-brand-ink/65">
        This screen demonstrates how AR try-on could pair with your customization studio — integrate TensorFlow / Mediapipe / vendor SDK later.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] border border-black/10 shadow-2xl">
          <Image src={IMG.virtualTryOn} alt="Virtual try-on placeholder" fill className="object-cover" sizes="800px" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[24px] bg-white/90 p-5 backdrop-blur">
            <div className="font-black text-brand-ink">Camera feed placeholder</div>
            <div className="mt-2 text-sm font-semibold text-brand-ink/60">
              Drop WebRTC preview + garment mesh anchors here.
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-[28px] border border-black/10 bg-white p-8">
            <div className="font-display text-2xl text-brand-ink">How it could feel</div>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-brand-ink/65">
              <li>• Capture child height + posture for better drape simulation</li>
              <li>• Swap prints live from the cartoon library</li>
              <li>• Export shareable clip for godparents abroad</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/customize">
                <Button>Open customization studio</Button>
              </Link>
              <Link href="/shop">
                <Button variant="secondary">Shop physical fits</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
