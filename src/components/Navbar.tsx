import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/lupek-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (!el) return;
    const target = el.getBoundingClientRect().top + window.scrollY - 64;
    const start = window.scrollY;
    const distance = target - start;
    const duration = 600;
    let startTime: number | null = null;
    const ease = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, start + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.careers, href: "#careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-navy-light/30">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <a href="#hero" className="flex items-center gap-2" onClick={(e) => smoothScroll(e, "#hero")}>
          <img src={logo} alt="Lupek Logistik" className="h-10 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => smoothScroll(e, l.href)}
              className="text-sm font-medium text-navy-foreground/80 hover:text-industrial-light transition-colors"
            >
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "mk" ? "en" : "mk")}
            className="text-xs font-semibold border border-navy-foreground/30 rounded-md px-2.5 py-1.5 text-navy-foreground/80 hover:text-industrial-light hover:border-industrial-light transition-colors"
          >
            {lang === "mk" ? "EN" : "MK"}
          </button>

          <Button
            asChild
            size="sm"
            className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg"
          >
            <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>{t.nav.cta}</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-navy-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-navy-light/30 animate-fade-in">
          <div className="flex flex-col gap-4 p-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { smoothScroll(e, l.href); setOpen(false); }}
                className="text-navy-foreground/80 hover:text-industrial-light transition-colors font-medium"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => setLang(lang === "mk" ? "en" : "mk")}
              className="text-sm font-semibold text-navy-foreground/80 hover:text-industrial-light transition-colors text-left"
            >
              {lang === "mk" ? "English" : "Macedonian"}
            </button>
            <Button
              asChild
              className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg w-full mt-2"
            >
              <a href="#contact" onClick={(e) => { smoothScroll(e, "#contact"); setOpen(false); }}>{t.nav.cta}</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
