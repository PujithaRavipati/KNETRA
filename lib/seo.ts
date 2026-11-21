import type { Metadata } from "next";
import { locales, type Locale } from "./i18n";

// Set NEXT_PUBLIC_SITE_URL once the domain is bought; Vercel's production URL is the fallback.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

/** Canonical URL plus hreflang links to the same page in every language. `path` is "" or "/pricing" etc. */
export function alternates(lang: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: `/${lang}${path}`,
    languages: {
      ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
      "x-default": `/en${path}`,
    },
  };
}
