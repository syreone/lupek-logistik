import { motion } from "framer-motion";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const IndexContent = () => {
  const { lang } = useLanguage();

  return (
    <>
      <Navbar />
      {/* Keyed on lang so switching languages cross-fades the content */}
      <motion.main
        key={lang}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseUs />
        <CareersSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;
