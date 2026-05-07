import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "My Account",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6">
      <h1 className="font-display text-4xl text-brand-ink">Customer accounts</h1>
      <p className="mt-3 text-brand-ink/65">
        Wire authentication (email/phone OTP) to unlock saved designs, order history, and referral balances.
      </p>

      <div className="mt-10 grid gap-4 rounded-[28px] border border-black/10 bg-white p-8 shadow-sm">
        <div className="font-black text-brand-ink">Demo mode</div>
        <p className="text-sm font-semibold text-brand-ink/60">
          Cart + wishlist already persist locally via Zustand. Promote this route once your auth provider is connected.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button type="button">Sign in (placeholder)</Button>
          <Link href="/checkout">
            <Button variant="secondary" className="w-full sm:w-auto">
              Go to checkout
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
