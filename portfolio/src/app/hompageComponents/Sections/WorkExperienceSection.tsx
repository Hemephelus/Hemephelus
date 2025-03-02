import { Heading5, Heading2 } from "@/components/ui/Texts/Heading";
import React from "react";
import {JobCard} from "../JobCard";

export default function WorkExperienceSection() {
  return (
    <section className="grid bg-light1 p-8 lg:p-16 gap-8 border-b border-dark2">
      <div className="grid gap-4">
        <Heading5>WORK EXPERIENCE</Heading5>
        <Heading2>Places I have worked</Heading2>
      </div>

      <ul>
        <li>
          <JobCard
            logoSrc="/Infamy_Logo_Crown_Logo.png"
            logoAlt="infamy"
            title="Technical Lead"
            company="Infamy Fantasy Esports"
            dateRange="Apr 2022 - Present"
            projectLink="/projects/infamy"
            websiteLink="https://www.infamy.gg/"
          />
        </li>
      </ul>
    </section>
  );
}
