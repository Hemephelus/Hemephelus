import FreelanceWorks from "./hompageComponents/Sections/FreelanceWorks";
import Hero from "./hompageComponents/Sections/Hero";
import Projects from "./hompageComponents/Sections/Projects";
import WorkExperiences from "./hompageComponents/Sections/WorkExperiences";

export default function Home() {
  return (
    <div className="">
      <Hero/>  
      <WorkExperiences/>
      <FreelanceWorks/>
      <Projects/>
    </div>
  );
}
