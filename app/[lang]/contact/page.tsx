import { alternates } from "@/lib/seo";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { GlassPanel } from "@/components/GlassPanel";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";
import { contact, whatsappLink } from "@/lib/site";
import styles from "./page.module.css";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const t = getDictionary(lang).contact;
  return { title: t.metaTitle, description: t.lead, alternates: alternates(lang, "/contact") };
}

export default async function Contact({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const t = getDictionary(lang).contact;

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.lead}>{t.lead}</p>
        <h2 className={styles.directTitle}>{t.direct}</h2>
        <ul className={styles.direct}>
          <li>
            <a href={whatsappLink()} target="_blank" rel="noopener">
              <span>WhatsApp</span>
              {contact.whatsappDisplay}
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`}>
              <span>Email</span>
              {contact.email}
            </a>
          </li>
          <li>
            <a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener">
              <span>Instagram</span>@{contact.instagram}
            </a>
          </li>
        </ul>
      </div>
      <GlassPanel strong className={styles.panel}>
        <ContactForm t={t} />
      </GlassPanel>
    </main>
  );
}
