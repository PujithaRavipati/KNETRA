import Link from "next/link";
import type { Dictionary, Locale } from "@/lib/i18n";
import { formatRupees, groups, services, type GroupId } from "@/lib/site";
import { Icon } from "./Icon";
import styles from "./ServiceGroup.module.css";

// One service group as a panel of rows, so the overview never becomes a grid of identical cards.
export function ServiceGroup({
  lang,
  id,
  t,
  showLink = true,
}: {
  lang: Locale;
  id: GroupId;
  t: Dictionary;
  showLink?: boolean;
}) {
  const group = groups.find((g) => g.id === id)!;
  const name = t.groupNames[id];
  // the illustrative leak from the hero report that this group plugs; the lens stops on it
  const leak = { "ai-agents": t.hero.rows[0], automation: t.hero.rows[1], "creative-web": undefined }[id];

  return (
    <section className={styles.group} aria-labelledby={`group-${id}`} data-lens-stop={leak ? "page" : undefined}>
      <header className={styles.head}>
        <h3 id={`group-${id}`} className={styles.name}>
          {name}
        </h3>
        <p className={styles.price}>
          {group.priceFrom === null ? t.price.customQuote : `${t.price.from} ${formatRupees(group.priceFrom)}`}
        </p>
      </header>
      {leak && (
        <p className={styles.leak}>
          {leak.task}{" "}
          <span className={styles.leakValue} data-lens-target data-lens-value>
            {leak.value}
          </span>{" "}
          <span className={styles.tag}>{t.hero.illustrative}</span>
        </p>
      )}
      <ul className={styles.rows}>
        {services
          .filter((s) => s.group === id)
          .map((s) => (
            <li key={s.name} className={styles.row}>
              <span className={styles.service}>{s.name}</span>
              <span className={styles.pitch}>{t.servicePitches[s.name]}</span>
            </li>
          ))}
      </ul>
      {showLink && (
        <Link href={`/${lang}/${id}`} className={styles.more}>
          {name}
          <Icon name="arrow" size={18} />
        </Link>
      )}
    </section>
  );
}
