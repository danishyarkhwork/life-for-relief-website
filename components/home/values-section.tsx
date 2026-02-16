"use client";

import { motion } from "framer-motion";
import { Award, Shield, Gem, Star } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Legacy",
    letter: "L",
    description:
      "Represents our dedication to creating lasting change in communities worldwide since 1994.",
  },
  {
    icon: Shield,
    title: "Integrity",
    letter: "I",
    description:
      "Guides our actions with honesty, transparency, and accountability. Your trust is important to us.",
  },
  {
    icon: Gem,
    title: "Freedom",
    letter: "F",
    description:
      "We believe in empowering individuals and communities to thrive with dignity and opportunity.",
  },
  {
    icon: Star,
    title: "Excellence",
    letter: "E",
    description:
      "We strive for delivering high-quality humanitarian aid and development programs with care.",
  },
];

export function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            What We Stand For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Our core values spell out our commitment to{" "}
            <span className="text-primary">LIFE</span>
          </motion.h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1">
                {/* Large letter watermark */}
                <div className="absolute top-4 right-4 text-8xl font-serif font-bold text-primary/[0.04] leading-none select-none group-hover:text-primary/[0.08] transition-colors duration-500">
                  {value.letter}
                </div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-primary/0 group-hover:bg-primary/30 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
