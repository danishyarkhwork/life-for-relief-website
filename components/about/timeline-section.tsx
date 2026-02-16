"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "1994",
    title: "Founded in Edmonton",
    description:
      "A group of concerned Canadian Muslim professionals established Life for Relief & Development Canada to support people suffering in Iraq.",
  },
  {
    year: "2000",
    title: "Expanded Global Reach",
    description:
      "Extended programs beyond Iraq to serve vulnerable communities across the Middle East, Africa, and Asia.",
  },
  {
    year: "2005",
    title: "Orphan Sponsorship Launch",
    description:
      "Launched dedicated orphan sponsorship programs in Syria, Iraq, and Afghanistan, providing long-term care and education.",
  },
  {
    year: "2010",
    title: "Water Well Initiative",
    description:
      "Began building sustainable water infrastructure in regions facing severe water scarcity and contamination.",
  },
  {
    year: "2015",
    title: "Syrian Refugee Response",
    description:
      "Mobilized massive relief operations to support millions of Syrian refugees with food, shelter, and medical care.",
  },
  {
    year: "2020",
    title: "Pandemic Relief",
    description:
      "Adapted programs to address COVID-19 challenges, distributing medical supplies and PPE to vulnerable communities.",
  },
  {
    year: "2024",
    title: "Gaza Emergency Response",
    description:
      "Launched urgent relief operations for Gaza, providing critical humanitarian aid to affected families and children.",
  },
];

export function TimelineSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Our Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold leading-tight text-balance"
          >
            Three decades of compassion and service
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-background/10 lg:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.1 }}
                className={`relative flex items-start gap-8 lg:gap-16 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse lg:text-right"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-foreground -translate-x-1/2 mt-1 z-10" />

                {/* Content */}
                <div
                  className={`ml-16 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <span className="text-secondary font-serif font-bold text-2xl">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-background mt-2 mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-background/60 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
