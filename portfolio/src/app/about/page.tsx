import { ClipboardCopy } from "@/components/ui/CopyToClipboard";
import { Heading2, Heading5 } from "@/components/ui/Texts/Heading";
import { MapPinIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div>
      <section className="grid md:grid-cols-2  font-space-grotesk">
        <div className=" bg-light2 flex flex-col justify-center p-8 lg:p-20 gap-4 font-space-grotesk text-xs md:text-base border-b border-b-dark1">
          <p className="text-5xl font-instrument-serif font-semi-bold">
            Nwachukwu Ujubuoñu
          </p>
          <p className="text-2xl font-semi-bold">SOFTWARE ENGINEER</p>
          <div className="flex gap-1 items-center">
            <MapPinIcon className="size-4" />
            <span>Lagos, Nigeria.</span>
          </div>

          <p className="opacity-75">
            I make computers do cool things to help people work faster and
            better!{" "}
          </p>

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
          <p className="flex items-center gap-2 opacity-80   ">
            <span>nwachukwuujubuonu@gmail.com</span>
            <ClipboardCopy copyText={"nwachukwuujubuonu@gmail.com"} />
          </p>
        </div>
        <div className="bg-dark1 relative">
          <img src="/me.jpg" className="" alt="" />
          <div className="bg-dark1  h-full w-full absolute top-0 left-0 opacity-70"></div>
        </div>
      </section>
      <div>
        <div className="p-4 md:p-8 lg:p-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
          <section className="flex flex-col gap-2">
            <Heading5>About</Heading5>
            <Heading2>About Me!</Heading2>
          </section>
          <section className="space-y-8">
            <p className="font-space-grotesk">
              {
                "I'm a Software engineer with a passion for building efficient systems that solve real-world problems. With experience in web development, machine learning, and Google Workspace automation, I specialize in creating tools that streamline workflows, enhance productivity, and improve user experiences. As the Technical Lead at Infamy, I've built custom Discord bots, developed web scrapers, and redesigned company websites to optimize operations. Beyond my work, I enjoy exploring procedural art. My goal is to continue innovating at the intersection of data science, software engineering, and automation."
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
