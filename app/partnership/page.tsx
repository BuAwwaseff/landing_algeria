import HeroSection from "./components/HeroSection";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyUs from "./components/WhyUs";
import FinalCtaSection from "./components/FinalCTASection";
import PathsSection from "./components/PathsSection";
import BenefitsSection from "./components/BenefitsSection";
export default function PartnershipPage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BenefitsSection />
      <HowItWorksSection />
      <WhyUs />
      <PathsSection/>
      <FinalCtaSection/>
    </div>
  );
}
