import type { Dictionary } from "@/lib/i18n";
import { formatRupees } from "@/lib/site";
import { Button } from "./Button";
import { GlassPanel } from "./GlassPanel";
import { Icon } from "./Icon";
import styles from "./PriceCard.module.css";

type Props = {
  name: string;
  priceFrom: number | null;
  monthly?: boolean;
  includes: string[];
  href: string;
  t: Dictionary["price"];
};

export function PriceCard({ name, priceFrom, monthly = false, includes, href, t }: Props) {
  return (
    <GlassPanel as="article" className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>
        {priceFrom === null ? (
          <span className={styles.quote}>{t.customQuote}</span>
        ) : (
          <>
            <span className={styles.from}>{t.from}</span>
            <span className={styles.amount}>{formatRupees(priceFrom)}</span>
            {monthly && <span className={styles.from}>{t.perMonth}</span>}
          </>
        )}
      </p>
      <ul className={styles.includes}>
        {includes.map((item) => (
          <li key={item}>
            <Icon name="check" size={18} />
            {item}
          </li>
        ))}
      </ul>
      <Button href={href} variant="secondary" icon="arrow">
        {t.ask}
      </Button>
    </GlassPanel>
  );
}
