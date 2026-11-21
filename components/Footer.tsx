import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { contact, whatsappLink } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer({ lang, t }: { lang: Locale; t: Dictionary["footer"] }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <p className={styles.logo}>KNETRA</p>
        <p className={styles.tagline}>{t.tagline}</p>
      </div>
      <ul className={styles.links}>
        <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
        <li><a href={whatsappLink()} target="_blank" rel="noopener">WhatsApp {contact.whatsappDisplay}</a></li>
        <li><a href={`https://instagram.com/${contact.instagram}`} target="_blank" rel="noopener">Instagram @{contact.instagram}</a></li>
      </ul>
      <ul className={styles.links}>
        <li><Link href={`/${lang}/custom-builds`}>{t.customBuilds}</Link></li>
        <li><Link href={`/${lang}/contact`}>{t.contact}</Link></li>
        <li><Link href={`/${lang}/privacy`}>{t.privacy}</Link></li>
      </ul>
      <p className={styles.legal}>
        © {new Date().getFullYear()} KNETRA · {t.place}
      </p>
    </footer>
  );
}
