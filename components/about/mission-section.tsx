"use client";

import { motion } from "framer-motion";
import { Target, Eye, HandHeart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide vital humanitarian assistance and sustainable development programs to victims of war, poverty, hunger, natural disasters, and social injustice regardless of gender, race, color, religion, or cultural background.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "A world where every individual has access to the basic necessities of life and the opportunity to live with dignity, hope, and self-reliance.",
  },
  {
    icon: HandHeart,
    title: "Our Approach",
    description:
      "We focus on both immediate relief and long-term development, fostering self-reliance and dignity for those we serve through sustainable programs and community empowerment.",
  },
];

export function MissionSection() {
  return (
    <section id="mission" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Two-column intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight text-balance">
              Working for LIFE to Save Lives
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              From humble beginnings, we grew to provide our dedicated, sincere
              and transparent programs to alleviate the suffering of people
              beyond Iraq regardless of their gender, race, color, religion or
              cultural background.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We strive to sponsor long-term and sustainable human development
              programs to provide a lasting and holistic solution and not a
              temporary remedy for the destitute and displaced. Despite the grim
              realities of humanitarian work, we maintain a clear and positive
              focus by &ldquo;Working for LIFE to Save Lives&rdquo;.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are honored that we have and continue to make a positive
              difference in the lives of millions of people. We pray that all our
              efforts are accepted. Be a part of this and make a difference.
            </p>
          </motion.div>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
