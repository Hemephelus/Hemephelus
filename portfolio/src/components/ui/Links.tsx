import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

export function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`cursor-pointer hover:underline  ${
        isActive ? "underline" : ""
      }`}
    >
      {label}
    </Link>
  );
}
export function SimpleLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="cursor-pointer hover:underline duration-300">
      {label}
    </Link>
  );
}
export function ContactLink() {
  return (
    <Link
      href={"/contact"}
      className="py-2 px-4 uppercase bg-accent text-light1 border-2 border-transparent hover:border-accent hover:bg-transparent hover:text-accent flex gap-2 duration-300 font-bold font-space-grotesk"
    >
      <span>get in touch</span>
      <ArrowRightIcon className="size-6 "/>
    </Link>
  );
}
