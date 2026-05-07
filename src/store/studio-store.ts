"use client";

import { create } from "zustand";

export type ApparelType =
  | "Baby Bodysuit"
  | "Kids Tee"
  | "Hoodie"
  | "Onesie";

export const PRESET_GRAPHICS = [
  { id: "star", label: "Super Star", emoji: "⭐" },
  { id: "rocket", label: "Rocket", emoji: "🚀" },
  { id: "crown", label: "Little Royal", emoji: "👑" },
  { id: "heart", label: "Big Love", emoji: "💖" },
  { id: "lion", label: "Brave Heart", emoji: "🦁" },
  { id: "rainbow", label: "Rainbow Day", emoji: "🌈" },
] as const;

type StudioState = {
  step: number;
  apparel: ApparelType;
  baseColor: string;
  size: string;
  childName: string;
  quote: string;
  graphicId: string | null;
  uploadDataUrl: string | null;
  setStep: (n: number) => void;
  setApparel: (a: ApparelType) => void;
  setBaseColor: (c: string) => void;
  setSize: (s: string) => void;
  setChildName: (s: string) => void;
  setQuote: (s: string) => void;
  setGraphicId: (id: string | null) => void;
  setUpload: (dataUrl: string | null) => void;
  reset: () => void;
};

const initial = {
  step: 1,
  apparel: "Kids Tee" as ApparelType,
  baseColor: "Sky Blue",
  size: "6Y",
  childName: "",
  quote: "",
  graphicId: "star" as string | null,
  uploadDataUrl: null as string | null,
};

export const useStudioStore = create<StudioState>((set) => ({
  ...initial,
  setStep: (step) => set({ step }),
  setApparel: (apparel) => set({ apparel }),
  setBaseColor: (baseColor) => set({ baseColor }),
  setSize: (size) => set({ size }),
  setChildName: (childName) => set({ childName }),
  setQuote: (quote) => set({ quote }),
  setGraphicId: (graphicId) => set({ graphicId }),
  setUpload: (uploadDataUrl) => set({ uploadDataUrl }),
  reset: () => set({ ...initial }),
}));
