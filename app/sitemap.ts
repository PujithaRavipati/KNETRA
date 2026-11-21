import type { MetadataRoute } from "next";
import en from "@/dictionaries/en.json";
import { locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";

const paths = [
  "",
  "/contact",
  "/pricing",
  "/about",
  "/privacy",
  ...Object.keys(en.offers).map((o) => `/${o}`),
  ...Object.keys(en.useCases).map((s) => `/use-cases/${s}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])) },
    })),
  );
}
