"use client";

import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Textarea } from "@/components/ui/field";

export function ContactForm() {
  return (
    <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Name</FieldLabel>
          <Input className="mt-2" placeholder="Your name" />
        </div>
        <div>
          <FieldLabel>Email</FieldLabel>
          <Input className="mt-2" type="email" placeholder="you@family.com" />
        </div>
      </div>
      <div>
        <FieldLabel>How can we help?</FieldLabel>
        <Textarea className="mt-2" placeholder="Tell us about your kids, event date, or reference SKU…" />
      </div>
      <Button type="submit">Submit inquiry</Button>
    </form>
  );
}
