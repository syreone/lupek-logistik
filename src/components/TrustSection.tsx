import { Shield, Globe, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const TrustSection = () => {
  const { t } = useLanguage();
  const { ref, visible } = useReveal<HTMLDivElement>();

  const items = [
    { icon: Clock, title: t.trust.exp, desc: t.trust.expDesc },
    { icon: Shield, title: t.trust.reliable, desc: t.trust.reliableDesc },
    { icon: Globe, title: t.trust.intl, desc: t.trust.intlDesc },
  ];

  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div
          ref={ref}
          className={cn("grid grid-cols-1 md:grid-cols-3 gap-8 reveal-stagger", visible && "is-visible")}
        >
          {items.map((item) => (
            <div key={item.title} className="group flex items-center gap-4 p-4 -m-4 rounded-xl transition-transform duration-300 hover:-translate-y-1">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-industrial/10 flex items-center justify-center transition-all duration-300 group-hover:bg-industrial group-hover:shadow-lg group-hover:shadow-industrial/30">
                <item.icon className="text-industrial transition-all duration-300 group-hover:text-white group-hover:scale-110" size={28} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground transition-colors duration-300 group-hover:text-industrial">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
