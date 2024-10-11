import AboutSectionTwo from "@/components/AboutSectionTwo";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import FunFactsSection from "@/components/FunFactsSection";
import Header from "@/components/Header";
import MotoSection from "@/components/MotoSection";

export default function Home() {
  return (
    <>
      <Header />
      <BannerSection />
      <MotoSection />
      <AboutSectionTwo />
      <FunFactsSection />

      <Footer />
    </>
  );
}
