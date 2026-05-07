"use client";

import { motion } from "framer-motion";
import { exploringItems } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function OffScreen() {
  return (
    <section id="exploring" className="py-28 md:py-36 relative">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-md h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="section-container max-w-3xl">
        {/* Section label */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="font-code text-accent text-xs tracking-widest uppercase mb-4"
        >
          {"// currently exploring"}
        </motion.p>

        {/* Heading */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Always learning.
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-muted text-base sm:text-lg mb-12"
        >
          A snapshot of what I&apos;m curious about right now.
        </motion.p>

        {/* Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-4"
        >
          {exploringItems.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="group flex items-center gap-5 p-4 sm:p-5 rounded-xl border border-border bg-surface/50 transition-all duration-300 hover:bg-surface hover:border-border-hover"
            >
              {/* Icon */}
              <span className="text-2xl shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-accent/5 group-hover:bg-accent/10 transition-colors duration-300">
                {item.icon}
              </span>

              {/* Text */}
              <div>
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-0.5">
                  {item.description}
                </p>
              </div>


            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
