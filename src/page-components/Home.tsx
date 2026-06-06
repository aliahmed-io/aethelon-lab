/*
 * Home — Aethelon Agency
 * Design: Minimalist luxury, ivory and warm brown palette
 * Sections: Hero, Services, Features, Pricing, Process, Contact, Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import WhyAethelon from "@/components/WhyAethelon";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LabShowcase from "@/components/LabShowcase";
import BlogSection from "@/components/BlogSection";
import GetStartedCTA from "@/components/GetStartedCTA";
import FAQSection from "@/components/FAQSection";
import EngagementProcess from "@/components/EngagementProcess";
import MilestonePlan from "@/components/MilestonePlan";
import TechStackShowcase from "@/components/TechStackShowcase";
import ResourcesSection from "@/components/ResourcesSection";
import PartnerIntegrations from "@/components/PartnerIntegrations";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <PricingSection />
      <EngagementProcess />
      <MilestonePlan />
      <ProcessSection />
      <WhyAethelon />
      <TechStackShowcase />
      <PartnerIntegrations />
      <ResourcesSection />
      <LabShowcase />
      <CaseStudiesSection />
      <BlogSection />
      <GetStartedCTA />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
    </div>
  );
}
