import { ClipboardCopy } from "@/components/ui/CopyToClipboard";
import { SimpleLink } from "@/components/ui/Links";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-rows-[auto,1fr,auto] md:grid-cols-[auto,1fr,auto]">
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </footer>
  );
}

function LeftSection() {
  return (
    <section className="font-space-grotesk p-8 lg:p-16 uppercase  border-y border-y-dark2 text-center md:text-left">
      <ul className="flex flex-col gap-4">
        <li>
          <SimpleLink label="Home" href="/" />
        </li>
        <li>
          <SimpleLink label="Projects" href="/" />
        </li>
        {/* <li>
          <SimpleLink label="About" href="/" />
        </li> */}
      </ul>
    </section>
  );
}
function MiddleSection() {
  return (
    <section className="border-x border-x-dark2 grid place-content-center text-center font-space-grotesk gap-4 px-4 py-8 md:p-8 text-xs md:text-base">
      <h2 className=" capitalize text-5xl font-instrument-serif">
      Nwachukwu Ujubuoñu 	       </h2>
      <p className="font-semi-bold text-lg font-medium">SOFTWARE DEVELOPER</p>
      <p>
        <span className="flex items-center gap-4 opacity-80 justify-center  ">
          nwachukwuujubuonu@gmail.com
          <ClipboardCopy copyText={"nwachukwuujubuonu@gmail.com"} />
        </span>
      </p>
      <div className="flex gap-1 items-center justify-center">
        <MapPinIcon className="size-4" />
        {/* <Image src='/Flag_of_Nigeria.svg' alt='flag' className='w-5 h-6'/> */}
        <span>Lagos, Nigeria.</span>
      </div> 
  

      <div className=" flex gap-2 justify-center">
        <Link href={"https://github.com/Hemephelus"} target="_blank">
          <Image src="/github.svg" alt="github" width={8} height={8} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/nwachukwu-ujubuonu-303149161/"}
          target="_blank"
        >
          <Image src="/linkedin.svg" alt="linkedin" width={8} height={8} />
        </Link>
        <Link href={"https://twitter.com/Hemephelus1"} target="_blank">
          <Image src="/twitter-bird.svg" alt="twitter" width={8} height={8} />
        </Link>
      </div>
    </section>
  );
}
function RightSection() {
  return (
    <section className="font-space-grotesk p-8 lg:p-16 uppercase  border-y border-y-dark2 text-center md:text-right">
      <ul className="flex flex-col gap-4">
        {/* <li>
          <SimpleLink label="services" href="/services" />
        </li> */}
        <li>
          <SimpleLink label="contact" href="/contact" />
        </li>
        <li>
          <SimpleLink label="About" href="/about" />
        </li>
        {/* <li>
          <SimpleLink label="blanc lab" href="/" />
        </li> */}
      </ul>
    </section>
  );
}
