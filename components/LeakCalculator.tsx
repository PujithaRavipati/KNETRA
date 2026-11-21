"use client";

import { useId, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import { parseLeak, type LeakInput } from "@/lib/leak";
import { formatRupees } from "@/lib/site";
import { Button } from "./Button";
import styles from "./LeakCalculator.module.css";

type Fields = Record<keyof LeakInput, string>;

export function LeakCalculator({ t, bookHref }: { t: Dictionary["calc"]; bookHref: string }) {
  const id = useId();
  // starts filled with example numbers so the estimate (and the lens reveal) shows on load
  const [fields, setFields] = useState<Fields>({ missed: "10", value: "1500", hours: "3", rate: "150" });
  const result = parseLeak(fields);

  const input = (key: keyof Fields, label: string, placeholder: string) => {
    const bad = fields[key].trim() !== "" && !/^\d+$/.test(fields[key].trim());
    return (
      <label className={styles.field} htmlFor={`${id}-${key}`}>
        <span>{label}</span>
        <input
          id={`${id}-${key}`}
          inputMode="numeric"
          autoComplete="off"
          placeholder={placeholder}
          value={fields[key]}
          aria-invalid={bad}
          onChange={(e) => setFields({ ...fields, [key]: e.target.value })}
        />
      </label>
    );
  };

  return (
    <div className={styles.calc}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <p className={styles.example}>{t.example}</p>
        {input("missed", t.missed, "10")}
        {input("value", t.value, "1500")}
        {input("hours", t.hours, "3")}
        {input("rate", t.rate, "150")}
      </form>

      <div className={styles.result} data-lens-stop="page" aria-live="polite">
        {result === "empty" && <p className={styles.message}>{t.empty}</p>}
        {result === "invalid" && (
          <p className={styles.error} role="alert">
            {t.invalid}
          </p>
        )}
        {typeof result === "object" && (
          <>
            <p className={styles.label}>{t.resultLabel}</p>
            <p className={styles.total} data-lens-target>
              <span data-lens-value>{formatRupees(result.total)}</span> <span className={styles.unit}>{t.perMonth}</span>
            </p>
            <dl className={styles.breakdown}>
              <div>
                <dt>{t.fromMissed}</dt>
                <dd data-lens-value>{formatRupees(result.fromMissed)}</dd>
              </div>
              <div>
                <dt>{t.fromHours}</dt>
                <dd data-lens-value>{formatRupees(result.fromHours)}</dd>
              </div>
            </dl>
            <Button href={bookHref} icon="arrow">
              {t.cta}
            </Button>
          </>
        )}
        <p className={styles.assumption}>{t.assumption}</p>
      </div>
    </div>
  );
}
