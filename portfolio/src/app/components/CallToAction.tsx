import { ContactLink } from "@/components/ui/Links";
import React from "react";

export default function CallToAction() {
  return (
    <div className="flex flex-col justify-center items-center bg-dark1 gap-8 text-light1 p-[100px]">
      <p className="font-instrument-serif text-5xl">Let&apos;s Collaborate</p>
      <ContactLink />
    </div>
  );
}
