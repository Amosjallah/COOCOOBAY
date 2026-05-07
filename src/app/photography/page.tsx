import type { Metadata } from "next";
import { PhotographyPageClient } from "@/components/photography/photography-page-client";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Kids, family, portrait, studio, and event photography with booking forms and portfolio sliders.",
};

export default function PhotographyPage() {
  return <PhotographyPageClient />;
}
