"use client";

import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "./Button";
import styles from "./DemoChat.module.css";

type Message = { from: "bot" | "user"; text: string; source?: string };

const TYPING_MS = 1100;

// The chat opens with the first question already answered, so it shows the assistant at work on load.
const opening = (t: Dictionary["demo"]): Message[] => [
  { from: "bot", text: t.greeting },
  { from: "user", text: t.script[0].q },
  { from: "bot", text: t.script[0].a, source: t.script[0].source },
];

export function DemoChat({ t, bookHref }: { t: Dictionary["demo"]; bookHref: string }) {
  const [messages, setMessages] = useState<Message[]>(opening(t));
  const [asked, setAsked] = useState<number[]>([0]);
  const [typing, setTyping] = useState(false);
  const log = useRef<HTMLOListElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    log.current?.scrollTo({ top: log.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const ask = (i: number) => {
    const item = t.script[i];
    setAsked([...asked, i]);
    setMessages((m) => [...m, { from: "user", text: item.q }]);
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { from: "bot", text: item.a, source: item.source }]);
    }, TYPING_MS);
  };

  const restart = () => {
    clearTimeout(timer.current);
    setTyping(false);
    setAsked([0]);
    setMessages(opening(t));
  };

  const remaining = t.script.map((_, i) => i).filter((i) => !asked.includes(i));
  const done = remaining.length === 0 && !typing;

  return (
    <div className={styles.chat} data-lens-stop="page">
      <header className={styles.head}>
        <span className={styles.dot} aria-hidden="true" />
        <span className={styles.bot}>{t.botName}</span>
        <span className={styles.label}>{t.label}</span>
      </header>

      <ol ref={log} className={styles.log} aria-live="polite">
        {messages.map((m, i) =>
          // the first scripted answer is what the lens inspects
          i === 2 ? (
            <li key={i} className={styles.botMsg} data-lens-target>
              <span data-lens-value="long">{m.text}</span>
              {m.source && <span className={styles.source}>{m.source}</span>}
            </li>
          ) : (
            <li key={i} className={m.from === "bot" ? styles.botMsg : styles.userMsg}>
              {m.text}
              {m.source && <span className={styles.source}>{m.source}</span>}
            </li>
          ),
        )}
        {typing && (
          <li className={`${styles.botMsg} ${styles.typing}`} aria-label={t.typing}>
            <span />
            <span />
            <span />
          </li>
        )}
      </ol>

      <div className={styles.controls}>
        {done ? (
          <div className={styles.end}>
            <p>{t.endTitle}</p>
            <div className={styles.endActions}>
              <Button href={bookHref}>{t.endCta}</Button>
              <button type="button" className={styles.restart} onClick={restart}>
                {t.restart}
              </button>
            </div>
          </div>
        ) : (
          <>
            <p className={styles.prompt}>{t.prompt}</p>
            <div className={styles.chips}>
              {remaining.map((i) => (
                <button key={i} type="button" className={styles.chip} disabled={typing} onClick={() => ask(i)}>
                  {t.script[i].q}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
