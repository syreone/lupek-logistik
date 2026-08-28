import { useState } from "react";
import { Truck, Ship, Package, Warehouse, FileText, Globe2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import TiltCard from "@/components/TiltCard";

const icons = [Truck, Ship, Package, Warehouse, FileText, Globe2];
const INITIAL = 3;

const ServicesSection = () => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);
  const { ref: headerRef, visible: headerVisible } = useReveal<HTMLDivElement>();
  const { ref: gridRef, visible: gridVisible } = useReveal<HTMLDivElement>();

  const visibleItems = expanded ? t.services.items : t.services.items.slice(0, INITIAL);

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={headerRef}
          className={cn("text-center max-w-2xl mx-auto mb-14 reveal", headerVisible && "is-visible")}
        >
          <p className="text-industrial font-semibold text-sm uppercase tracking-widest mb-2">{t.services.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t.services.heading}</h2>
        </div>

        <div
          ref={gridRef}
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger",
            gridVisible && "is-visible",
          )}
        >
          {visibleItems.map((s, i) => {
            const Icon = icons[i];
            return (
              <TiltCard
                key={s.title}
                className="[transform-style:preserve-3d]"
              >
                <div className="group h-full relative bg-card rounded-xl border border-border p-7 pt-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy/10 hover:border-industrial/40">
                  {/* top accent line on hover */}
                  <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-industrial-light to-industrial scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-industrial group-hover:shadow-lg group-hover:shadow-industrial/30">
                    <Icon className="text-industrial transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:-rotate-6" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 transition-colors duration-300 group-hover:text-industrial">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                  <Button variant="link" className="p-0 h-auto text-industrial hover:text-industrial-light font-semibold text-sm group/link" asChild>
                    <a href="#contact" className="inline-flex items-center gap-1">
                      {t.services.learnMore}
                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </a>
                  </Button>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Reveal more / collapse */}
        {t.services.items.length > INITIAL && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 rounded-lg border border-industrial/40 bg-card text-industrial font-semibold px-7 py-3 transition-all duration-300 hover:bg-industrial hover:text-white hover:shadow-lg hover:shadow-industrial/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
            >
              <Plus size={18} className={cn("transition-transform duration-300", expanded && "rotate-45")} />
              {expanded ? t.services.collapse : t.services.viewAll}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
