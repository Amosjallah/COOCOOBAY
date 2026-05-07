"use client";

import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Select } from "@/components/ui/field";

export function GiftCardForm() {
  return (
    <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <FieldLabel>Amount (GH₵)</FieldLabel>
        <Select className="mt-2" defaultValue="200">
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="500">500</option>
          <option value="1000">1000</option>
        </Select>
      </div>
      <div>
        <FieldLabel>Recipient email</FieldLabel>
        <Input className="mt-2" type="email" placeholder="them@love.com" />
      </div>
      <div>
        <FieldLabel>Note</FieldLabel>
        <Input className="mt-2" placeholder="Happy 6th, superstar!" />
      </div>
      <Button type="submit">Purchase (demo)</Button>
    </form>
  );
}
