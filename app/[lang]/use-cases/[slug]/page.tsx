import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { DemoChat } from "@/components/DemoChat";
import { GlassPanel } from "@/components/GlassPanel";
import { Icon } from "@/components/Icon";
import { LeakCalculator } from "@/components/LeakCalculator";
import { Lens } from "@/components/lens/Lens";
import en from "@/dictionaries/en.json";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { services, whatsappLink } from "@/lib/site";
import home from "../../page.module.css";
import offer from "../../[offer]/page.module.css";
import styles from "./page.module.css";

type Slug = keyof typeof en.useCases;
const isSlug = (v: string): v is Slug => v in en.useCases;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(en.useCases).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || !isSlug(slug)) return {};
  const t = getDictionary(lang).useCases[slug];
  return { title: t.metaTitle, description: t.lead, alternates: alternates(lang, `/use-cases/${slug}`) };
}

export default async function UseCasePage({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
  const { lang, slug } = await params;
  if (!isSlug(slug)) notFound();
  const dict = getDictionary(lang);
  const t = dict.useCases[slug];
  const book = `/${lang}/contact`;

  return (
    <main>
      <section className={`${home.wrap} ${offer.hero}`}>
        <h1 className={home.title}>{t.title}</h1>
        <p className={home.lead}>{t.lead}</p>
        <div className={home.actions}>
          <Button href={book}>{dict.hero.book}</Button>
          <Button href={whatsappLink(t.whatsapp)} variant="secondary" icon="whatsapp">
            {dict.close.whatsapp}
          </Button>
        </div>
      </section>

      <section className={home.wrap} aria-labelledby="problem-title">
        <h2 id="problem-title" className={home.h2}>
          {dict.useCase.problemTitle}
        </h2>
        <p className={styles.problem}>{t.problem}</p>
      </section>

      <section className={home.wrap} aria-labelledby="fix-title">
        <h2 id="fix-title" className={home.h2}>
          {dict.useCase.fixTitle}
        </h2>
        <ol className={home.steps}>
          {t.steps.map((step) => (
            <li key={step.name} className={home.step}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={home.wrap} aria-labelledby="used-title">
        <h2 id="used-title" className={home.h2}>
          {dict.useCase.servicesTitle}
        </h2>
        <ul className={styles.used}>
          {t.services.map((name) => {
            const s = services.find((x) => x.name === name)!;
            return (
              <li key={name}>
                <Link href={`/${lang}/${s.group}`}>
                  <span className={styles.usedName}>{s.name}</span>
                  <span className={styles.usedPitch}>{dict.servicePitches[s.name]}</span>
                  <Icon name="arrow" size={20} />
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {t.demo && (
        <section className={home.wrap} aria-labelledby="demo-title">
          <h2 id="demo-title" className={home.h2}>
            {t.demo === "chat" ? dict.demo.title : dict.calc.title}
          </h2>
          <p className={home.sub}>{t.demo === "chat" ? dict.demo.lead : dict.calc.lead}</p>
          <div className={`${home.block} ${t.demo === "chat" ? offer.chat : ""}`}>
            {t.demo === "chat" ? <DemoChat t={dict.demo} bookHref={book} /> : <LeakCalculator t={dict.calc} bookHref={book} />}
          </div>
        </section>
      )}

      <section className={home.wrap}>
        <GlassPanel strong className={home.close}>
          <h2 className={home.h2}>{dict.close.title}</h2>
          <p className={home.sub}>{dict.close.lead}</p>
          <div className={home.actions}>
            <Button href={book}>{dict.close.book}</Button>
            <Button href={whatsappLink(t.whatsapp)} variant="secondary" icon="whatsapp">
              {dict.close.whatsapp}
            </Button>
          </div>
        </GlassPanel>
      </section>

      {t.demo && <Lens />}
    </main>
  );
}
