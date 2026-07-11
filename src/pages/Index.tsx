import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <LanguageProvider>
    <Navbar />
    <HeroSection />
    <TrustSection />
    <ServicesSection />
    <AboutSection />
    <WhyChooseUs />
    <CareersSection />
    <ContactSection />
    <Footer />
  </LanguageProvider>
);

export default Index;
