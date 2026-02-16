"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Flame, Droplets, Apple, Snowflake, ArrowRight, Check } from "lucide-react";

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const causes = [
  { id: "general", label: "Where Most Needed", icon: Heart },
  { id: "emergency", label: "Emergency Relief", icon: Flame },
  { id: "orphans", label: "Orphan Sponsorship", icon: Heart },
  { id: "water", label: "Water Wells", icon: Droplets },
  { id: "food", label: "Food Relief", icon: Apple },
  { id: "winter", label: "Winter Relief", icon: Snowflake },
];

export function DonateSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCause, setSelectedCause] = useState("general");
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time");

  const activeAmount = selectedAmount || Number(customAmount) || 0;

  return (
    <section id="donate" className="relative py-24 lg:py-32 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-4">
                Make a Donation
              </p>
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground leading-tight mb-6 text-balance">
                Your support changes lives
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                As a registered Canadian charity (Tax # 14091 3773 RR 0001),
                all donations are tax-deductible. You will receive an official
                tax receipt for your generous contribution.
              </p>

              {/* Impact list */}
              <div className="flex flex-col gap-4">
                {[
                  { amount: "$25", impact: "Feeds a family for a week" },
                  { amount: "$50", impact: "Provides clean water for a month" },
                  { amount: "$100", impact: "Sponsors an orphan for a month" },
                  { amount: "$500", impact: "Builds a water well contribution" },
                ].map((item) => (
                  <div
                    key={item.amount}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <span className="text-primary font-bold text-sm">
                        {item.amount}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{item.impact}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
              {/* Donation Type Toggle */}
              <div className="flex bg-muted rounded-xl p-1 mb-8">
                <button
                  onClick={() => setDonationType("one-time")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    donationType === "one-time"
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  One-Time
                </button>
                <button
                  onClick={() => setDonationType("monthly")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    donationType === "monthly"
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Select Amount (CAD)
                </label>
                <div className="grid grid-cols-3 gap-3 mb-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                        selectedAmount === amount
                          ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-muted text-foreground hover:bg-accent"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                />
              </div>

              {/* Cause Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Choose a Cause
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {causes.map((cause) => (
                    <button
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-all text-left ${
                        selectedCause === cause.id
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "bg-muted text-foreground hover:bg-accent border border-transparent"
                      }`}
                    >
                      {selectedCause === cause.id ? (
                        <Check className="w-4 h-4 shrink-0" />
                      ) : (
                        <cause.icon className="w-4 h-4 shrink-0 text-muted-foreground" />
                      )}
                      <span className="font-medium">{cause.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Summary + Donate Button */}
              <div className="bg-accent rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Donation Amount
                  </span>
                  <span className="text-lg font-bold text-foreground">
                    ${activeAmount.toLocaleString()} CAD
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Frequency
                  </span>
                  <span className="text-sm font-medium text-foreground capitalize">
                    {donationType}
                  </span>
                </div>
              </div>

              <button className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-base hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                <Heart className="w-5 h-5" />
                Donate ${activeAmount.toLocaleString()} CAD
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                Secure donation. Tax-deductible receipt will be emailed to you.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
