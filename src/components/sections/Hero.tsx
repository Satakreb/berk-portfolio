"use client";

import { motion } from "framer-motion";
import { hero } from "@/lib/data";
import ScrambleText from "@/components/ui/ScrambleText";

// Stagger children animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large circle */}
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full border border-accent/5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* Small diamond */}
        <motion.div
          className="absolute bottom-40 left-[10%] w-16 h-16 border border-accent/10 rotate-45"
          animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Dot cluster */}
        <motion.div
          className="absolute top-1/3 right-[15%] w-2 h-2 rounded-full bg-accent/20"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-[14%] mt-4 w-1.5 h-1.5 rounded-full bg-accent/15"
          animate={{ scale: [1.2, 0.8, 1.2], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        {/* Greeting */}
        <motion.h1
          variants={fadeInUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
        >
          <ScrambleText text={hero.greeting} />
        </motion.h1>

        {/* Subtitle — monospace */}
        <motion.p
          variants={fadeInUp}
          className="font-code text-sm sm:text-base text-muted mt-6 max-w-xl"
        >
          {hero.subtitle}
        </motion.p>

        {/* Value prop */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg text-muted/80 mt-4 max-w-2xl leading-relaxed"
        >
          {hero.valueProp}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href={hero.cta.primary.href}
            className="group relative px-8 py-3.5 bg-accent/10 border border-accent/20 rounded-lg text-accent font-medium text-sm transition-all duration-300 hover:bg-accent/20 hover:border-accent/40 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]"
          >
            <span className="relative z-10">{hero.cta.primary.label}</span>
          </a>
          <a
            href={hero.cta.secondary.href}
            className="px-8 py-3.5 border border-border rounded-lg text-muted font-medium text-sm transition-all duration-300 hover:border-border-hover hover:text-foreground"
          >
            {hero.cta.secondary.label}
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-border flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1 h-1.5 rounded-full bg-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
