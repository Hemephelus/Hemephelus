import { ClipboardCopy } from "@/components/ui/CopyToClipboard";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <section className="grid md:grid-cols-2 border-b border-b-dark1 font-space-grotesk">
      <div className=" bg-light2 flex flex-col justify-center p-8 lg:p-20 gap-4 font-space-grotesk text-xs md:text-base ">
        <p className="text-5xl font-instrument-serif font-semi-bold">
          Nwachukwu Ujubuoñu
        </p>
        <div className="flex gap-1 items-center">
          <MapPinIcon className="size-4" />
          <span>Lagos, Nigeria.</span>
        </div>

        <div className=" flex gap-2 flex-col">
          <Link
            href={"https://github.com/Hemephelus"}
            target="_blank"
            className="flex gap-4 items-center"
          >
            <Image src="/github.svg" alt="github" width={8} height={8}/>
            <span>/Hemephelus</span>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nwachukwu-ujubuonu-303149161/"}
            target="_blank"
            className="flex gap-4  items-center"
          >
            <Image src="/linkedin.svg" alt="linkedin" width={8} height={8}/>
            <span>/nwachukwu-ujubuonu-303149161</span>
          </Link>
          <Link
            href={"https://twitter.com/Hemephelus1"}
            target="_blank"
            className="flex gap-4 items-center"
          >
            <Image src="/twitter-bird.svg" alt="twitter" width={8} height={8}/>
            <span>/Hemephelus1</span>
          </Link>
        </div>
        <p className="flex items-center gap-2 opacity-80   ">
          <span>nwachukwuujubuonu@gmail.com</span>
          <ClipboardCopy copyText={"nwachukwuujubuonu@gmail.com"} />
        </p>
      </div>
      <div className="bg-dark1 relative">
        <Image src="/me.jpg" className="" alt="" />
        <div className="bg-dark1  h-full w-full absolute top-0 left-0 opacity-70"></div>
      </div>
    </section>
  );
}
