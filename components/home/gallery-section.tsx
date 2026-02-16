"use client";

import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/about-2.png",
    alt: "Life for Relief and Development aid distribution",
  },
  {
    src: "/about-21.png",
    alt: "Children receiving aid and support",
  },
  {
    src: "/about-22.png",
    alt: "Community members with Life for Relief banner",
  },
  {
    src: "/aboust-2.png",
    alt: "Life for Relief humanitarian work",
  },
  {
    src: "/sections-7.jpg",
    alt: "Life for Relief community support",
  },
  {
    src: "/sectiosn-7.jpg",
    alt: "Life for Relief development programs",
  },
];

export function GallerySection() {
  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Our Work in Action
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Real stories, real impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4"
          >
            See how your support transforms lives in communities around the world
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
