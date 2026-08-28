import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageFlag } from "@/components/Flags";
import { useActiveSection } from "@/hooks/use-active-section";
import logo from "@/assets/lupek-logo.png";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.why, href: "#why" },
    { label: t.nav.careers, href: "#careers" },
    { label: t.nav.contact, href: "#contact" },
  ];

  const activeSection = useActiveSection(
    navLinks.map((l) => l.href.slice(1)),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    const target = el.getBoundingClientRect().top + window.scrollY - (scrolled ? 56 : 64);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "transition-all duration-500 border-b",
          scrolled
            ? "bg-navy/95 backdrop-blur-lg shadow-lg shadow-navy/20 border-navy-light/30"
            : "bg-transparent border-transparent",
        )}
      >
        <div className={cn("container mx-auto flex items-center justify-between px-4 lg:px-8 transition-all duration-500", scrolled ? "h-14" : "h-16")}>
          <a href="#hero" className="flex items-center group" onClick={(e) => smoothScroll(e, "#hero")} aria-label="Lupek Logistik - home">
            <img
              src={logo}
              alt="Lupek Logistik"
              className={cn(
                "w-auto object-contain transition-all duration-500 group-hover:scale-105",
                scrolled ? "h-10 md:h-12" : "h-12 md:h-14",
              )}
            />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => smoothScroll(e, l.href)}
                  className={cn(
                    "group relative text-sm font-medium py-2 transition-colors duration-200",
                    isActive ? "text-white" : "text-navy-foreground/80 hover:text-white",
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-0.5 h-0.5 w-full bg-gradient-to-r from-industrial-light to-industrial origin-left transition-transform duration-300",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </a>
              );
            })}

            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "mk" ? "en" : "mk")}
              className="inline-flex items-center gap-2 text-xs font-semibold border border-navy-foreground/30 rounded-md px-2.5 py-1.5 text-navy-foreground/80 hover:text-white hover:border-industrial-light transition-all duration-200 hover:-translate-y-0.5"
              aria-label={lang === "mk" ? "Switch to English" : "Switch to Macedonian"}
              title={lang === "mk" ? "English" : "Macedonian"}
            >
              <LanguageFlag lang={lang === "mk" ? "en" : "mk"} className="w-5 h-3.5 rounded-[2px] shadow-sm ring-1 ring-white/20" />
              {lang === "mk" ? "EN" : "MK"}
            </button>

            <Button
              asChild
              size="sm"
              className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg shadow-md shadow-industrial/20 transition-all duration-300 hover:shadow-lg hover:shadow-industrial/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97]"
            >
              <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>{t.nav.cta}</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-navy-foreground p-2 -mr-2 active:scale-90 transition-transform"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile side drawer + backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
      >
        {/* Dimmed blur backdrop */}
        <div
          className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer sliding in from the right */}
        <aside
          className={cn(
            "absolute top-0 right-0 h-full w-[82%] max-w-sm bg-navy shadow-2xl shadow-navy/50 border-l border-navy-light/30 flex flex-col",
            "transition-transform duration-300 ease-out",
            open ? "translate-x-0" : "translate-x-full",
          )}
          aria-hidden={!open}
        >
          {/* Drawer header with logo + close */}
          <div className="flex items-center justify-between px-5 h-16 border-b border-navy-light/30">
            <span className="font-display font-bold text-industrial-light">
              {lang === "mk" ? "ЛУПЕК ЛОГИСТИК" : "LUPEK LOGISTIK"}
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-navy-foreground p-1 -mr-1 active:scale-90 transition-transform"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-1 p-4 overflow-y-auto">
            {navLinks.map((l) => {
              const isActive = activeSection === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => smoothScroll(e, l.href)}
                  className={cn(
                    "font-medium px-4 py-3 rounded-lg hover:bg-white/5 hover:translate-x-1 flex items-center gap-3 transition-colors duration-200",
                    isActive ? "text-white bg-white/5" : "text-navy-foreground/85 hover:text-white",
                  )}
                >
                  <span className={cn("w-1 h-4 rounded-full bg-industrial-light transition-opacity", isActive ? "opacity-100" : "opacity-0")} />
                  {l.label}
                </a>
              );
            })}
            <button
              onClick={() => setLang(lang === "mk" ? "en" : "mk")}
              className="inline-flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 text-sm font-semibold text-navy-foreground/80 hover:text-white hover:bg-white/10 transition-colors text-left"
            >
              <LanguageFlag lang={lang === "mk" ? "en" : "mk"} className="w-6 h-4 rounded-[3px] shadow-sm ring-1 ring-white/20" />
              {lang === "mk" ? "English" : "Macedonian"}
            </button>
            <Button
              asChild
              className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg w-full mt-2 shadow-md shadow-industrial/20"
            >
              <a href="#contact" onClick={(e) => smoothScroll(e, "#contact")}>{t.nav.cta}</a>
            </Button>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
