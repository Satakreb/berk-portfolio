"use client";

import { motion } from "framer-motion";
import { projects, type ProjectItem } from "@/lib/data";
import ProjectCard from "@/components/ui/ProjectCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1] as const 
    },
  }),
};

function ExperienceRow({ item, index }: { item: ProjectItem; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="relative pl-8 md:pl-12 group"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors duration-300 ring-4 ring-background" />

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Title & Tags */}
        <div className="md:w-1/3 shrink-0">
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
            {item.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="font-code text-[11px] px-2.5 py-1 rounded-md bg-accent/5 text-accent/80 border border-accent/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="md:w-2/3 flex flex-col space-y-4 mt-1 md:mt-0">
          <div>
            <span className="font-code text-[10px] text-muted/50 block mb-1.5 uppercase tracking-wider">goal</span>
            <p className="text-sm text-muted leading-relaxed">
              {item.goal}
            </p>
          </div>
          <div>
            <span className="font-code text-[10px] text-accent/50 block mb-1.5 uppercase tracking-wider">achieved</span>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {item.achievement}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsExperience() {
  const featuredProjects = projects.filter((p) => p.type === "project");
  const experiences = projects.filter((p) => p.type === "experience");

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="section-container">
        
        {/* === FEATURED PROJECTS === */}
        <div className="mb-24">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-code text-accent text-xs tracking-widest uppercase mb-4"
          >
            {"// featured projects"}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12"
          >
            Things I&apos;ve built.
          </motion.h2>

          {/* 2-Column Grid for Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* === PROFESSIONAL EXPERIENCE === */}
        <div>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="font-code text-accent text-xs tracking-widest uppercase mb-4"
          >
            {"// professional experience"}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-12"
          >
            Where I&apos;ve made an impact.
          </motion.h2>

          {/* Timeline layout for Experiences */}
          <div className="relative border-l border-border/40 ml-4 md:ml-6 space-y-12 pb-4">
            {experiences.map((exp, index) => (
              <ExperienceRow key={exp.id} item={exp} index={index} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
