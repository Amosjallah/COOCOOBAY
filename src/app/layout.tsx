import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/layout/site-chrome";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coocoobay.com"),
  title: {
    default: "Coocoobay Limited | Premium Kids Fashion & Customization",
    template: "%s | Coocoobay Limited",
  },
  description:
    "Customized fashion and memories for every child. Premium personalized kids wear and photography across Ghana.",
  openGraph: {
    title: "Coocoobay Limited",
    description:
      "Premium personalized kids wear, event merch, and photography — crafted in Accra, delivered with heart.",
    url: "https://www.coocoobay.com",
    siteName: "Coocoobay Limited",
    locale: "en_GH",
    type: "website",
    images: [{ url: "/coocoobay-logo.png", alt: "Coocoobay Limited logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable} h-full`}>
      <body className="min-h-full antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
