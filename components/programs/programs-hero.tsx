"use client";

import { motion } from "framer-motion";

export function ProgramsHero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/programs-hero.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/80 via-foreground/70 to-foreground/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Our Programs
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-background leading-[1.1] mb-6 text-balance"
          >
            Comprehensive Humanitarian Aid
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-background/70 leading-relaxed max-w-xl"
          >
            From emergency response to sustainable development, our programs
            address the most critical needs of vulnerable communities worldwide.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
