import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Icon } from "./Icon";
import styles from "./DeskBuddyBox.module.css";

export function DeskBuddyBox({ lang, t }: { lang: Locale; t: Dictionary["deskBuddy"] }) {
  return (
    <aside className={styles.box} aria-labelledby="deskbuddy-title">
      <div className={styles.text}>
        <h3 id="deskbuddy-title" className={styles.title}>
          {t.title} <span className={styles.badge}>{t.optional}</span>
        </h3>
        <p className={styles.body}>{t.text}</p>
        <Link href={`/${lang}/deskbuddy`} className={styles.link}>
          {t.link}
          <Icon name="arrow" size={18} />
        </Link>
      </div>
      <ul className={styles.questions}>
        {t.examples.map((q) => (
          <li key={q}>{q}</li>
        ))}
      </ul>
    </aside>
  );
}
