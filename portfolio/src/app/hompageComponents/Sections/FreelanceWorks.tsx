import { Heading5, Heading2 } from "@/components/ui/Texts/Heading";
import React from "react";
import { ClientCard } from "../JobCard";
import { projects } from "@/constances";

export default function FreelanceWorks() {
  return (
    <section className="grid bg-light1 p-8 lg:p-16 gap-8 border-b border-dark2">
      <div className="grid gap-4">
        <Heading5>Clients</Heading5>
        <Heading2>People I have worked with</Heading2>
      </div>

      <ul className="grid gap-4 grid-cols-fluid">
        {projects.freelance.map((work, index) => (
          <li key={index}>
            <ClientCard
              logoSrc={work.logoSrc}
              logoAlt={work.logoAlt}
              company={work.company}
              projectLink={work.projectLink}
              websiteLink={work.websiteLink}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
