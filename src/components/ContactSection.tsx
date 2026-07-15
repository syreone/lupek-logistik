import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, Box } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast({ title: t.contact.toastTitle, description: t.contact.toastDesc });
      setSending(false);
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  // Contact info with clickable actions
  const contactItems = [
    {
      icon: Phone,
      label: t.contact.phoneLbl,
      value: "+389 71 218 248",
      href: "tel:+38971218248",
    },
    {
      icon: Mail,
      label: t.contact.emailLbl,
      value: "lupek_logistics@t.mk",
      href: "mailto:lupek_logistics@t.mk",
    },
    {
      icon: MapPin,
      label: t.contact.addressLbl,
      value: t.contact.address,
      href: "https://www.google.com/maps/search/Nikola+Parapunov+66+1000+Skopje+Macedonia",
    },
    {
      icon: Box,
      label: t.contact.poBoxLbl,
      value: t.contact.poBox,
      href: "https://www.google.com/maps/search/PO+Box+Skopje+Macedonia",
    },
  ];

  return (

      <section id="contact" className="py-20 lg:py-28 bg-background scroll-mt-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-industrial font-semibold text-sm uppercase tracking-widest mb-2">
              {t.contact.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t.contact.heading}
            </h2>
          </div>

          <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="hidden space-y-5 bg-card rounded-xl border border-border p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input placeholder={t.contact.name} required className="rounded-lg" />
                <Input placeholder={t.contact.email} type="email" required className="rounded-lg" />
              </div>
              <Input placeholder={t.contact.phone} type="tel" className="rounded-lg" />
              <Input placeholder={t.contact.subject} className="rounded-lg" />
              <Textarea placeholder={t.contact.message} rows={5} required className="rounded-lg resize-none" />
              <Button
                  type="submit"
                  disabled={sending}
                  className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg w-full gap-2"
              >
                <Send size={18} />
                {sending ? t.contact.sending : t.contact.send}
              </Button>
            </form>

            {/* Contact Info + Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="space-y-5">
                {contactItems.map((c) => (
                    <a
                        key={c.label}
                        href={c.href}
                        className="flex items-start gap-4 group cursor-pointer transition-all duration-200 hover:opacity-80"
                    >
                      <div className="w-11 h-11 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0 group-hover:bg-industrial/20 transition-colors duration-200">
                        <c.icon className="text-industrial" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{c.label}</p>
                        <p className="font-medium text-foreground group-hover:text-industrial transition-colors duration-200">
                          {c.value}
                        </p>
                      </div>
                    </a>
                ))}
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden border border-border h-64 lg:h-80">
                <iframe
                    title="Lupek Logistik location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.6444732420036!2d21.38094757602952!3d42.00790505727712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354157d2a1e0469%3A0x5f05602293df7b05!2zTHVwZWsgTG9naXN0aWMgLyDQm9GD0L_QtdC6INCb0L7Qs9C40YHRgtC40LrQsA!5e0!3m2!1sen!2smk!4v1772557224564!5m2!1sen!2smk"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
