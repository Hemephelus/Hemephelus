import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface JobCardProps {
  logoSrc: string;
  logoAlt: string;
  title?: string;
  company: string;
  dateRange?: string;
  projectLink?: string;
  websiteLink?: string;
  logoSize?: number;
}

export function JobCard({
  logoSrc,
  logoAlt,
  title,
  company,
  dateRange,
  projectLink,
  websiteLink,
  logoSize = 200
}: JobCardProps) {
  return (
    <section className="grid md:grid-cols-[auto,1fr] gap-4">
      <figure className="border border-dark2 bg-light2 md:w-[300px] h-[100%] grid place-content-center p-8">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoSize}
          height={logoSize}
        />
      </figure>
      <div className="flex flex-col gap-2 justify-end">
        <p className="font-space-grotesk text-3xl">{title}</p>
        <p className="font-space-grotesk">{company}</p>
        <p className="font-space-grotesk opacity-75">{dateRange}</p>
        <div className='flex flex-wrap gap-4'>
          {projectLink && (
            <Link
            href={projectLink}
            className="py-2 px-4 uppercase bg-accent text-light1 border-2 border-transparent hover:border-accent hover:bg-transparent hover:text-accent flex gap-2 duration-300 font-bold font-space-grotesk w-fit"
            >
              <span>read more</span>
              <ArrowRightIcon className="size-6 "/>
            </Link>
          )}
          {websiteLink && (
            <Link
              className="font-space-grotesk underline flex items-center gap-1"
              href={websiteLink}
              target="_blank"
            >
              <span>Go to site</span>
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}


export function ClientCard({
  logoSrc,
  logoAlt,
  company,
  projectLink,
  websiteLink,
  logoSize = 200
}: JobCardProps) {
  return (
    
    <section className="grid md:max-w-[300px] gap-4">
      <figure className="border border-dark2 bg-light2 h-[300px] grid place-content-center p-8">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoSize}
          height={logoSize}
        />
      </figure>
      <div className="flex flex-col gap-2 justify-end">
        <p className="font-space-grotesk text-3xl">{company}</p>
        <div className='flex flex-wrap gap-4'>
          {projectLink && (
            <Link
            href={projectLink}
            className="py-2 px-4 uppercase bg-accent text-light1 border-2 border-transparent hover:border-accent hover:bg-transparent hover:text-accent flex gap-2 duration-300 font-bold font-space-grotesk w-fit"
            >
              <span>read more</span>
              <ArrowRightIcon className="size-6 "/>
            </Link>
          )}
          {websiteLink && (
            <Link
              className="font-space-grotesk underline flex items-center gap-1"
              href={websiteLink}
              target="_blank"
            >
              <span>Go to site</span>
              <ArrowTopRightOnSquareIcon className="size-4" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
