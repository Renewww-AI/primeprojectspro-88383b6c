import Seo, { localBusinessJsonLd } from "@/components/Seo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntakeForm from "@/components/IntakeForm";
import WhySection from "@/components/WhySection";
import ServiceGrid from "@/components/ServiceGrid";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TrustSection from "@/components/TrustSection";
import LocationsSection from "@/components/LocationsSection";
import PlanningSection from "@/components/PlanningSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="San Diego Home Remodeling & Concierge Contractor | Prime Projects"
        description="Premium home remodeling guidance for San Diego County homeowners — kitchens, baths, ADUs, roofing, landscaping, and outdoor living, planned with concierge oversight."
        path="/"
        jsonLd={localBusinessJsonLd}
      />
      <Header />
      <HeroSection />
      <IntakeForm />
      <WhySection />
      <ServiceGrid />
      <ProcessSection />
      <FeaturedProjects />
      <TrustSection />
      <LocationsSection />
      <PlanningSection />
      <FaqSection />
      <FinalCta />
      <Footer />
    </div>
  );
};

export default Index;
