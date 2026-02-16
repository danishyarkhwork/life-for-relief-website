"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Life for Relief has been a lifeline for our community. Their dedication to providing clean water has transformed the lives of thousands of families.",
    author: "Community Leader",
    location: "Iraq",
  },
  {
    quote:
      "The orphan sponsorship program gave my children a second chance at life. They now have access to education and a brighter future.",
    author: "Beneficiary",
    location: "Syria",
  },
  {
    quote:
      "During the winter months, their relief efforts kept our families warm. We are forever grateful for their compassion and support.",
    author: "Refugee Camp Coordinator",
    location: "Lebanon",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Stories of Hope
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Voices from the communities we serve
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <Quote className="w-10 h-10 text-primary/20 mb-6" />

                <blockquote className="text-foreground leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-border">
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
