"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Save, ShoppingBag, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Textarea } from "@/components/ui/field";
import { MockupPreview } from "@/components/customize/mockup-preview";
import {
  PRESET_GRAPHICS,
  type ApparelType,
  useStudioStore,
} from "@/store/studio-store";
import { useCartStore } from "@/store/cart-store";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { WIZARD_IMG } from "@/lib/products";

const steps = [
  { id: 1, title: "Apparel", hint: "Pick the canvas" },
  { id: 2, title: "Palette & size", hint: "Fit & colorway" },
  { id: 3, title: "Story", hint: "Names, quotes, art" },
  { id: 4, title: "Review", hint: "Save & cart" },
] as const;

const apparelOptions: ApparelType[] = [
  "Baby Bodysuit",
  "Kids Tee",
  "Hoodie",
  "Onesie",
];

const palette = ["Sky Blue", "White", "Sun Yellow", "Lavender", "Coral", "Black"];
const sizes = ["NB", "0-3M", "3-6M", "6-12M", "2Y", "4Y", "6Y", "8Y", "10Y", "12Y"];

export function StudioWizard() {
  const step = useStudioStore((s) => s.step);
  const setStep = useStudioStore((s) => s.setStep);
  const apparel = useStudioStore((s) => s.apparel);
  const setApparel = useStudioStore((s) => s.setApparel);
  const baseColor = useStudioStore((s) => s.baseColor);
  const setBaseColor = useStudioStore((s) => s.setBaseColor);
  const size = useStudioStore((s) => s.size);
  const setSize = useStudioStore((s) => s.setSize);
  const childName = useStudioStore((s) => s.childName);
  const setChildName = useStudioStore((s) => s.setChildName);
  const quote = useStudioStore((s) => s.quote);
  const setQuote = useStudioStore((s) => s.setQuote);
  const graphicId = useStudioStore((s) => s.graphicId);
  const setGraphicId = useStudioStore((s) => s.setGraphicId);
  const setUpload = useStudioStore((s) => s.setUpload);
  const uploadDataUrl = useStudioStore((s) => s.uploadDataUrl);

  const add = useCartStore((s) => s.add);
  const [savedToast, setSavedToast] = useState(false);

  const price = useMemo(() => {
    const base =
      apparel === "Hoodie" ? 185 : apparel === "Baby Bodysuit" || apparel === "Onesie" ? 120 : 105;
    return base + (childName ? 15 : 0) + (quote ? 10 : 0);
  }, [apparel, childName, quote]);

  function onUploadFile(file: File | null) {
    if (!file) {
      setUpload(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setUpload(String(reader.result));
    reader.readAsDataURL(file);
  }

  function customizationSummary() {
    const bits = [
      apparel,
      baseColor,
      size,
      childName ? `Name: ${childName}` : "",
      quote ? "Quote" : "",
      graphicId ? `Graphic: ${graphicId}` : "",
      uploadDataUrl ? "Custom upload" : "",
    ].filter(Boolean);
    return bits.join(" • ");
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-2 md:px-6">
      <div>
        <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap gap-2">
            {steps.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setStep(s.id)}
                className={cn(
                  "flex flex-1 min-w-[140px] items-center justify-between gap-2 rounded-2xl border px-3 py-2 text-left transition",
                  step === s.id
                    ? "border-brand-purple/40 bg-brand-sky-soft"
                    : "border-black/10 bg-white hover:bg-brand-sky-soft/40",
                )}
              >
                <div>
                  <div className="text-[11px] font-black uppercase tracking-wide text-brand-ink/45">
                    Step {s.id}
                  </div>
                  <div className="text-sm font-black text-brand-ink">{s.title}</div>
                </div>
                {step > s.id ? <Check className="h-4 w-4 text-brand-purple" /> : null}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-8 space-y-6"
            >
              {step === 1 ? (
                <>
                  <div>
                    <FieldLabel>Choose apparel type</FieldLabel>
                    <div className="mt-3 grid gap-3 sm:grid-cols-2">
                      {apparelOptions.map((a) => (
                        <button
                          key={a}
                          type="button"
                          onClick={() => setApparel(a)}
                          className={cn(
                            "rounded-2xl border px-4 py-4 text-left font-bold transition",
                            apparel === a
                              ? "border-brand-purple/40 bg-brand-sky-soft"
                              : "border-black/10 bg-white hover:bg-brand-sky-soft/40",
                          )}
                        >
                          {a}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[24px] border border-black/10">
                    <div className="relative aspect-[21/9]">
                      <Image
                        src={WIZARD_IMG.inspiration}
                        alt="Kids apparel inspiration"
                        fill
                        className="object-cover"
                        sizes="800px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 max-w-md text-white">
                        <div className="text-xs font-black uppercase tracking-[0.22em] text-white/70">
                          Pro tip
                        </div>
                        <div className="mt-2 font-display text-2xl">
                          Hoodies love oversized cartoons — bodysuits love delicate type.
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <div>
                    <FieldLabel>Garment color</FieldLabel>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {palette.map((c) => (
                        <button
                          key={c}
                          type="button"
                          onClick={() => setBaseColor(c)}
                          className={cn(
                            "rounded-full border px-4 py-2 text-sm font-black transition",
                            baseColor === c
                              ? "border-brand-purple/50 bg-brand-purple/15"
                              : "border-black/10 bg-white hover:bg-brand-sky-soft",
                          )}
                        >
                          {c}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <FieldLabel>Size</FieldLabel>
                    <select
                      className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-brand-purple/25"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : null}

              {step === 3 ? (
                <>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <FieldLabel>Child&apos;s name</FieldLabel>
                      <Input
                        className="mt-2"
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Kofi"
                      />
                    </div>
                    <div>
                      <FieldLabel>Custom quote (optional)</FieldLabel>
                      <Input
                        className="mt-2"
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        placeholder="e.g. Birthday King 2026"
                      />
                    </div>
                  </div>
                  <div>
                    <FieldLabel>Cartoon graphic</FieldLabel>
                    <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                      {PRESET_GRAPHICS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => {
                            setGraphicId(g.id);
                            setUpload(null);
                          }}
                          className={cn(
                            "rounded-2xl border px-3 py-3 text-left transition",
                            graphicId === g.id
                              ? "border-brand-purple/40 bg-brand-sky-soft"
                              : "border-black/10 bg-white hover:bg-brand-sky-soft/40",
                          )}
                        >
                          <div className="text-3xl">{g.emoji}</div>
                          <div className="mt-1 text-xs font-black text-brand-ink/60">{g.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <FieldLabel>Upload custom image (optional)</FieldLabel>
                    <label className="mt-3 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-black/20 bg-brand-sky-soft/35 px-6 py-10 text-center transition hover:bg-brand-sky-soft">
                      <Upload className="h-6 w-6 text-brand-ink/55" />
                      <div className="mt-2 text-sm font-black text-brand-ink">Tap to upload PNG / JPG</div>
                      <div className="mt-1 text-xs font-semibold text-brand-ink/45">
                        We&apos;ll auto-mask busy backgrounds in production — this preview is instant.
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => onUploadFile(e.target.files?.[0] ?? null)}
                      />
                    </label>
                  </div>
                  <div>
                    <FieldLabel>Extra notes for our designers</FieldLabel>
                    <Textarea placeholder="Placement, pantone refs, event date…" />
                  </div>
                </>
              ) : null}

              {step === 4 ? (
                <>
                  <div className="rounded-[24px] border border-black/10 bg-brand-sky-soft/35 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
                          Estimated studio price
                        </div>
                        <div className="mt-2 font-display text-4xl text-brand-ink">GH₵ {price}</div>
                        <p className="mt-2 text-sm font-semibold text-brand-ink/60">
                          Final invoice may adjust for specialty inks or rush timelines — we confirm on WhatsApp.
                        </p>
                      </div>
                      <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-black/10 bg-white">
                        <Image src={WIZARD_IMG.fabricPreview} alt="Preview fabric" fill className="object-cover" sizes="80px" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button
                      type="button"
                      variant="secondary"
                      className="flex-1"
                      onClick={() => {
                        setSavedToast(true);
                        window.setTimeout(() => setSavedToast(false), 1600);
                      }}
                    >
                      <Save className="h-4 w-4" />
                      Save design locally
                    </Button>
                    <Button
                      type="button"
                      className="flex-1"
                      onClick={() => {
                        add({
                          productId: `custom-${apparel}`,
                          name: `Custom ${apparel}`,
                          priceGHS: price,
                          qty: 1,
                          image: WIZARD_IMG.cartPlaceholder,
                          color: baseColor,
                          size,
                          customizationSummary: customizationSummary(),
                        });
                      }}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Add customized product to cart
                    </Button>
                  </div>
                  {savedToast ? (
                    <div className="rounded-2xl bg-brand-mint/35 px-4 py-3 text-sm font-black text-brand-ink">
                      Saved on this device — sign-in coming soon for cloud saves.
                    </div>
                  ) : null}
                </>
              ) : null}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-black/10 pt-6">
            <Button
              type="button"
              variant="ghost"
              disabled={step <= 1}
              onClick={() => setStep(Math.max(1, step - 1))}
            >
              Back
            </Button>
            <Button
              type="button"
              disabled={step >= 4}
              onClick={() => setStep(Math.min(4, step + 1))}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>

      <div className="md:sticky md:top-24 h-fit space-y-4">
        <MockupPreview />
        <div className="rounded-[28px] border border-black/10 bg-white p-6 text-sm font-semibold text-brand-ink/65">
          <div className="font-black text-brand-ink">Kids size calculator</div>
          <p className="mt-2">
            Need another opinion? Use the calculator on any product page — it translates age & height into our Ghana-friendly chart.
          </p>
          <Link className="mt-3 inline-flex font-black text-brand-purple" href="/shop/little-legends-tee">
            Open sample PDP calculator →
          </Link>
        </div>
      </div>
    </div>
  );
}
