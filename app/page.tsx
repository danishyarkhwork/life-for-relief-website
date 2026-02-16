import { HeroSection } from "@/components/home/hero-section";
import { ValuesSection } from "@/components/home/values-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { ImpactSection } from "@/components/home/impact-section";
import { EmergencyBanner } from "@/components/home/emergency-banner";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { GallerySection } from "@/components/home/gallery-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <ProgramsSection />
      <ImpactSection />
      <GallerySection />
      <EmergencyBanner />
      <TestimonialsSection />
    </>
  );
}
