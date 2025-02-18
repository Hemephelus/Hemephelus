"use client";
import { NavLink, ContactLink, SimpleLink } from "@/components/ui/Links";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
const links = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "about",
    href: "/about",
  },
  {
    label: "services",
    href: "/services",
  },
];

const isActivePath = (pathname: string, href: string): boolean => {
  // Exact match
  if (pathname === href) return true;

  // Check if it's a subpath
  // This ensures /supplier/products/123 matches with /supplier/products
  if (
    pathname.startsWith(href) &&
    (pathname.charAt(href.length) === "/" || href === "/supplier")
  ) {
    return true;
  }

  return false;
};
export default function NavBar() {
  const location = usePathname();
  return (
    <nav className="flex justify-between py-4 px-20 items-center border-b border-b-dark2 sticky top-0 bg-light1">
      <Link href="/" className="font-instrument-serif capitalize text-3xl">
        Nwachukwu Ujubuonu
      </Link>
      <div className="font-space-grotesk uppercase flex gap-8 items-center">
        <section className="flex gap-6">
          {links.map((link) => (
            <NavLink
              href={link.href}
              label={link.label}
              isActive={isActivePath(location, link.href)}
            />
          ))}
        </section>
        <ContactLink />
      </div>
    </nav>
  );
}
