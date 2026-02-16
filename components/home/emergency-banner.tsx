"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Heart } from "lucide-react";

export function EmergencyBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Image */}
          <img
            src="/images/emergency-relief.jpg"
            alt="Gaza Emergency Relief"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-8"
              >
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-destructive text-xs font-semibold tracking-wider uppercase">
                  Urgent Appeal
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-5xl font-serif font-bold text-background leading-tight mb-6 text-balance"
              >
                Gaza Emergency Relief
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-background/70 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Millions of families are in desperate need of food, clean water,
                medical supplies, and shelter. Your contribution can save lives
                today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/get-involved#donate"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Heart className="w-5 h-5" />
                  Donate to Gaza Relief
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/programs#emergency"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-background/20 text-background rounded-full font-medium hover:bg-background/10 transition-all"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
