import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { MissionSection } from "@/components/about/mission-section";
import { TimelineSection } from "@/components/about/timeline-section";
import { TeamSection } from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Life for Relief & Development Canada - since 1994, committed to providing vital relief and sustainable development worldwide.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <TimelineSection />
      <TeamSection />
    </>
  );
}
