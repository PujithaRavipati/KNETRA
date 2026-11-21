import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { GlassPanel } from "@/components/GlassPanel";
import { Icon } from "@/components/Icon";
import { Lens } from "@/components/lens/Lens";
import { PriceCard } from "@/components/PriceCard";
import { ServiceGroup } from "@/components/ServiceGroup";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { deskBuddyPricePerMonth, groups } from "@/lib/site";
import home from "../page.module.css";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).pricing;
  return { title: t.metaTitle, description: t.lead, alternates: alternates(lang, "/pricing") };
}

export default async function Pricing({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = getDictionary(lang);
  const t = dict.pricing;
  const book = `/${lang}/contact`;

  return (
    <main className={home.wrap}>
      <section className={styles.head}>
        <h1 className={home.title}>{t.title}</h1>
        <p className={styles.statement}>{t.lead}</p>
        <div className={home.actions}>
          <Button href={book}>{dict.price.ask}</Button>
        </div>
      </section>

      <div className={styles.groups}>
        {groups.map((g) => (
          <ServiceGroup key={g.id} lang={lang} id={g.id} t={dict} />
        ))}
      </div>

      <section className={styles.addOn} aria-labelledby="addon-title">
        <h2 id="addon-title" className={styles.h3}>
          {t.addOnTitle}
        </h2>
        <PriceCard name="DeskBuddy" priceFrom={deskBuddyPricePerMonth} monthly includes={t.addOnIncludes} href={book} t={dict.price} />
      </section>

      <div className={styles.notes}>
        <GlassPanel strong className={styles.note}>
          <h2 className={styles.h3}>{t.pilotTitle}</h2>
          <p>{t.pilotText}</p>
        </GlassPanel>
        <GlassPanel className={styles.note}>
          <h2 className={styles.h3}>{t.customTitle}</h2>
          <p>{t.customText}</p>
          <Link href={`/${lang}/custom-builds`} className={styles.link}>
            {t.customLink}
            <Icon name="arrow" size={18} />
          </Link>
        </GlassPanel>
      </div>

      <Lens />
    </main>
  );
}
