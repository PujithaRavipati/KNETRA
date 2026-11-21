import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Anek_Devanagari, Anek_Latin, Anek_Telugu } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { TrackWhatsApp } from "@/components/TrackWhatsApp";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDictionary, isLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/seo";
import "../globals.css";

// one family drawn for all three scripts, so English, Telugu and Hindi pages match
const anekLatin = Anek_Latin({ subsets: ["latin"], axes: ["wdth"], variable: "--font-anek-latin" });
const anekTelugu = Anek_Telugu({ subsets: ["telugu"], axes: ["wdth"], variable: "--font-anek-telugu" });
const anekDevanagari = Anek_Devanagari({ subsets: ["devanagari"], axes: ["wdth"], variable: "--font-anek-devanagari" });

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    openGraph: { siteName: "KNETRA", type: "website", locale: { en: "en_IN", te: "te_IN", hi: "hi_IN" }[lang] },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <html lang={lang} className={`${anekLatin.variable} ${anekTelugu.variable} ${anekDevanagari.variable}`}>
      <body>
        <Nav lang={lang} t={t.nav} />
        {children}
        <Footer lang={lang} t={t.footer} />
        <WhatsAppButton label={t.whatsapp} />
        <TrackWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
