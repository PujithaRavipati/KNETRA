"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

// One listener for every WhatsApp link on the page, instead of wiring each button.
export function TrackWhatsApp() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.('a[href^="https://wa.me/"]');
      if (link) track("whatsapp_click", { page: location.pathname });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
