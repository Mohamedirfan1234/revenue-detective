import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import DemoSection from "@/components/DemoSection";
import DashboardSection from "@/components/DashboardSection";
import ChartsSection from "@/components/ChartsSection";
import CaseStudySection from "@/components/CaseStudySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection onAnalyze={() => setShowDashboard(true)} />
      <DashboardSection isVisible={showDashboard} />
      {showDashboard && <ChartsSection />}
      <CaseStudySection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
