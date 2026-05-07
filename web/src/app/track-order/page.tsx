import type { Metadata } from "next";
import { TrackOrderClient } from "@/components/track/track-order-client";

export const metadata: Metadata = {
  title: "Track Order",
};

export default function TrackOrderPage() {
  return <TrackOrderClient />;
}
