"use client";

import { CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FieldLabel, Input, Select, Textarea } from "@/components/ui/field";

export function EventBookingForm() {
  return (
    <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Organization / Parent name</FieldLabel>
          <Input className="mt-2" placeholder="Name" />
        </div>
        <div>
          <FieldLabel>WhatsApp</FieldLabel>
          <Input className="mt-2" placeholder="024…" />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <FieldLabel>Event type</FieldLabel>
          <Select className="mt-2" defaultValue="birthday">
            <option value="birthday">Birthday package</option>
            <option value="school">School event</option>
            <option value="church">Church event</option>
            <option value="photo">Photoshoot day</option>
          </Select>
        </div>
        <div>
          <FieldLabel>Event date</FieldLabel>
          <Input className="mt-2" type="date" />
        </div>
      </div>
      <div>
        <FieldLabel>Expected quantity</FieldLabel>
        <Input className="mt-2" placeholder="e.g. 80 tees + 12 hoodies" />
      </div>
      <div>
        <FieldLabel>Creative direction</FieldLabel>
        <Textarea className="mt-2" placeholder="Palette, mascot, scripture, slogan…" />
      </div>
      <Button type="submit">
        <CalendarHeart className="h-4 w-4" />
        Submit brief (demo)
      </Button>
    </form>
  );
}
