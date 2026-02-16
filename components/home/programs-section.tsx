"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Flame, Droplets, Heart, Snowflake, Apple } from "lucide-react";

const programs = [
  {
    title: "Emergency Relief",
    description:
      "Rapid response to crises and natural disasters worldwide, providing immediate life-saving assistance to affected communities.",
    icon: Flame,
    image: "/images/emergency-relief.jpg",
    href: "/programs#emergency",
    tag: "Urgent",
  },
  {
    title: "Orphan Sponsorship",
    description:
      "Providing shelter, education, and hope to orphaned children in Syria, Iraq, and Afghanistan through long-term sponsorship.",
    icon: Heart,
    image: "/images/orphan-sponsorship.jpg",
    href: "/programs#orphans",
    tag: "Ongoing",
  },
  {
    title: "Water Wells",
    description:
      "Building sustainable water infrastructure to bring clean, safe drinking water to communities in desperate need.",
    icon: Droplets,
    image: "/images/water-wells.jpg",
    href: "/programs#water",
    tag: "Sustainable",
  },
  {
    title: "Food Relief",
    description:
      "Combating hunger by distributing nutritious food packages and establishing sustainable food programs.",
    icon: Apple,
    image: "/images/food-relief.jpg",
    href: "/programs#food",
    tag: "Essential",
  },
  {
    title: "Winter Relief",
    description:
      "Every December, we supply refugees with winter clothing and firewood for warmth during the harshest months.",
    icon: Snowflake,
    image: "/images/winter-relief.jpg",
    href: "/programs#winter",
    tag: "Seasonal",
  },
];

export function ProgramsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4"
            >
              Our Programs
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl lg:text-5xl font-serif font-bold leading-tight text-balance"
            >
              Comprehensive humanitarian programs
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 border border-background/20 text-background rounded-full text-sm font-medium hover:bg-background/10 transition-all"
            >
              View All Programs
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group relative ${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <Link href={program.href} className="block h-full">
                <div
                  className={`relative overflow-hidden rounded-2xl h-full ${
                    index === 0 ? "min-h-[400px] lg:min-h-[520px]" : "min-h-[280px]"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    {/* Tag */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold tracking-wide backdrop-blur-sm">
                        {program.tag}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className={`font-serif font-bold text-background mb-2 ${
                            index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                          }`}
                        >
                          {program.title}
                        </h3>
                        <p
                          className={`text-background/60 leading-relaxed ${
                            index === 0 ? "text-base max-w-lg" : "text-sm line-clamp-2"
                          }`}
                        >
                          {program.description}
                        </p>
                      </div>

                      <div className="shrink-0 w-10 h-10 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300 mt-1">
                        <ArrowUpRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
