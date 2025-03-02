"use client";
import { NavLink, ContactLink } from "@/components/ui/Links";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
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
  // {
  //   label: "services",
  //   href: "/services",
  // },
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
    <nav className="flex justify-between py-4 px-4 md:px-8 lg:px-16 items-center border-b border-b-dark2 sticky top-0 bg-light1 z-10">
      <Link href="/" className="font-instrument-serif capitalize text-3xl ">
        <Image
                 src={'/logo.svg'}
                 alt={'logo'}
                 width={50}
                 height={50}
               />
      </Link>
      <div className="font-space-grotesk uppercase md:flex gap-8 items-center hidden">
        <section className="flex gap-6">
          {links.map((link) => (
            <NavLink
              href={link.href}
              label={link.label}
              isActive={isActivePath(location, link.href)}
              key={link.label}
            />
          ))}
        </section>
        <ContactLink />
      </div>
      <HamBurgerMenu/>
    </nav>
  );
}
function HamBurgerMenu(){
  const [isOpen, setIsOpen] = useState(false)
  const location = usePathname();

  return(
    <>
      <button className="flex justify-end md:hidden" onClick={()=>setIsOpen(true)}>
        <Bars3Icon className="size-6"/>
      </button>
    <div className={`font-space-grotesk uppercase flex flex-col gap-8 absolute bg-light1 w-screen top-0 left-0 p-4 h-screen duration-300 ${isOpen?"scale-y-100":"scale-y-0"}`}>
      <button className="flex justify-end" onClick={()=>setIsOpen(false)}>
        <XMarkIcon className="size-6"/>
      </button>
    <section className="flex gap-6 flex-col">
      {links.map((link) => (
        <NavLink
          href={link.href}
          label={link.label}
          isActive={isActivePath(location, link.href)}
          key={link.label}
          onClick={()=>setIsOpen(false)}
        />
      ))}
    </section>
    <ContactLink onClick={()=>setIsOpen(false)} />
  </div>
    </>
  )
}
