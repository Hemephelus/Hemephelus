import { Heading5, Heading2 } from "@/components/ui/Texts/Heading";
import React from "react";
import { ClientCard } from "../JobCard";

export default function FreelanceSection() {
  return (
    <section className="grid bg-light1 p-20 gap-8 border-b border-dark2">
      <div className="grid gap-4">
        <Heading5>Clients</Heading5>
        <Heading2>People I have worked with</Heading2>
      </div>

      <ul className="grid gap-4 grid-cols-fluid">
        <li>
          <ClientCard
            logoSrc="/sppg.svg"
            logoAlt="sppg"
            company="SPPG"
            projectLink="/projects/infamy"
            websiteLink="https://www.infamy.gg/"
          />
        </li>
      </ul>
    </section>
  );
}
