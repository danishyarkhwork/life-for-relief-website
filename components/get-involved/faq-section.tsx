"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I make a donation?",
    answer:
      "You can make a donation online through our secure donation form, by phone at +1-780-430-7308, or by mail. All donations are tax-deductible and you will receive an official tax receipt.",
  },
  {
    question: "Is my donation tax-deductible?",
    answer:
      "Yes! Life for Relief & Development Canada is a registered Canadian charity (Tax # 14091 3773 RR 0001). All donations are tax-deductible and you will receive an official tax receipt via email.",
  },
  {
    question: "How much of my donation goes to programs?",
    answer:
      "100% of your Zakat and Sadaqah goes directly to those in need. We maintain full transparency and accountability, ensuring your contributions reach the most vulnerable communities.",
  },
  {
    question: "Can I sponsor a specific child or family?",
    answer:
      "Yes! Our orphan sponsorship program allows you to sponsor a child in Syria, Iraq, or Afghanistan. You'll receive regular updates about the child's progress and well-being.",
  },
  {
    question: "How can I volunteer?",
    answer:
      "We welcome volunteers! You can help with events, fundraising, awareness campaigns, and more. Contact us at info@liferelief.ca or call +1-780-430-7308 to learn about current volunteer opportunities.",
  },
  {
    question: "What countries do you serve?",
    answer:
      "We serve vulnerable communities in over 50 countries, with a focus on the Middle East, Africa, and Asia. Our programs include emergency relief, orphan sponsorship, water wells, food distribution, and winter relief.",
  },
  {
    question: "How do I know my donation is being used effectively?",
    answer:
      "As a CRA registered charity, we maintain complete financial transparency. We provide regular reports on our programs and impact. You can also contact us anytime to learn more about how your donation is being used.",
  },
  {
    question: "Can I set up a monthly donation?",
    answer:
      "Yes! Monthly donations provide consistent support for our programs. You can set up a recurring monthly donation through our donation form, which helps us plan and sustain long-term programs.",
  },
];

export function FaqSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-card overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-semibold tracking-widest text-xs uppercase mb-4"
          >
            Frequently Asked Questions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-serif font-bold text-foreground leading-tight text-balance"
          >
            Common questions about getting involved
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
