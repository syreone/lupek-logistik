import heroImg from "@/assets/hero-logistics.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  // Subtle background parallax: the image moves slower than the page scroll.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
      <section ref={ref} id="hero" className="relative min-h-[72vh] md:min-h-[88vh] flex items-center pt-16 overflow-hidden">
        <motion.img
            src={heroImg}
            alt="Logistics port with containers and cargo ships"
            className="absolute inset-0 w-full h-full object-cover scale-110"
            style={{ y }}
            loading="eager"
        />
        {/* Layered readability scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/40" />

        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-14 md:py-32">
          <div className="max-w-2xl space-y-4 md:space-y-6">
            <p className="text-industrial-light font-semibold tracking-widest uppercase text-xs md:text-sm text-shadow-soft">
              {t.hero.tagline}
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white text-shadow-hero">
              {t.hero.headline}
              <span className="text-industrial-light">{t.hero.headlineHighlight}</span>
            </h1>
            <p className="text-base md:text-xl text-white/85 max-w-xl leading-relaxed text-shadow-soft">
              {t.hero.sub}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <span className="relative inline-flex">
                {/* Idling soft border-glow */}
                <span
                  aria-hidden
                  className="absolute -inset-1 rounded-xl bg-gradient-to-r from-industrial via-industrial-light to-industrial opacity-70 blur-md animate-pulse"
                />
                <Button asChild size="lg" className="relative overflow-hidden bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg text-base px-8 gap-2 shadow-lg shadow-industrial/30 transition-all duration-300 hover:shadow-xl hover:shadow-industrial/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group">
                  <a href="#contact" className="relative">
                    {t.hero.ctaPrimary} <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    {/* Shimmer sweep */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </a>
                </Button>
              </span>
              <Button asChild variant="outline" size="lg" className="bg-navy/30 backdrop-blur-sm border-white/40 text-white hover:bg-white/15 hover:border-white/60 rounded-lg text-base px-8 gap-2 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] group">
                <a href="#contact"><Phone size={18} className="transition-transform duration-300 group-hover:-rotate-12" /> {t.hero.ctaSecondary}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default HeroSection;
