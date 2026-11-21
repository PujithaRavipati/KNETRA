import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { DemoChat } from "@/components/DemoChat";
import { DeskBuddyBox } from "@/components/DeskBuddyBox";
import { GlassPanel } from "@/components/GlassPanel";
import { LeakCalculator } from "@/components/LeakCalculator";
import { Lens } from "@/components/lens/Lens";
import { ServiceGroup } from "@/components/ServiceGroup";
import { getDictionary, type Locale } from "@/lib/i18n";
import { alternates } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: alternates(lang, "") };
}

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang);
  const book = `/${lang}/contact`;

  return (
    <main>
      <section className={`${styles.wrap} ${styles.hero}`} data-lens-hero>
        <div className={styles.heroCopy}>
          <h1 className={styles.title}>{t.hero.title}</h1>
          <p className={styles.lead}>{t.hero.lead}</p>
          <div className={styles.actions}>
            <Button href={book}>{t.hero.book}</Button>
            <Button href="#demo" variant="secondary">
              {t.hero.demo}
            </Button>
          </div>
        </div>

        <GlassPanel as="aside" strong className={styles.report}>
          <h2 className={styles.reportTitle}>{t.hero.reportTitle}</h2>
          <ul className={styles.rows}>
            {t.hero.rows.map((row) => (
              <li key={row.task} className={styles.row} data-lens-stop="hero">
                <span>{row.task}</span>
                <span className={styles.value} data-lens-target data-lens-value>
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
          <p className={styles.total} data-lens-stop="hero">
            <span>{t.hero.totalLabel}</span>
            <span className={styles.totalValue} data-lens-target data-lens-value>
              {t.hero.total}
            </span>
          </p>
          <p className={styles.note}>{t.hero.reportNote}</p>
        </GlassPanel>
      </section>

      <section id="problems" className={`${styles.wrap} ${styles.problems}`} aria-labelledby="problems-title">
        <div>
          <h2 id="problems-title" className={styles.h2}>
            {t.useCase.homeTitle}
          </h2>
          <p className={styles.sub}>{t.useCase.homeLead}</p>
        </div>
        <ul className={styles.problemList}>
          {Object.entries(t.useCases).map(([slug, uc]) => (
            <li key={slug}>
              <Link href={`/${lang}/use-cases/${slug}`}>
                <span>{uc.title}</span>
                <Icon name="arrow" size={22} />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="calculator" className={styles.wrap} aria-labelledby="calc-title">
        <h2 id="calc-title" className={styles.h2}>
          {t.calc.title}
        </h2>
        <p className={styles.sub}>{t.calc.lead}</p>
        <div className={styles.block}>
          <LeakCalculator t={t.calc} bookHref={book} />
        </div>
      </section>

      <section id="demo" className={`${styles.wrap} ${styles.demo}`} aria-labelledby="demo-title">
        <div>
          <h2 id="demo-title" className={styles.h2}>
            {t.demo.title}
          </h2>
          <p className={styles.sub}>{t.demo.lead}</p>
        </div>
        <DemoChat t={t.demo} bookHref={book} />
      </section>

      <section id="services" className={styles.wrap} aria-labelledby="services-title">
        <h2 id="services-title" className={styles.h2}>
          {t.services.title}
        </h2>
        <p className={styles.sub}>{t.services.lead}</p>
        <div className={`${styles.block} ${styles.stack}`}>
          <ServiceGroup lang={lang} id="ai-agents" t={t} />
          <ServiceGroup lang={lang} id="automation" t={t} />
          <ServiceGroup lang={lang} id="creative-web" t={t} />
          <DeskBuddyBox lang={lang} t={t.deskBuddy} />
        </div>
      </section>

      <section id="how" className={styles.wrap} aria-labelledby="how-title">
        <h2 id="how-title" className={styles.h2}>
          {t.how.title}
        </h2>
        <ol className={styles.steps}>
          {t.how.steps.map((step) => (
            <li key={step.name} className={styles.step}>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="faq" className={`${styles.wrap} ${styles.faq}`} aria-labelledby="faq-title">
        <h2 id="faq-title" className={styles.h2}>
          {t.faq.title}
        </h2>
        <div className={styles.questions}>
          {t.faq.items.map((item) => (
            <details key={item.q} className={styles.question}>
              <summary>
                {item.q}
                <Icon name="plus" size={22} />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.wrap}>
        <GlassPanel strong className={styles.close}>
          <h2 className={styles.h2}>{t.close.title}</h2>
          <p className={styles.sub}>{t.close.lead}</p>
          <div className={styles.actions}>
            <Button href={book}>{t.close.book}</Button>
            <Button href={whatsappLink()} variant="secondary" icon="whatsapp">
              {t.close.whatsapp}
            </Button>
          </div>
        </GlassPanel>
      </section>

      <Lens />
    </main>
  );
}
