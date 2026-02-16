"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";

export function ProgramsCta() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Heart className="w-12 h-12 mx-auto mb-6 text-secondary" />
          <h2 className="text-3xl lg:text-5xl font-serif font-bold leading-tight mb-6 text-balance">
            Your generosity can transform lives
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
            100% of your Zakat and Sadaqah goes directly to those in need. Every
            dollar makes a difference in the lives of vulnerable communities.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/get-involved#donate"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              Donate Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-primary-foreground/20 rounded-full font-medium hover:bg-primary-foreground/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
