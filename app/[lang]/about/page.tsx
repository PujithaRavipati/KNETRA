import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import home from "../page.module.css";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).about;
  return { title: t.metaTitle, description: t.lead, alternates: alternates(lang, "/about") };
}

export default async function About({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const t = dict.about;

  return (
    <main className={home.wrap}>
      <section className={styles.head}>
        <h1 className={home.title}>{t.title}</h1>
        <p className={styles.lead}>{t.lead}</p>
      </section>

      <section className={styles.founder} aria-labelledby="founder-title">
        <h2 id="founder-title" className={home.h2}>
          {t.founderTitle}
        </h2>
        <p>{t.founder}</p>
      </section>

      <section aria-labelledby="promises-title" className={styles.promisesWrap}>
        <h2 id="promises-title" className={home.h2}>
          {t.promisesTitle}
        </h2>
        <ul className={styles.promises}>
          {t.promises.map((p) => (
            <li key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className={home.actions}>
        <Button href={`/${lang}/contact`}>{dict.hero.book}</Button>
      </div>
    </main>
  );
}
