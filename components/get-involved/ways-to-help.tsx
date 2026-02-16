"use client";

import { motion } from "framer-motion";
import { Heart, Users, Megaphone, Handshake } from "lucide-react";

const waysToHelp = [
  {
    icon: Heart,
    title: "Donate",
    description:
      "Your financial contribution directly supports our programs, providing food, water, shelter, and education to those in need.",
    action: "Make a Donation",
    href: "#donate",
  },
  {
    icon: Users,
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and help us organize events, raise awareness, and support our mission on the ground.",
    action: "Get Started",
    href: "/contact",
  },
  {
    icon: Megaphone,
    title: "Spread the Word",
    description:
      "Share our mission with your network. Follow us on social media and help raise awareness about our humanitarian work.",
    action: "Follow Us",
    href: "https://www.instagram.com/liferelief.ca/",
  },
  {
    icon: Handshake,
    title: "Partner With Us",
    description:
      "Organizations, businesses, and community groups can partner with us to amplify our impact and reach more people.",
    action: "Contact Us",
    href: "/contact",
  },
];

export function WaysToHelp() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            How You Can Help
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Multiple ways to make a difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4"
          >
            Every contribution, big or small, helps us reach more people and
            create lasting change in vulnerable communities.
          </motion.p>
        </div>

        {/* Ways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {waysToHelp.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full bg-card border border-border rounded-2xl p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <way.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {way.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {way.description}
                </p>
                <a
                  href={way.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {way.action}
                  <span className="text-primary">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
