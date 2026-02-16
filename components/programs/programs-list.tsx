"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Flame,
  Heart,
  Droplets,
  Apple,
  Snowflake,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "emergency",
    icon: Flame,
    title: "Emergency Relief",
    subtitle: "Rapid Crisis Response",
    description:
      "Emergency Relief is ongoing work for us. Whenever a disaster occurs and we can lend a helping hand, you can count on us being there. Our teams are trained to deploy rapidly, providing immediate life-saving assistance including food, medical supplies, shelter, and clean water to affected communities.",
    features: [
      "Rapid deployment within 48-72 hours",
      "Food and clean water distribution",
      "Emergency medical supplies",
      "Temporary shelter and blankets",
      "Coordination with local authorities",
    ],
    image: "/images/emergency-relief.jpg",
    color: "destructive",
  },
  {
    id: "orphans",
    icon: Heart,
    title: "Orphan Sponsorship",
    subtitle: "Giving Children Hope",
    description:
      "Our orphan sponsorship program provides shelter, education, healthcare, and emotional support to orphaned children in Syria, Iraq, and Afghanistan. Through long-term sponsorship, we ensure these children have the opportunity to grow, learn, and build a brighter future.",
    features: [
      "Syria, Iraq & Afghanistan coverage",
      "Education and school supplies",
      "Healthcare and nutrition",
      "Emotional support and counseling",
      "Regular progress reports to sponsors",
    ],
    image: "/images/orphan-sponsorship.jpg",
    color: "primary",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Water Wells",
    subtitle: "Clean Water for All",
    description:
      "Access to clean water is a fundamental human right. Our water well program builds sustainable water infrastructure in communities facing severe water scarcity. Each well serves hundreds of families and is built to last, providing a reliable source of clean, safe drinking water.",
    features: [
      "Deep well construction",
      "Water purification systems",
      "Community maintenance training",
      "Serves 500+ families per well",
      "Regular water quality testing",
    ],
    image: "/images/water-wells.jpg",
    color: "primary",
  },
  {
    id: "food",
    icon: Apple,
    title: "Food Relief",
    subtitle: "Combating Hunger",
    description:
      "Our food relief programs combat hunger by distributing nutritious food packages and establishing sustainable food programs in regions affected by conflict, poverty, and natural disasters. We work to ensure no family goes hungry.",
    features: [
      "Monthly food package distribution",
      "Ramadan food drives",
      "Qurbani/Udhiya meat distribution",
      "Sustainable agriculture support",
      "Nutritional education programs",
    ],
    image: "/images/food-relief.jpg",
    color: "primary",
  },
  {
    id: "winter",
    icon: Snowflake,
    title: "Winter Relief",
    subtitle: "Warmth When It Matters",
    description:
      "Winter is a difficult time for refugees living in tents. Every December, we conduct a Winter Relief effort to support people in camps by supplying them with winter clothing, blankets, heaters, and firewood for warmth and cooking needs.",
    features: [
      "Winter clothing for families",
      "Blankets and sleeping bags",
      "Firewood and heating fuel",
      "Insulation for temporary shelters",
      "Hot meal distribution",
    ],
    image: "/images/winter-relief.jpg",
    color: "primary",
  },
];

export function ProgramsList() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-24">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="scroll-mt-24"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <div className="relative overflow-hidden rounded-2xl group">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[300px] lg:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />

                    {/* Floating icon */}
                    <div className="absolute top-6 left-6 w-14 h-14 rounded-xl bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
                    {program.subtitle}
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-6">
                    {program.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {program.description}
                  </p>

                  {/* Features */}
                  <ul className="flex flex-col gap-3 mb-8">
                    {program.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/get-involved#donate"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold text-sm hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
                  >
                    Donate to This Program
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Divider */}
              {index < programs.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
