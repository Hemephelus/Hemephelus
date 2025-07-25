import { Heading5, Heading2 } from "@/components/ui/Texts/Heading";
import React from "react";
import { JobCard } from "../JobCard";
import { projects } from "@/constances";

export default function WorkExperiences() {
  return (
    <section className="grid bg-light1 p-8 lg:p-16 gap-8 border-b border-dark2">
      <div className="grid gap-4">
        <Heading5>WORK EXPERIENCE</Heading5>
        <Heading2>Places I have worked</Heading2>
      </div>

      <ul className="grid gap-8 lg:grid-cols-1">
        {projects.work_experience.map((work,index) => (
          <li key={index}>
            <JobCard
              logoSrc={work.logoSrc}
              logoAlt={work.logoAlt}
              title={work.title}
              role={work.role}
              subTitle={work.subTitle}
              dateRange={work.dateRange}
              projectLink={work.projectLink}
              websiteLink={work.websiteLink}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
