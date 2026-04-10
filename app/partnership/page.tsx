import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyUs from "./components/WhyUs";
import FinalCtaSection from "./components/FinalCTASection";
import PathsSection from "./components/PathsSection";
export default function PartnershipPage() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <HowItWorksSection />
      <WhyUs />
      <PathsSection/>
      <FinalCtaSection/>
    </main>
  );
}