import { ClipboardCopy } from "@/components/ui/CopyToClipboard";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2  border-b border-b-dark1">
      <div className=" bg-light2 flex flex-col justify-center p-8 lg:p-20 gap-4 font-space-grotesk text-xs md:text-base ">
        <p className="text-5xl font-instrument-serif font-semi-bold">
        Nwachukwu Ujubuoñu 	 
        </p>
        <p className="text-2xl font-semi-bold">
          SOFTWARE ENGINEER
        </p>
        <div className="flex gap-1 items-center">
          <MapPinIcon className="size-4" />
          {/* <img src='/Flag_of_Nigeria.svg' alt='flag' className='w-5 h-6'/> */}
          <span>Lagos, Nigeria.</span>
        </div>
        {/* <p className="opacity-75">
        I make computers do cool things to help people work faster and better!
        </p> */}
        <p className="opacity-75">
        A showcase of my work in web development,  automation, and data science, where I share my projects, research, and cool visualizations.        </p>
       
        <div className=" flex gap-2">
          <Link href={"https://github.com/Hemephelus"} target="_blank">
            <img src="/github.svg" alt="github" className="w-8 h-8" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nwachukwu-ujubuonu-303149161/"}
            target="_blank"
          >
            <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8" />
          </Link>
          <Link href={"https://twitter.com/Hemephelus1"} target="_blank">
            <img src="/twitter-bird.svg" alt="twitter" className="w-8 h-8" />
          </Link>
        </div>
        <p>
          <span className="flex items-center gap-4 opacity-80   ">
            nwachukwuujubuonu@gmail.com
            <ClipboardCopy copyText={"nwachukwuujubuonu@gmail.com"} />
          </span>
        </p>
      </div>
      <div className="bg-dark1">
        <img src="/me2.png" className="" alt="" />
      </div>
    </section>
  );
}
