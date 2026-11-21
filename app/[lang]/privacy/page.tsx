import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import home from "../page.module.css";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: getDictionary(lang).privacy.metaTitle, alternates: alternates(lang, "/privacy") };
}

export default async function Privacy({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).privacy;

  return (
    <main className={`${home.wrap} ${styles.page}`}>
      <h1 className={home.title}>{t.title}</h1>
      <p className={styles.updated}>{t.updated}</p>
      {t.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </section>
      ))}
    </main>
  );
}
