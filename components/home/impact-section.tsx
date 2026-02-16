"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 30,
    suffix: "+",
    label: "Years of Service",
    description: "Decades of dedicated humanitarian work since 1994",
  },
  {
    number: 50,
    suffix: "+",
    label: "Countries Served",
    description: "Global reach across the most vulnerable regions",
  },
  {
    number: 1000000,
    suffix: "+",
    label: "Lives Impacted",
    description: "Individuals and families whose lives we have touched",
  },
  {
    number: 5000,
    suffix: "+",
    label: "Orphans Sponsored",
    description: "Children given hope, shelter, and education",
  },
];

export function ImpactSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Three decades of meaningful impact around the world
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative text-center p-8 rounded-2xl border border-border bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <div className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-3">
                  <AnimatedCounter
                    target={stat.number}
                    suffix={stat.suffix}
                    duration={stat.number > 100000 ? 3 : 2}
                  />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap">
            {[
              "Emergency Relief",
              "Orphan Sponsorship",
              "Water Wells",
              "Food Programs",
              "Winter Relief",
              "Medical Aid",
              "Education",
              "Shelter",
              "Emergency Relief",
              "Orphan Sponsorship",
              "Water Wells",
              "Food Programs",
              "Winter Relief",
              "Medical Aid",
              "Education",
              "Shelter",
            ].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="mx-6 text-2xl lg:text-4xl font-serif font-bold text-border select-none"
              >
                {item}
                <span className="mx-6 text-primary/30 text-lg">&#9679;</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
