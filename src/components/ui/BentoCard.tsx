"use client";

import { motion } from "framer-motion";
import type { BentoItem } from "@/lib/data";

interface BentoCardProps {
  item: BentoItem;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function BentoCard({ item, index }: BentoCardProps) {
  const isLife = item.variant === "life";

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`
        group relative overflow-hidden rounded-xl border border-white/5
        bg-surface/60 backdrop-blur-md p-6 sm:p-8 transition-all duration-400 hover:-translate-y-1.5 will-change-transform
        hover:bg-surface hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)]
        ${item.span === "wide" ? "sm:col-span-2" : ""}
        ${item.span === "large" ? "sm:col-span-2 sm:row-span-2" : ""}
        ${item.span === "tall" ? "sm:row-span-2" : ""}
      `}
    >
      {/* Subtle gradient overlay for life card */}
      {isLife && (
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      {item.icon && <div className="text-2xl mb-4">{item.icon}</div>}

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {item.title}
      </h3>

      {/* Description */}
      {item.description && (
        <p className="text-muted text-sm leading-relaxed mb-4">
          {item.description}
        </p>
      )}

      {/* Tech items as pills */}
      {item.items && item.variant !== "life" && (
        <div className="flex flex-wrap gap-2">
          {item.items.map((tech) => (
            <span
              key={tech}
              className="font-code text-xs px-3 py-1.5 rounded-full bg-accent/5 border border-accent/10 text-accent/80 transition-all duration-300 hover:bg-accent/10 hover:text-accent"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Life items — rendered as minimal small tags */}
      {item.items && item.variant === "life" && (
        <div className="flex flex-wrap gap-2 mt-2">
          {item.items.map((hobby) => (
            <span
              key={hobby}
              className="text-sm px-2.5 py-1 rounded-md bg-border/40 text-muted/90 font-medium transition-colors duration-300 hover:text-foreground hover:bg-border/60"
            >
              {hobby}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
