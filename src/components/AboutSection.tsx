import { CheckCircle2, FileText, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutUs = () => {
  const { t } = useLanguage();

  const bulletPoints = [
    t.about.values[0],
    t.about.values[1],
    t.about.values[2],
    t.about.values[3],
  ];

  const certifications = [
    {
      title: t.certifications.title1,
      subtitle: t.certifications.subtitle1,
      file: "/docs/Licenca_Lupek_2024.pdf",
    },
    {
      title: t.certifications.title2,
      subtitle: t.certifications.subtitle2,
      file: "/docs/Licenca_za_medunaroden_2025_2030.pdf",
    },
    {
      title: t.certifications.title3,
      subtitle: t.certifications.subtitle3,
      file: "/docs/Licenca_za_vnatresen_soobrakaj.pdf",
    },
  ];

  return (
      <section className="bg-background py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          {/* Main About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <p className="text-label font-semibold tracking-widest uppercase text-sm mb-3">
                {t.about.label}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                {t.about.heading}
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t.about.text}
              </p>
              <ul className="space-y-4">
                {bulletPoints.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-label flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="bg-quote rounded-2xl p-10 max-w-md">
                <p className="text-quote-foreground italic text-lg leading-relaxed mb-6">
                  "{t.about.quote}"
                </p>
                <p className="text-label font-bold">— LUPEK LOGISTIK</p>
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <p className="text-label font-semibold tracking-widest uppercase text-sm mb-3">
              {t.certifications.label}
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-8">
              {t.certifications.heading}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                  <a
                      key={cert.file}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg hover:border-label transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center mb-4 group-hover:bg-label/10 transition-colors">
                      <FileText className="w-7 h-7 text-label" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{cert.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{cert.subtitle}</p>
                    <span className="inline-flex items-center gap-2 text-label font-medium text-sm group-hover:underline">
                  <Download className="w-4 h-4" />
                      {t.certifications.viewPdf}
                </span>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default AboutUs;
