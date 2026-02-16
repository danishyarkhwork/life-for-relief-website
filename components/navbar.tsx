"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart, ChevronDown, Phone, Mail, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/programs",
    label: "Programs",
    children: [
      {
        href: "/programs#emergency",
        label: "Emergency Relief",
        desc: "Rapid crisis response worldwide",
      },
      {
        href: "/programs#orphans",
        label: "Orphan Sponsorship",
        desc: "Hope for vulnerable children",
      },
      {
        href: "/programs#water",
        label: "Water Wells",
        desc: "Clean water infrastructure",
      },
      {
        href: "/programs#food",
        label: "Food Relief",
        desc: "Combating hunger globally",
      },
      {
        href: "/programs#winter",
        label: "Winter Relief",
        desc: "Warmth for refugees",
      },
    ],
  },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div
        className={`hidden lg:block bg-foreground text-background transition-all duration-500 ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center gap-6">
              <a
                href="tel:+17804307308"
                className="flex items-center gap-2 text-xs text-background/70 hover:text-secondary transition-colors"
              >
                <Phone className="w-3 h-3" />
                +1-780-430-7308
              </a>
              <a
                href="mailto:info@liferelief.ca"
                className="flex items-center gap-2 text-xs text-background/70 hover:text-secondary transition-colors"
              >
                <Mail className="w-3 h-3" />
                info@liferelief.ca
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-background/50">
                Registered Charity # 14091 3773 RR 0001
              </span>
              <span className="text-background/20">|</span>
              <a
                href="https://www.instagram.com/liferelief.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-background/50 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/@LifeReliefCanada"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-background/50 hover:text-secondary transition-colors"
                aria-label="YouTube"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border"
            : "bg-background border-b border-border/50"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center justify-between h-[4.5rem] lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <img
                src="https://liferelief.ca/wp-content/uploads/2024/07/life-for-relief-logo-01.svg"
                alt="Life for Relief & Development Canada"
                className="h-11 lg:h-12 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() =>
                    link.children && setActiveDropdown(link.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`relative px-4 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 flex items-center gap-1 rounded-lg ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/70 hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </Link>

                  {/* Mega Dropdown */}
                  <AnimatePresence>
                    {link.children && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-background rounded-2xl border border-border shadow-2xl shadow-foreground/10 p-3 overflow-hidden"
                      >
                        <div className="flex flex-col gap-0.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group/item flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-accent transition-all duration-200"
                            >
                              <span className="text-sm font-medium text-foreground group-hover/item:text-primary transition-colors">
                                {child.label}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {child.desc}
                              </span>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-2 pt-2 border-t border-border">
                          <Link
                            href="/programs"
                            className="flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                          >
                            View All Programs
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-involved#donate"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4" />
                <span>Donate Now</span>
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent transition-colors"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="wait">
                  {isMobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ opacity: 0, rotate: -90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="open"
                      initial={{ opacity: 0, rotate: 90 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -90 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-background border-l border-border shadow-2xl flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between px-6 h-[4.5rem] border-b border-border shrink-0">
                <Link
                  href="/"
                  onClick={() => setIsMobileOpen(false)}
                  className="block"
                >
                  <img
                    src="https://liferelief.ca/wp-content/uploads/2024/07/life-for-relief-logo-01.svg"
                    alt="Life for Relief"
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMobileOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 + 0.1 }}
                    >
                      {link.children ? (
                        <div>
                          <button
                            onClick={() =>
                              setMobileExpanded(
                                mobileExpanded === link.label
                                  ? null
                                  : link.label
                              )
                            }
                            className={`w-full flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                              pathname === link.href
                                ? "text-primary bg-accent"
                                : "text-foreground hover:bg-accent"
                            }`}
                          >
                            {link.label}
                            <ChevronDown
                              className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                                mobileExpanded === link.label
                                  ? "rotate-180"
                                  : ""
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {mobileExpanded === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="ml-3 pl-4 border-l-2 border-primary/20 flex flex-col gap-0.5 py-1">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="block px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileOpen(false)}
                          className={`block px-4 py-3.5 text-base font-medium rounded-xl transition-colors ${
                            pathname === link.href
                              ? "text-primary bg-accent"
                              : "text-foreground hover:bg-accent"
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mobile Footer */}
              <div className="shrink-0 p-4 border-t border-border">
                <Link
                  href="/get-involved#donate"
                  onClick={() => setIsMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-primary-foreground rounded-xl text-base font-semibold hover:bg-primary/90 transition-all"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
                <div className="flex items-center justify-center gap-4 mt-3">
                  <a
                    href="tel:+17804307308"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1-780-430-7308
                  </a>
                  <span className="text-border">|</span>
                  <a
                    href="mailto:info@liferelief.ca"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@liferelief.ca
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
