import { ContactLink } from "@/components/ui/Links";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center bg-dark1 gap-2 md:gap-8 text-light1 p-8 py-16 md:p-16">
      <p className="font-instrument-serif text-3xl md:text-5xl">Let&apos;s Collaborate</p>
      <ContactLink />
    </div>
  );
}
