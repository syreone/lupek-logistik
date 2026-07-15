import { Target, Users, TrendingUp, Award, Headphones, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Target, Users, TrendingUp, Award, Headphones, Zap];

const WhyChooseUs = () => {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-20 lg:py-28 bg-surface-alt scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-industrial font-semibold text-sm uppercase tracking-widest mb-2">{t.why.label}</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">{t.why.heading}</h2>
          <p className="text-muted-foreground mt-4">{t.why.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.why.items.map((f, i) => {
            const Icon = icons[i];
            return (
              <div key={f.title} className="bg-card rounded-xl border border-border p-7 hover:shadow-md transition-shadow duration-300">
                <div className="w-11 h-11 rounded-lg bg-industrial/10 flex items-center justify-center mb-4">
                  <Icon className="text-industrial" size={22} />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
