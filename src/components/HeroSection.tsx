import heroImg from "@/assets/hero-logistics.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-16">
        <img
            src={heroImg}
            alt="Logistics port with containers and cargo ships"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/70 via-navy/50 to-navy/30" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20 lg:py-32">
          <div className="max-w-2xl space-y-6 animate-fade-in-up">
            <p className="text-white font-semibold tracking-widest uppercase text-sm">
              {t.hero.tagline}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
              {t.hero.headline}
              <span className="text-industrial-light">{t.hero.headlineHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-foreground/80 max-w-xl leading-relaxed">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg text-base px-8 gap-2">
                <a href="#contact">{t.hero.ctaPrimary} <ArrowRight size={18} /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent border-navy-foreground/30 text-navy-foreground hover:bg-navy-light/40 rounded-lg text-base px-8 gap-2">
                <a href="#contact"><Phone size={18} /> {t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;