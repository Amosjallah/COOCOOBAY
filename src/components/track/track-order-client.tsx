"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PackageSearch } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input } from "@/components/ui/field";

export function TrackOrderClient() {
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <SectionHeading
        eyebrow="Order tracking"
        title="Follow the sparkle trail"
        subtitle="Enter your Coocoobay tracking token — SMS alerts mirror this timeline in production."
      />

      <div className="mt-10 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3 font-black text-brand-ink">
          <PackageSearch className="h-6 w-6 text-brand-purple" />
          Track shipment
        </div>
        <div className="mt-5">
          <FieldLabel>Tracking code</FieldLabel>
          <Input className="mt-2" value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. CCBY-102938" />
        </div>
        <Button className="mt-6 w-full" type="button" onClick={() => setShow(true)}>
          Track (demo)
        </Button>
      </div>

      {show ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-8 rounded-[28px] border border-black/10 bg-gradient-to-br from-brand-sky-soft via-white to-brand-purple/10 p-8"
        >
          <div className="font-display text-2xl text-brand-ink">Demo timeline</div>
          <ol className="mt-6 space-y-4 text-sm font-semibold text-brand-ink/65">
            <li>✅ Proof approved • WhatsApp thread archived</li>
            <li>✅ Print floor locked • QC photographed</li>
            <li>🚚 Courier partner pickup • ETA SMS dispatched</li>
            <li>📦 Out for delivery • Rider contact shared</li>
          </ol>
        </motion.div>
      ) : null}
    </div>
  );
}
