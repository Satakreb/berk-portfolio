"use client";

import { motion } from "framer-motion";
import type { ProjectItem } from "@/lib/data";
import Image from "next/image";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative overflow-hidden rounded-xl border border-[var(--alpha-border)] bg-surface/60 backdrop-blur-md transition-all duration-400 hover:-translate-y-1.5 will-change-transform hover:bg-surface hover:border-[var(--alpha-border-hover)] hover:shadow-[var(--shadow-strong)]"
    >
      {/* Image — grayscale to color on hover */}
      {project.image && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover grayscale-hover group-hover:filter-none transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Type badge */}
        <span className="font-code text-xs uppercase tracking-[0.2em] text-accent/70 mb-3 block">
          {project.type === "project" ? "📁 Project" : "💼 Experience"}
        </span>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>

        {/* Goal */}
        <div className="mb-2">
          <span className="font-code text-xs text-muted/60">goal: </span>
          <span className="text-sm text-muted leading-relaxed">
            {project.goal}
          </span>
        </div>

        {/* Achievement */}
        <div className="mb-5">
          <span className="font-code text-xs text-accent/60">achieved: </span>
          <span className="text-sm text-muted leading-relaxed">
            {project.achievement}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-code text-[11px] px-2.5 py-1 rounded-md bg-border/50 text-muted/80 border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
