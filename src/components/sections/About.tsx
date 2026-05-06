"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="section-container max-w-3xl"
      >
        {/* Section label */}
        <motion.p
          variants={fadeInUp}
          className="font-code text-accent text-xs tracking-widest uppercase mb-4"
        >
          // about me
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8"
        >
          A bit about who I am.
        </motion.h2>

        {/* Narrative */}
        {about.paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={fadeInUp}
            className="text-muted text-base sm:text-lg leading-relaxed mb-6 last:mb-10"
          >
            {paragraph}
          </motion.p>
        ))}

        {/* Traits */}
        <motion.div
          variants={fadeInUp}
          className="grid gap-6 sm:grid-cols-3"
        >
          {about.traits.map((trait, index) => (
            <motion.div
              key={trait.label}
              variants={fadeInUp}
              className="group"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:bg-accent transition-colors duration-300" />
                <h3 className="text-sm font-semibold text-foreground">
                  {trait.label}
                </h3>
              </div>
              <p className="text-muted text-sm leading-relaxed pl-[18px]">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
