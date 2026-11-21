import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";
import te from "@/dictionaries/te.json";

export const locales = ["en", "te", "hi"] as const;
export type Locale = (typeof locales)[number];
export type Dictionary = typeof en;

// Typed against English, so a missing or misnamed key in te/hi fails the build.
const dictionaries: Record<Locale, Dictionary> = { en, te, hi };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
