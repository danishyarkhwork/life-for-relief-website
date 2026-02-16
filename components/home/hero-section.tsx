"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-auto min-h-screen sm:h-screen flex items-start sm:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-foreground/30" />
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--background)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--background)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12 pt-8 pb-8 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40">
        <div className="max-w-4xl xl:max-w-5xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-primary text-xs font-semibold tracking-wider uppercase">
              Since 1994 &mdash; Serving Humanity
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl font-serif font-bold leading-[1.1] text-background text-balance mb-4 sm:mb-6"
          >
            Working for{" "}
            <span className="relative">
              <span className="text-primary">Life</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/40 rounded-full origin-left"
              />
            </span>{" "}
            to Save Lives
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base sm:text-lg lg:text-lg xl:text-lg text-background/70 leading-relaxed max-w-2xl mb-6 sm:mb-10"
          >
            Life for Relief & Development Canada provides vital humanitarian
            assistance and sustainable development to the world&apos;s most
            vulnerable communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6"
          >
            <Link
              href="/get-involved#donate"
              className="group flex items-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-8 py-2.5 sm:py-3.5 lg:py-3.5 bg-secondary text-secondary-foreground rounded-full text-sm sm:text-base lg:text-base font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/30 hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-4 lg:h-4" />
              Donate Now
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-3.5 lg:h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/about"
              className="group flex items-center gap-2 sm:gap-3 px-5 sm:px-8 lg:px-8 py-2.5 sm:py-3.5 lg:py-3.5 bg-background/10 text-background border border-background/20 backdrop-blur-sm rounded-full text-sm sm:text-base lg:text-base font-semibold transition-all duration-300 hover:bg-background/20"
            >
              <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-3.5 lg:h-3.5" />
              Our Story
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-background/10"
          >
            {[
              { value: "30+", label: "Years of Service" },
              { value: "50+", label: "Countries Reached" },
              { value: "1M+", label: "Lives Impacted" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl lg:text-3xl xl:text-3xl font-serif font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-background/50 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-background/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
