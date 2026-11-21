import { ImageResponse } from "next/og";

// Shared preview image for links on WhatsApp, LinkedIn and search results.
// shortcut: English text only (the default font has no Telugu or Devanagari); add per-language images if shares in te/hi matter.
export const alt = "KNETRA: we find where your business leaks money, then plug it";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(160deg, #efe7da 0%, #e2d6c3 100%)",
          color: "#231c15",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 700, letterSpacing: 10 }}>KNETRA</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            We find where your business leaks money. Then we plug it.
          </div>
          <div style={{ fontSize: 32, color: "#5e5144" }}>AI agents · Automation · Websites · Hyderabad</div>
        </div>
        <div style={{ display: "flex", width: 120, height: 10, borderRadius: 5, background: "#b4532a" }} />
      </div>
    ),
    size,
  );
}
