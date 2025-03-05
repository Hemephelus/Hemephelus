import { Heading5, Heading2 } from "@/components/ui/Texts/Heading";
import React from "react";
import { ClientCard } from "../JobCard";
import { projects } from "@/constances";
import { SeeMoreLink } from "@/components/ui/Links";

export default function Projects() {
  const wedDevelopment = projects.personal_projects.wed_development.slice(0, 4);
  const dataScience = projects.personal_projects.data_science.slice(0, 4);
  const p5js = projects.personal_projects.p5js.slice(0, 4);
  return (
    <section className="grid bg-light1 p-8 lg:p-16 gap-16 border-b border-dark2">
      <Heading5>Personal Projects</Heading5>
      <div className="grid gap-8 " id="#web-development">
        <Heading2>Featured Web Projects</Heading2>

        <ul className="grid gap-16 grid-cols-fluid">
          {wedDevelopment.map((work, index) => (
            <li key={index}>
              <ClientCard
                logoSrc={work.logoSrc}
                logoAlt={work.logoAlt}
                title={work.title}
                subTitle={work.subTitle}
                projectLink={work.projectLink}
                websiteLink={work.websiteLink}
              />
            </li>
          ))}
        </ul>
        <SeeMoreLink href={"/projects#web-development"} />
      </div>

      <div className="grid gap-8 " id="#data-science">
        <Heading2>Featured Data Science Projects</Heading2>

        <ul className="grid gap-16 grid-cols-fluid">
          {dataScience.map((work, index) => (
            <li key={index}>
              <ClientCard
                logoSrc={work.logoSrc}
                logoAlt={work.logoAlt}
                title={work.title}
                subTitle={work.subTitle}
                websiteLink={work.websiteLink}
              />
            </li>
          ))}
        </ul>
        <SeeMoreLink href={"/projects#data-science"} />
      </div>
      <div className="grid gap-8 " id="#p5js">
        <Heading2>Featured P5js Projects</Heading2>

        <ul className="grid gap-16 grid-cols-fluid">
          {p5js.map((work, index) => (
            <li key={index}>
              <ClientCard
                logoSrc={work.logoSrc}
                logoAlt={work.logoAlt}
                title={work.title}
                subTitle={work.subTitle}
                websiteLink={work.websiteLink}
              />
            </li>
          ))}
        </ul>
        <SeeMoreLink href={"/projects#p5js"} />
      </div>
    </section>
  );
}
