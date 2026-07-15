import { Truck, Ship, Package, Warehouse, FileText, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Truck, Ship, Package, Warehouse, FileText, Globe2];

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 lg:py-28 bg-surface scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-industrial font-semibold text-sm uppercase tracking-widest mb-2">{t.services.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t.services.heading}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <div key={s.title} className="group bg-card rounded-xl border border-border p-7 hover:shadow-lg hover:border-industrial/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-5 group-hover:bg-industrial/20 transition-colors">
                  <Icon className="text-industrial" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <Button variant="link" className="p-0 h-auto text-industrial hover:text-industrial-light font-semibold text-sm" asChild>
                  <a href="#contact">{t.services.learnMore}</a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
