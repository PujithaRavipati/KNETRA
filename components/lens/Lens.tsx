"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { lens } from "./lensState";
import styles from "./Lens.module.css";

const LensCanvas = dynamic(() => import("./LensCanvas"), { ssr: false });

const SCAN_MS = 2200;

function centerOf(el: Element) {
  const target = el.querySelector("[data-lens-target]") ?? el;
  const r = target.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function webglAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return !!canvas.getContext("webgl2");
  } catch {
    return false;
  }
}

/**
 * Drives the glass lens. In the hero it scans the report rows on a timer; below the hero it
 * moves to whichever lens stop is nearest the middle of the screen. A stop is marked
 * data-revealed once the lens reaches it, which un-blurs its value.
 */
export function Lens() {
  const [enabled, setEnabled] = useState(false);
  const tint = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !webglAvailable()) return;
    document.documentElement.classList.add("lens-on");
    setEnabled(true);

    let frame = 0;
    let last = performance.now();
    const start = last;
    let first = true;
    let under: Element | null = null;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      lens.r = window.innerWidth < 640 ? 44 : 64;

      const hero = document.querySelector("[data-lens-hero]");
      const heroStops = Array.from(document.querySelectorAll('[data-lens-stop="hero"]'));
      const pageStops = Array.from(document.querySelectorAll('[data-lens-stop="page"]'));
      const mid = window.innerHeight / 2;

      let target: Element | null = null;
      const heroActive = hero && hero.getBoundingClientRect().bottom > window.innerHeight * 0.55;
      if (heroActive && heroStops.length) {
        target = heroStops[Math.floor((now - start) / SCAN_MS) % heroStops.length];
      } else {
        let best = Infinity;
        for (const stop of pageStops) {
          const rect = stop.getBoundingClientRect();
          if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
          const d = Math.abs(rect.top + rect.height / 2 - mid);
          if (d < best) {
            best = d;
            target = stop;
          }
        }
      }

      if (target) {
        const c = centerOf(target);
        if (first) {
          lens.x = c.x;
          lens.y = c.y;
          first = false;
        }
        const k = 1 - Math.exp(-dt * 5);
        const nx = lens.x + (c.x - lens.x) * k;
        const ny = lens.y + (c.y - lens.y) * k;
        lens.vx = (nx - lens.x) / Math.max(dt, 0.001);
        lens.vy = (ny - lens.y) / Math.max(dt, 0.001);
        lens.x = nx;
        lens.y = ny;
        const dist = Math.hypot(c.x - lens.x, c.y - lens.y);
        if (dist < lens.r * 0.4) target.setAttribute("data-revealed", "");
        // data-under magnifies the value while the glass is over it
        const near = dist < lens.r ? target : null;
        if (near !== under) {
          under?.removeAttribute("data-under");
          near?.setAttribute("data-under", "");
          under = near;
        }
      } else if (under) {
        under.removeAttribute("data-under");
        under = null;
      }
      lens.presence += ((target ? 1 : 0) - lens.presence) * (1 - Math.exp(-dt * 6));

      const el = tint.current;
      if (el) {
        const d = lens.r * 2;
        el.style.width = el.style.height = `${d}px`;
        el.style.transform = `translate3d(${lens.x - lens.r}px, ${lens.y - lens.r}px, 0) scale(${lens.presence})`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("lens-on");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={tint} className={styles.tint} aria-hidden="true" />
      <LensCanvas />
    </>
  );
}
