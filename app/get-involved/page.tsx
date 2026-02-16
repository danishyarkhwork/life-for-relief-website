import type { Metadata } from "next";
import { GetInvolvedHero } from "@/components/get-involved/get-involved-hero";
import { DonateSection } from "@/components/get-involved/donate-section";
import { WaysToHelp } from "@/components/get-involved/ways-to-help";
import { FaqSection } from "@/components/get-involved/faq-section";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join Life for Relief & Development Canada. Donate, volunteer, fundraise, or spread the word to help vulnerable communities worldwide.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <GetInvolvedHero />
      <DonateSection />
      <WaysToHelp />
      <FaqSection />
    </>
  );
}
