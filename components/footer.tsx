"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MapPin, Phone, Mail, Instagram, Youtube, ArrowUpRight } from "lucide-react";

const footerLinks = {
  programs: [
    { label: "Emergency Relief", href: "/programs#emergency" },
    { label: "Orphan Sponsorship", href: "/programs#orphans" },
    { label: "Water Wells", href: "/programs#water" },
    { label: "Food Relief", href: "/programs#food" },
    { label: "Winter Relief", href: "/programs#winter" },
  ],
  organization: [
    { label: "About Us", href: "/about" },
    { label: "Our Mission", href: "/about#mission" },
    { label: "Get Involved", href: "/get-involved" },
    { label: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background overflow-hidden">
      {/* Top CTA Banner */}
      <div className="relative border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-secondary font-medium tracking-widest text-xs uppercase mb-4"
              >
                Make a Difference
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl lg:text-5xl font-serif font-bold leading-tight text-balance"
              >
                Every contribution creates lasting change
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-semibold hover:bg-secondary/90 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/25 hover:-translate-y-0.5 text-sm"
              >
                <Heart className="w-4 h-4" />
                Donate Today
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Life for Relief & Development Canada"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Since 1994, providing vital relief and sustainable development to
              the world&apos;s most vulnerable communities.
            </p>
            <p className="text-background/40 text-xs">
              Registered Canadian Charity
              <br />
              Tax # 14091 3773 RR 0001
            </p>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 text-background/80">
              Programs
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.programs.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/50 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 text-background/80">
              Organization
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.organization.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/50 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-6 text-background/80">
              Contact
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-secondary" />
                <span>
                  PO Box 76096, RPO Southgate,
                  <br />
                  Edmonton, AB, T6H 5Y7
                </span>
              </li>
              <li>
                <a
                  href="tel:+17804307308"
                  className="flex items-center gap-3 text-sm text-background/50 hover:text-secondary transition-colors"
                >
                  <Phone className="w-4 h-4 shrink-0 text-secondary" />
                  +1-780-430-7308
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@liferelief.ca"
                  className="flex items-center gap-3 text-sm text-background/50 hover:text-secondary transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-secondary" />
                  info@liferelief.ca
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/liferelief.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@LifeReliefCanada"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/40">
              &copy; {new Date().getFullYear()} Life for Relief & Development
              Canada. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="text-xs text-background/40 hover:text-background/60 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-xs text-background/40 hover:text-background/60 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
