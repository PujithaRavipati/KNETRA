import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { DemoChat } from "@/components/DemoChat";
import { DeskBuddyBox } from "@/components/DeskBuddyBox";
import { GlassPanel } from "@/components/GlassPanel";
import { LeakCalculator } from "@/components/LeakCalculator";
import { Lens } from "@/components/lens/Lens";
import { PriceCard } from "@/components/PriceCard";
import { ServiceGroup } from "@/components/ServiceGroup";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { deskBuddyPricePerMonth, groups, whatsappLink, type GroupId } from "@/lib/site";
import home from "../page.module.css";
import styles from "./page.module.css";

// Which shared pieces each offer page shows. Content lives in the dictionary under "offers".
const offers = {
  "ai-agents": { group: "ai-agents", demo: "chat", deskBuddy: true },
  automation: { group: "automation", demo: "calculator", deskBuddy: true },
  "creative-web": { group: "creative-web", demo: null, deskBuddy: false },
  deskbuddy: { group: null, demo: null, deskBuddy: false },
  "custom-builds": { group: null, demo: null, deskBuddy: false },
} as const satisfies Record<string, { group: GroupId | null; demo: "chat" | "calculator" | null; deskBuddy: boolean }>;

type OfferId = keyof typeof offers;
const isOffer = (v: string): v is OfferId => v in offers;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(offers).map((offer) => ({ offer }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; offer: string }> }): Promise<Metadata> {
  const { lang, offer } = await params;
  if (!isLocale(lang) || !isOffer(offer)) return {};
  const t = getDictionary(lang).offers[offer];
  return { title: t.metaTitle, description: t.lead, alternates: alternates(lang, `/${offer}`) };
}

export default async function OfferPage({ params }: { params: Promise<{ lang: Locale; offer: string }> }) {
  const { lang, offer } = await params;
  if (!isOffer(offer)) notFound();
  const dict = getDictionary(lang);
  const t = dict.offers[offer];
  const cfg = offers[offer];
  const book = `/${lang}/contact`;
  const priceFrom = offer === "deskbuddy" ? deskBuddyPricePerMonth : (groups.find((g) => g.id === cfg.group)?.priceFrom ?? null);

  return (
    <main>
      <section className={`${home.wrap} ${styles.hero}`}>
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
          {dict.offer.problemTitle}
        </h2>
        <ul className={styles.problems}>
          {t.problems.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </section>

      {cfg.group && (
        <section className={home.wrap} aria-labelledby="services-title">
          <h2 id="services-title" className={home.h2}>
            {dict.offer.servicesTitle}
          </h2>
          <div className={home.block}>
            <ServiceGroup lang={lang} id={cfg.group} t={dict} showLink={false} />
          </div>
        </section>
      )}

      <section className={home.wrap} aria-labelledby="how-title">
        <h2 id="how-title" className={home.h2}>
          {dict.offer.howTitle}
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

      {offer === "deskbuddy" && (
        <section className={home.wrap} aria-labelledby="examples-title">
          <h2 id="examples-title" className={home.h2}>
            {dict.offer.demoTitle}
          </h2>
          <ul className={styles.questions}>
            {dict.deskBuddy.examples.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </section>
      )}

      {cfg.demo && (
        <section className={home.wrap} aria-labelledby="demo-title">
          <h2 id="demo-title" className={home.h2}>
            {cfg.demo === "chat" ? dict.demo.title : dict.calc.title}
          </h2>
          <p className={home.sub}>{cfg.demo === "chat" ? dict.demo.lead : dict.calc.lead}</p>
          <div className={`${home.block} ${cfg.demo === "chat" ? styles.chat : ""}`}>
            {cfg.demo === "chat" ? <DemoChat t={dict.demo} bookHref={book} /> : <LeakCalculator t={dict.calc} bookHref={book} />}
          </div>
        </section>
      )}

      <section className={`${home.wrap} ${styles.price}`} aria-labelledby="price-title">
        <div>
          <h2 id="price-title" className={home.h2}>
            {dict.offer.priceTitle}
          </h2>
          <p className={home.sub}>{dict.offer.priceLead}</p>
        </div>
        <PriceCard
          name={
            {
              "ai-agents": dict.nav.aiAgents,
              automation: dict.nav.automation,
              "creative-web": dict.nav.creativeWeb,
              deskbuddy: dict.nav.deskBuddy,
              "custom-builds": dict.footer.customBuilds,
            }[offer]
          }
          priceFrom={offer === "custom-builds" ? null : priceFrom}
          monthly={offer === "deskbuddy"}
          includes={t.includes}
          href={book}
          t={dict.price}
        />
      </section>

      {cfg.deskBuddy && (
        <section className={home.wrap}>
          <DeskBuddyBox lang={lang} t={dict.deskBuddy} />
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

      {cfg.demo && <Lens />}
    </main>
  );
}
