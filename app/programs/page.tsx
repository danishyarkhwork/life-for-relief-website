import type { Metadata } from "next";
import { ProgramsHero } from "@/components/programs/programs-hero";
import { ProgramsList } from "@/components/programs/programs-list";
import { ProgramsCta } from "@/components/programs/programs-cta";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Life for Relief & Development Canada's humanitarian programs including Emergency Relief, Orphan Sponsorship, Water Wells, Food Relief, and Winter Relief.",
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />
      <ProgramsList />
      <ProgramsCta />
    </>
  );
}
