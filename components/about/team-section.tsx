"use client";

import { motion } from "framer-motion";
import { Users, Globe, Handshake, BadgeCheck } from "lucide-react";

const principles = [
  {
    icon: Users,
    title: "Community First",
    description:
      "Every program is designed with the community's direct input and addresses their most critical needs.",
  },
  {
    icon: BadgeCheck,
    title: "Full Transparency",
    description:
      "As a CRA registered charity, we maintain complete financial transparency and accountability.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description:
      "Our network of local partners ensures effective and culturally sensitive program delivery.",
  },
  {
    icon: Handshake,
    title: "Lasting Partnerships",
    description:
      "We work with international organizations and local leaders for sustainable, long-term impact.",
  },
];

export function TeamSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Guided by principles, driven by purpose
          </motion.h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-8 bg-card border border-border rounded-2xl hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <principle.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-accent rounded-2xl p-12 lg:p-16"
        >
          <h3 className="text-2xl lg:text-3xl font-serif font-bold text-foreground mb-4">
            Ready to make a difference?
          </h3>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            Join thousands of supporters who are already changing lives around
            the world.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/get-involved"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Involved
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:bg-card transition-all"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
