import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import BentoGrid from "@/components/sections/BentoGrid";
import ProjectsExperience from "@/components/sections/ProjectsExperience";
import OffScreen from "@/components/sections/OffScreen";
import ContactTerminal from "@/components/sections/ContactTerminal";
import Marquee from "@/components/ui/Marquee";

const marqueeItems = [
  "Management Information Systems",
  "Next.js",
  "Python",
  "Data Analytics",
  "Community Leadership",
  "Problem Solving",
];

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <BentoGrid />
      <ProjectsExperience />
      <OffScreen />
      <ContactTerminal />
      <Marquee items={marqueeItems} />
    </>
  );
}
