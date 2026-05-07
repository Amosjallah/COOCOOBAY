import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-6">
      <div className="font-display text-4xl text-brand-ink">This piece floated away</div>
      <p className="mt-3 text-brand-ink/65">
        The product link may be outdated — explore fresh drops in the boutique.
      </p>
      <Link href="/shop" className="mt-8 inline-flex rounded-full bg-brand-ink px-6 py-3 text-sm font-black text-white">
        Back to shop
      </Link>
    </div>
  );
}
