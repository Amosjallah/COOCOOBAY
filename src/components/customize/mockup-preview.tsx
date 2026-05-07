"use client";

import { cn } from "@/lib/cn";
import { PRESET_GRAPHICS, useStudioStore } from "@/store/studio-store";

const colorMap: Record<string, string> = {
  "Sky Blue": "#4293c9",
  White: "#fffaf5",
  "Sun Yellow": "#c9a227",
  Lavender: "#9b90c9",
  Coral: "#d9456a",
  Black: "#221910",
};

export function MockupPreview({ className }: { className?: string }) {
  const apparel = useStudioStore((s) => s.apparel);
  const baseColor = useStudioStore((s) => s.baseColor);
  const childName = useStudioStore((s) => s.childName);
  const quote = useStudioStore((s) => s.quote);
  const graphicId = useStudioStore((s) => s.graphicId);
  const uploadDataUrl = useStudioStore((s) => s.uploadDataUrl);

  const hex = colorMap[baseColor] ?? "#4293c9";
  const graphic = PRESET_GRAPHICS.find((g) => g.id === graphicId);

  const tall = apparel === "Baby Bodysuit" || apparel === "Onesie";

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-black/10 bg-gradient-to-br from-white via-brand-sky-soft to-brand-purple/15 p-6",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-black uppercase tracking-[0.22em] text-brand-ink/45">
            Live mockup
          </div>
          <div className="mt-2 font-display text-2xl text-brand-ink">{apparel}</div>
        </div>
        <div className="rounded-full bg-white px-4 py-2 text-xs font-black text-brand-ink/60">
          Ghana • Premium print safe area
        </div>
      </div>

      <div className="relative mx-auto mt-8 grid max-w-md place-items-center">
        {/* garment */}
        <div
          className={cn(
            "relative w-[78%] rounded-[36px] shadow-2xl ring-1 ring-black/10",
            tall ? "aspect-[10/16]" : "aspect-[10/13]",
          )}
          style={{
            background: `linear-gradient(180deg, ${hex}, ${hex}dd)`,
          }}
        >
          <div className="absolute inset-x-10 top-10 h-[22%] rounded-[28px] bg-black/10" />

          <div className="absolute inset-x-8 top-[26%] rounded-[26px] bg-white/80 p-5 shadow-inner backdrop-blur">
            {uploadDataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={uploadDataUrl}
                alt="Uploaded artwork"
                className="mx-auto max-h-28 w-auto rounded-2xl object-contain"
              />
            ) : (
              <div className="grid place-items-center">
                <div className="text-6xl">{graphic?.emoji ?? "⭐"}</div>
                <div className="mt-2 text-xs font-black uppercase tracking-wide text-brand-ink/45">
                  {graphic?.label ?? "Graphic"}
                </div>
              </div>
            )}

            {childName ? (
              <div className="mt-3 text-center font-display text-3xl text-brand-ink">
                {childName}
              </div>
            ) : (
              <div className="mt-3 text-center text-sm font-semibold text-brand-ink/35">
                Add a name to preview
              </div>
            )}

            {quote ? (
              <div className="mt-2 text-center text-sm font-semibold italic text-brand-ink/70">
                “{quote}”
              </div>
            ) : null}
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center">
            <div className="rounded-full bg-white/70 px-4 py-2 text-xs font-black text-brand-ink/60 backdrop-blur">
              Coocoobay Limited
            </div>
          </div>
        </div>

        {/* floating accents */}
        <div className="pointer-events-none absolute -left-6 top-10 h-16 w-16 rounded-3xl bg-brand-yellow/55 blur-xl" />
      </div>
    </div>
  );
}
