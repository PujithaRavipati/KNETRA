"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Icon } from "./Icon";
import styles from "./Nav.module.css";

const languages: { code: Locale; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "te", label: "తె", name: "తెలుగు" },
  { code: "hi", label: "हि", name: "हिन्दी" },
];

export function Nav({ lang, t }: { lang: Locale; t: Dictionary["nav"] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  const links = [
    { href: `/${lang}/ai-agents`, label: t.aiAgents },
    { href: `/${lang}/automation`, label: t.automation },
    { href: `/${lang}/creative-web`, label: t.creativeWeb },
    { href: `/${lang}/deskbuddy`, label: t.deskBuddy },
    { href: `/${lang}/pricing`, label: t.pricing },
    { href: `/${lang}/about`, label: t.about },
  ];

  return (
    <header className={styles.bar}>
      <Link href={`/${lang}`} className={styles.logo}>
        KNETRA
      </Link>

      <nav id="site-menu" className={`${styles.menu} ${open ? styles.open : ""}`} aria-label="Main">
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <ul className={styles.langs} aria-label={t.language}>
          {languages.map((l) => (
            <li key={l.code}>
              <Link
                href={`/${l.code}${rest ? `/${rest}` : ""}`}
                hrefLang={l.code}
                lang={l.code}
                aria-label={l.name}
                aria-current={l.code === lang ? "true" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Link href={`/${lang}/contact`} className={styles.book}>
        {t.book}
      </Link>

      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? t.close : t.menu}
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "close" : "menu"} size={22} />
      </button>
    </header>
  );
}
