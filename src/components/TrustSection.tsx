import { Shield, Globe, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();

  const items = [
    { icon: Clock, title: t.trust.exp, desc: t.trust.expDesc },
    { icon: Shield, title: t.trust.reliable, desc: t.trust.reliableDesc },
    { icon: Globe, title: t.trust.intl, desc: t.trust.intlDesc },
  ];

  return (
    <section className="bg-card border-y border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-industrial/10 flex items-center justify-center">
                <item.icon className="text-industrial" size={28} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground">{item.title}</h3>
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
