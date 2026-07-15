import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "mk" | "en";

interface Translations {
  nav: {
    careers: string;
    home: string; about: string; services: string; why: string; contact: string; cta: string };
  hero: { tagline: string; headline: string; headlineHighlight: string; sub: string; ctaPrimary: string; ctaSecondary: string };
  trust: { exp: string; expDesc: string; reliable: string; reliableDesc: string; intl: string; intlDesc: string };
  services: { label: string; heading: string; learnMore: string; items: { title: string; desc: string }[] };
  about: { label: string; heading: string; text: string; values: string[]; quote: string; quoteAuthor: string };
  why: { label: string; heading: string; sub: string; items: { title: string; desc: string }[] };
  contact: { label: string; heading: string; name: string; email: string; phone: string; subject: string; message: string; send: string; sending: string; toastTitle: string; toastDesc: string; phoneLbl: string; emailLbl: string; addressLbl: string; poBoxLbl: string; poBox:string; address: string };
  certifications: { label: string; heading: string; viewPdf: string; title1: string; subtitle1: string; title2: string; subtitle2: string; title3: string; subtitle3: string };
  footer: { desc: string; quickLinks: string; contactTitle: string; copyright: string; tagline: string };
}

const mk: Translations = {
  nav: {
    home: "Дома", about: "За нас", services: "Услуги", why: "Зошто ние", contact: "Контакт", cta: "Побарајте понуда",
    careers: "Кариера"
  },
  hero: {
    tagline: "Транспорт • Логистика • Шпедиција",
    headline: "ЛУПЕК ЛОГИСТИК",
    headlineHighlight: "",
    sub: "Професионални транспортни и логистички услуги од 2005 година. Вашиот доверлив партнер за меѓународен и домашен транспорт.",
    ctaPrimary: "Побарајте понуда",
    ctaSecondary: "Контактирајте нè",
  },
  trust: { exp: "20+ години искуство", expDesc: "Во транспортниот бизнис од 2005 година", reliable: "Доверлив транспорт", reliableDesc: "Професионален и сигурен пристап", intl: "Меѓународна логистика", intlDesc: "Широка мрежа низ целиот европски континент" },
  services: {
    label: "Наши услуги", heading: "Комплетни логистички решенија", learnMore: "Дознајте повеќе →",
    items: [
      { title: "Друмски транспорт", desc: "Комплетен и парцијален товар (FTL/LTL) низ целиот европски континент со модерна флота." },
      { title: "Поморски транспорт", desc: "Организација на поморски превоз на стоки со контејнери до и од сите светски пристаништа." },
      { title: "Царинско посредување", desc: "Целосна царинска обработка, увозни и извозни процедури за непречен проток на стоки." },
      { title: "Складирање", desc: "Модерни складишни капацитети за краткорочно и долгорочно складирање на ваши производи." },
      { title: "Шпедиција", desc: "Целосна шпедитерска услуга, организација и координација на целиот логистички процес." },
      { title: "Меѓународен транспорт", desc: "Проширување на транспортните услуги во земји низ Европа и пошироко." },
    ],
  },
  about: {
    label: "За нас", heading: "Доверлив партнер во транспортот од 2005",
    text: "ЛУПЕК ЛОГИСТИК е формирана во 2005 година. Веќе во следната година фирмата завзема угледно место во транспортниот бизнис во Македонија. Денес ЛУПЕК ЛОГИСТИК зафаќа значаен пазарен удел помеѓу транспортните компании во Македонија. Тоа е доказ дека само со професионален однос кон работата и со спроведување на прогресивни идеи може да се очекуваат позитивни резултати.",
    values: ["Инвестирање во квалификации и професионализам", "Инвестиции во нови технологии и иновации", "Проширување на транспортните услуги во нови земји", "Зголемување на пазарниот удел и задоволни клиенти"],
    quote: `Многу не радува кога ќе не контактира нов коминтент но уште повеќе сме задоволни кога тој ќе остане да соработува со нас, што е потврда и за неговото задоволство од услугите кои ги добил во нашата фирма.`,
    quoteAuthor: "— ЛУПЕК ЛОГИСТИК",
  },
  why: {
    label: "Зошто ние", heading: "Зошто ЛУПЕК ЛОГИСТИК?", sub: "ЛУПЕК ЛОГИСТИК е млада фирма која сака да се развива и расте. Обратете ни се со полна доверба.",
    items: [
      { title: "Амбициозност", desc: "Доволно сме амбициозни да ги оствариме нашите цели и да го прошириме знаењето." },
      { title: "Посветеност на клиентот", desc: "Задоволни сме со работата само кога ќе го исполниме очекувањето на секој клиент." },
      { title: "Континуиран развој", desc: "Постојано ги анализираме резултатите и составуваме нови развојни планови." },
      { title: "Професионализам", desc: "Максимално професионален пристап кон секоја задача и секој клиент." },
      { title: "24/7 Поддршка", desc: "Секогаш достапни за вашите потреби со брза и ефикасна комуникација." },
      { title: "Ефикасност", desc: "Брзи и прецизни решенија за вашите логистички предизвици." },
    ],
  },
  contact: {
    label: "Контакт", heading: "Контактирајте нè", name: "Име и презиме", email: "Е-маил адреса", phone: "Телефон", subject: "Предмет", message: "Вашата порака...", send: "Испратете порака", sending: "Се испраќа...", toastTitle: "Пораката е испратена!", toastDesc: "Ќе ве контактираме наскоро.",
    phoneLbl: "Телефон", emailLbl: "Е-маил", addressLbl: "Адреса", address: "Никола Парапунов бб 1000 Скопје,\nР. Македонија", poBoxLbl: "Поштенски фах", poBox: "Поштенски фах 67, 1020 Карпош, Скопје"
  },
  certifications: {
    label: "Сертификати",
    heading: "Нашите лиценци и документи",
    viewPdf: "Преглед PDF",
    title1: "Лиценца Лупек 2024",
    subtitle1: "Licenca Lupek 2024",
    title2: "Лиценца за меѓународен превоз 2025-2030",
    subtitle2: "Licenca za medunaroden prevoz 2025-2030",
    title3: "Лиценца за внатрешен сообраќај 2025",
    subtitle3: "Licenca za vnatresen soobrakaj 2025",
  },
  footer: { desc: "Професионални транспортни и логистички услуги од 2005 година. Вашиот доверлив партнер за меѓународен и домашен транспорт.", quickLinks: "Брзи линкови", contactTitle: "Контакт", copyright: "Сите права задржани.", tagline: "Професионален транспорт и логистика" },
};

// @ts-ignore
const en: Translations = {
  nav: {
    home: "Home", about: "About", services: "Services", why: "Why Us", contact: "Contact", cta: "Request a Quote",
    careers: "Career"
  },
  hero: {
    tagline: "Transport • Logistics • Freight Forwarding",
    headline: "LUPEK LOGISTIK",
    headlineHighlight: "",
    sub: "Professional transport and logistics services since 2005. Your trusted partner for international and domestic transport.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "Contact Us",
  },
  trust: { exp: "20+ Years Experience", expDesc: "In the transport business since 2005", reliable: "Reliable Transport", reliableDesc: "Professional and secure approach", intl: "International Logistics", intlDesc: "Wide network across Europe" },
  services: {
    label: "Our Services", heading: "Complete Logistics Solutions", learnMore: "Learn More →",
    items: [
      { title: "Road Transport", desc: "Full and partial loads (FTL/LTL) across the entire European continent with a modern fleet." },
      { title: "Maritime Transport", desc: "Organization of maritime freight transport with containers to and from all world ports." },
      { title: "Customs Brokerage", desc: "Complete customs processing, import and export procedures for uninterrupted flow of goods." },
      { title: "Warehousing", desc: "Modern warehouse facilities for short-term and long-term storage of your products." },
      { title: "Freight Forwarding", desc: "Complete forwarding services, organization and coordination of the entire logistics process." },
      { title: "International Transport", desc: "Expanding transport services to countries across Europe and beyond." },
    ],
  },
  about: {
    label: "About Us", heading: "Trusted Transport Partner Since 2005",
    text: "LUPEK LOGISTIK was established in 2005. Already in the following year, the company took a prominent position in the transport business in Macedonia. Today, LUPEK LOGISTIK holds a significant market share among transport companies in Macedonia. This is proof that only with a professional approach to work and the implementation of progressive ideas can positive results be expected.",
    values: ["Investment in qualifications and professionalism", "Investment in new technologies and innovations", "Expansion of transport services to new countries", "Increasing market share and satisfied clients"],
    quote: 'We are delighted when a new client contacts us, but we are even more satisfied when they continue to work with us, which confirms their satisfaction with the services they received from our company.',
    quoteAuthor: "— LUPEK LOGISTIK",
  },
  why: {
    label: "Why Us", heading: "Why LUPEK LOGISTIK?", sub: "LUPEK LOGISTIK is a young company that wants to develop and grow. Contact us with full confidence.",
    items: [
      { title: "Ambition", desc: "We are ambitious enough to achieve our goals and expand our knowledge." },
      { title: "Client Dedication", desc: "We are satisfied with our work only when we meet the expectations of every client." },
      { title: "Continuous Development", desc: "We constantly analyze results and create new development plans." },
      { title: "Professionalism", desc: "Maximum professional approach to every task and every client." },
      { title: "24/7 Support", desc: "Always available for your needs with fast and efficient communication." },
      { title: "Efficiency", desc: "Fast and precise solutions for your logistics challenges." },
    ],
  },
  contact: {
    label: "Contact", heading: "Contact Us", name: "Full Name", email: "Email Address", phone: "Phone", subject: "Subject", message: "Your message...", send: "Send Message", sending: "Sending...", toastTitle: "Message sent!", toastDesc: "We will contact you soon.",
    phoneLbl: "Phone", emailLbl: "Email", addressLbl: "Address", address: "Nikola Parapunov bb 1000 Skopje,\nRepublic of Macedonia", poBoxLbl: "P.O. Box", poBox: "P.O. Box 67, 1020 Karposh, Skopje"
  },
  certifications: {
    label: "Certifications",
    heading: "Our Licenses & Documents",
    viewPdf: "View PDF",
    title1: "License Lupek 2024",
    subtitle1: "License Lupek 2024",
    title2: "International Transport License 2025-2030",
    subtitle2: "International Transport License 2025-2030",
    title3: "Domestic Transport License 2025",
    subtitle3: "Domestic Transport License 2025",
  },
  footer: { desc: "Professional transport and logistics services since 2005. Your trusted partner for international and domestic transport.", quickLinks: "Quick Links", contactTitle: "Contact", copyright: "All rights reserved.", tagline: "Professional Transport and Logistics" },
};

const translations = { mk, en };

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({ lang: "mk", setLang: () => {}, t: mk });

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("mk");
  return (
      <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
        {children}
      </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);