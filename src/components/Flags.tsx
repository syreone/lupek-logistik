import macedoniaSvg from "@/assets/flag-macedonia.svg";
import ukSvg from "@/assets/flag-uk.svg";
import { cn } from "@/lib/utils";

interface FlagProps {
  className?: string;
}

/** Official North Macedonia flag */
export const MacedoniaFlag = ({ className }: FlagProps) => (
  <img src={macedoniaSvg} alt="Macedonian" className={cn("object-cover", className)} />
);

/** Official United Kingdom (Union Jack) flag */
export const UKFlag = ({ className }: FlagProps) => (
  <img src={ukSvg} alt="English" className={cn("object-cover", className)} />
);

interface LanguageFlagProps {
  lang: "mk" | "en";
  className?: string;
}

/**
 * Renders the flag for a given target language code.
 * shows the Macedonian flag for "mk", the UK flag for "en".
 */
export const LanguageFlag = ({ lang, className }: LanguageFlagProps) =>
  lang === "mk" ? <MacedoniaFlag className={className} /> : <UKFlag className={className} />;
