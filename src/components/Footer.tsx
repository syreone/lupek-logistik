import { Phone, Mail, MapPin, Box } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/lupek-logo.png";

const Footer = () => {
  const { t } = useLanguage();

  const links = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.careers, href: "#careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
      <footer className="bg-navy text-navy-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo Section */}
            <div className="space-y-4">
              {/* Option 1: With brightness/invert (white logo) */}
              <img
                  src={logo}
                  alt="Lupek Logistik"
                  className="h-12 w-auto"
                  onError={(e) => console.error("Logo failed to load:", e)}
              />

              {/* Option 2: Colored logo (uncomment to use instead) */}
              {/* <img
              src={logo}
              alt="Lupek Logistik"
              className="h-12 w-auto"
              onError={(e) => console.error("Logo failed to load:", e)}
            /> */}

              {/* Option 3: If logo doesn't load, show text instead (fallback) */}
              {/* <div className="h-12 flex items-center">
              <h3 className="text-white font-bold text-lg">LUPEK LOGISTIK</h3>
            </div> */}

              <p className="text-sm text-navy-foreground/70 leading-relaxed max-w-xs">
                {t.footer.desc}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-industrial-light">
                {t.footer.quickLinks}
              </h4>
              <ul className="space-y-2 text-sm">
                {links.map((l) => (
                    <li key={l.href}>
                      <a
                          href={l.href}
                          className="text-navy-foreground/70 hover:text-industrial-light transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4 text-industrial-light">
                {t.footer.contactTitle}
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-navy-foreground/70">
                  <Phone size={16} className="text-industrial-light" /> +389 71 218 248
                </li>
                <li className="flex items-center gap-2 text-navy-foreground/70">
                  <Mail size={16} className="text-industrial-light" /> lupek_logistics@t.mk
                </li>
                <li className="flex items-center gap-2 text-navy-foreground/70">
                  <MapPin size={16} className="text-industrial-light" /> {t.contact.address}
                </li>
                <li className="flex items-center gap-2 text-navy-foreground/70">
                  <Box size={16} className="text-industrial-light" /> {t.contact.poBox}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-navy-light/30">
          <div className="container mx-auto px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-navy-foreground/50">
            <p>Copyright © {new Date().getFullYear()} | ЛУПЕК ЛОГИСТИК. {t.footer.copyright}</p>
            <p className="mt-2 md:mt-0">{t.footer.tagline}</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;