import { useState } from "react";
import { ChevronDown, MapPin, Briefcase, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Job {
  id: string;
  titleMk: string;
  titleEn: string;
  departmentMk: string;
  departmentEn: string;
  locationMk: string;
  locationEn: string;
  typeMk: string;
  typeEn: string;
  descriptionMk: string;
  descriptionEn: string;
  requirementsMk: string[];
  requirementsEn: string[];
}

const CareersSection = () => {
  const { lang } = useLanguage();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const jobs: Job[] = [
    {
      id: "1",
      titleMk: "Ц + Е Возач",
      titleEn: "C + E Driver",
      departmentMk: "Операции",
      departmentEn: "Operations",
      locationMk: "Скопје, Македонија",
      locationEn: "Skopje, Macedonia",
      typeMk: "8/9 дена работа - 4/5 дома",
      typeEn: "8/9 working days - 4/5 free",
      descriptionMk: "Барамe искусен Ц+Е возач, почетници и без искуство да не аплицираат. Најчесто се вози збирен транспорт од PL, CZ, SK, HU за MK",
      descriptionEn: "We're looking for an experienced C+E driver, beginners and those without experience should not apply. Most often, groupage transport is carried out from PL, CZ, SK, HU to MK",
      requirementsMk: [
        "2+ години ЕУ искуство",
        "Искуство со CMR",
        "Искуство со тахограф",
        "Познавање на ЕУ рути"
      ],
      requirementsEn: [
        "2+ years EU experience",
        "CMR experience",
        "Tachograph experience",
        "Knowledge of EU routes"
      ]
    }
  ];

  const t = {
    mk: {
      label: "КАРИЕРА",
      heading: "Придружи се на нашиот тим",
      subheading: "Растeме и бараме талентирани луѓе кои се страсни за логистика и транспорт",
      department: "Одделение",
      location: "Локација",
      type: "Тип",
      requirements: "Барања",
      apply: "Аплицирај сега",
      noPositions: "Нема отворени позиции во овој момент"
    },
    en: {
      label: "CAREERS",
      heading: "Join Our Team",
      subheading: "We're growing and looking for talented people passionate about logistics and transport",
      department: "Department",
      location: "Location",
      type: "Type",
      requirements: "Requirements",
      apply: "Apply Now",
      noPositions: "No open positions at this time"
    }
  };

  const currentLang = lang === "mk" ? t.mk : t.en;
  const currentJobs = jobs;

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
      <section id="careers" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-industrial font-semibold text-sm uppercase tracking-widest mb-2">
              {currentLang.label}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {currentLang.heading}
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {currentLang.subheading}
            </p>
          </div>

          {currentJobs.length > 0 ? (
              <div className="max-w-3xl mx-auto space-y-4">
                {currentJobs.map((job) => {
                  const isExpanded = expandedId === job.id;
                  const title = lang === "mk" ? job.titleMk : job.titleEn;
                  const department = lang === "mk" ? job.departmentMk : job.departmentEn;
                  const location = lang === "mk" ? job.locationMk : job.locationEn;
                  const type = lang === "mk" ? job.typeMk : job.typeEn;
                  const description = lang === "mk" ? job.descriptionMk : job.descriptionEn;
                  const requirements = lang === "mk" ? job.requirementsMk : job.requirementsEn;

                  return (
                      <div
                          key={job.id}
                          className="bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lg"
                      >
                        {/* Job Header */}
                        <button
                            onClick={() => toggleExpand(job.id)}
                            className="w-full px-7 py-6 flex items-start justify-between hover:bg-surface/50 transition-colors"
                        >
                          <div className="flex-1 text-left space-y-3">
                            <h3 className="font-display font-semibold text-lg text-foreground">{title}</h3>

                            <div className="flex flex-wrap gap-4 text-sm">
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Briefcase size={16} className="text-industrial" />
                                <span>{department}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <MapPin size={16} className="text-industrial" />
                                <span>{location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <Clock size={16} className="text-industrial" />
                                <span>{type}</span>
                              </div>
                            </div>
                          </div>

                          <ChevronDown
                              size={20}
                              className={`text-industrial flex-shrink-0 mt-1 transition-transform duration-300 ${
                                  isExpanded ? "rotate-180" : ""
                              }`}
                          />
                        </button>

                        {/* Job Details */}
                        {isExpanded && (
                            <div className="border-t border-border bg-surface/30 px-7 py-6 space-y-6 animate-fade-in">
                              {/* Description */}
                              <div>
                                <p className="text-muted-foreground leading-relaxed">{description}</p>
                              </div>

                              {/* Requirements */}
                              <div>
                                <h4 className="font-semibold text-foreground mb-3">{currentLang.requirements}</h4>
                                <ul className="space-y-2">
                                  {requirements.map((req, i) => (
                                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-industrial mt-2 flex-shrink-0" />
                                        <span>{req}</span>
                                      </li>
                                  ))}
                                </ul>
                              </div>

                              {/* CTA */}
                              <Button
                                  asChild
                                  className="bg-industrial hover:bg-industrial-light text-accent-foreground rounded-lg w-full gap-2"
                              >
                                <a href="#contact">{currentLang.apply}</a>
                              </Button>
                            </div>
                        )}
                      </div>
                  );
                })}
              </div>
          ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">{currentLang.noPositions}</p>
              </div>
          )}
        </div>
      </section>
  );
};

export default CareersSection;