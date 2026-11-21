"use client";

import { track } from "@vercel/analytics";
import { useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import { services, whatsappLink } from "@/lib/site";
import styles from "./ContactForm.module.css";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ t }: { t: Dictionary["contact"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      if (!FORMSPREE_ID) throw new Error("NEXT_PUBLIC_FORMSPREE_ID is not set");
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree returned ${res.status}`);
      track("form_sent", { service: String(new FormData(form).get("service") ?? "") });
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className={styles.sent} role="status">
        <h2>{t.sentTitle}</h2>
        <p>{t.sentText}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <label className={styles.field}>
        <span>{t.name}</span>
        <input name="name" required autoComplete="name" />
      </label>
      <label className={styles.field}>
        <span>{t.business}</span>
        <input name="business" required autoComplete="organization" />
      </label>
      <label className={styles.field}>
        <span>{t.phone}</span>
        <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" />
      </label>
      <label className={styles.field}>
        <span>{t.service}</span>
        <select name="service" defaultValue={t.notSure}>
          <option>{t.notSure}</option>
          {services.map((s) => (
            <option key={s.name}>{s.name}</option>
          ))}
          <option>DeskBuddy</option>
        </select>
      </label>
      <label className={styles.field}>
        <span>{t.message}</span>
        <textarea name="message" required rows={5} />
      </label>

      {status === "error" && (
        <p className={styles.error} role="alert">
          {t.error}{" "}
          <a href={whatsappLink()} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </p>
      )}

      <button className={styles.submit} type="submit" disabled={status === "sending"}>
        {status === "sending" ? t.sending : t.send}
      </button>
    </form>
  );
}
