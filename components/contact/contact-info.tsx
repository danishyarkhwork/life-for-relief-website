"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["PO Box 76096, RPO Southgate", "Edmonton, AB, T6H 5Y7", "Canada"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+1-780-430-7308"],
    href: "tel:+17804307308",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@liferelief.ca"],
    href: "mailto:info@liferelief.ca",
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon - Fri: 9:00 AM - 5:00 PM MST", "Sat - Sun: Closed"],
  },
];

export function ContactInfo() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Find Us
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold leading-tight text-balance"
          >
            Other ways to reach us
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group"
            >
              <div className="h-full p-6 bg-background/5 border border-background/10 rounded-2xl hover:bg-background/10 hover:border-background/20 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="font-semibold text-background mb-3">
                  {item.title}
                </h3>
                <div className="flex flex-col gap-1">
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="text-sm text-background/60 hover:text-secondary transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-sm text-background/60">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border border-background/10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.8762!2d-113.5!3d53.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDI3JzAwLjAiTiAxMTPCsDMwJzAwLjAiVw!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Life for Relief & Development Canada office location"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
