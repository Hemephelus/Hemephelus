"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { projects } from "@/constances";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import {
  Heading2,
  Heading5,
  Heading4,
  Heading6,
} from "@/components/ui/Texts/Heading";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Project() {
  const pathname = usePathname();
  const wedDevelopment = projects.personal_projects.wed_development;
  const work = projects.work_experience;
  const freelance = projects.freelance;
  const allProjects = [...wedDevelopment, ...work, ...freelance];
  const [currentProject] = allProjects.filter(
    (project) => project.projectLink === pathname
  );
  if(!currentProject){
    redirect('/projects')
  }
  return (
    <div className=" ">
      <div className="p-4 md:p-8 lg:p-16">
        <div className="grid grid-rows-[1fr,auto] lg:grid-cols-2  border border-dark2 ">
          <div className=" bg-light2 flex flex-col justify-center p-4 md:p-8 lg:p-20 gap-4 font-space-grotesk text-xs md:text-base ">
            <Heading2>
              {currentProject.title}
            </Heading2>

            <p className="opacity-75">{currentProject.subTitle} </p>

            <section>
              <Heading5>Tools Used</Heading5>
              <div className="grid grid-cols-fluid-sm gap-4 py-4">
                {currentProject.tools.map((tool) => (
                  <div className="flex items-center gap-2" key={tool.src}>
                    <figure className=" h-[50px] w-[50px] grid place-content-center bg-white/30 p-2 border border-dark2 ">
                      <Image
                        src={tool.src}
                        alt={currentProject.logoAlt}
                        width={50}
                        height={50}
                      />
                    </figure>
                    <p className="text-sm">{tool.name}</p>
                  </div>
                ))}
              </div>
            </section>
            <Link
              className="font-space-grotesk underline flex items-center gap-1"
              href={currentProject.websiteLink}
              target="_blank"
            >
              <span>Go to site</span>
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          </div>
          <figure className="border-t border-t-dark2 lg:border-l lg:border-l-dark2 lg:border-t-0  min-h-[500px] grid place-content-center lg:p-8 bg-light2">
            <Image
              src={currentProject.logoSrc}
              alt={currentProject.logoAlt}
              width={200}
              height={200}
            />
          </figure>
        </div>
      </div>

      <div>
        <div className="p-4 md:p-8 lg:p-16 grid lg:grid-cols-[auto,1fr] gap-8 lg:gap-16">
          <section className="flex flex-col gap-2">
            <Heading5>DESCRIPTION</Heading5>
            <Heading2>About the project</Heading2>
            <Heading6>Role: {currentProject.role}</Heading6>
          </section>
          <section className="space-y-8">
          <div className="flex justify-center p-8 bg-light2 border border-dark2">
              <CarouselDemo srcs={currentProject.slide_imgs} />
            </div>
            <DetailsSection
              header="Project Overview"
              body={currentProject.overview}
            />
            <DetailsSection
              header="The Problem"
              body={currentProject.problem}
            />
            <DetailsSection
              header="The Solution"
              body={currentProject.solution}
            />
            <DetailsSection header="The Result" body={currentProject.result} />
          
          </section>
        </div>
      </div>
    </div>
  );
}

function CarouselDemo({ srcs = [] }: { srcs: string[] }) {
  return (
    <Carousel className="w-full ">
      <CarouselContent>
        {srcs.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className=" rounded-none grid place-content-center">
                <figure className="">
                  <Image
                    src={src}
                    alt="carousel image"
                    layout="intrinsic"
                    width={1000}
                    height={100}
                  />
                </figure>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=""/>
      <CarouselNext />
    </Carousel>
  );
}

function DetailsSection({
  header = "",
  body = [],
}: {
  header: string;
  body: string[];
}) {
  return (
    <div className="space-y-1">
      <Heading4>{header}</Heading4>
      <ul className="space-y-3 list-disc list-inside lg:list-outside">
      {body.map((paragraph, i) => (
          <li className="font-space-grotesk text-xs md:text-sm lg:text-base" key={i}>
          {paragraph}
        </li>
      ))}
      </ul>
      
    </div>
  );
}
