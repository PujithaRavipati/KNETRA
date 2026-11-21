---
name: KNETRA
description: The eye that spots what's costing you. Frosted glass over a warm beige ledger, with one lens that reveals the rupee leak.
colors:
  beige: "#efe7da"
  sand: "#e2d6c3"
  sand-deep: "#cdbda5"
  glass: "rgb(255 252 246 / 0.38)"
  glass-strong: "rgb(255 252 246 / 0.58)"
  glass-edge: "rgb(255 255 255 / 0.75)"
  ink: "#231c15"
  ink-soft: "#5e5144"
  accent: "#b4532a"
  accent-deep: "#9e4722"
  accent-ink: "#fffaf3"
  plugged: "#2f7a4b"
  error: "#b3261e"
typography:
  display:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6.2vw, 5.4rem)"
    fontWeight: 650
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 82"
  headline:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.4rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 85"
  value:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 650
    lineHeight: 1
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 85"
  title:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 650
  body:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Anek Latin, Anek Telugu, Anek Devanagari, system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 600
rounded:
  bubble-tail: "4px"
  field: "14px"
  bubble: "18px"
  panel: "22px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "24px"
  "6": "32px"
  "7": "48px"
  "8": "72px"
  "9": "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-deep}"
  button-secondary:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  glass-panel:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.panel}"
    padding: "32px"
  glass-panel-strong:
    backgroundColor: "{colors.glass-strong}"
    rounded: "{rounded.panel}"
    padding: "32px"
  input-field:
    backgroundColor: "{colors.glass-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 16px"
    height: "48px"
  chip:
    backgroundColor: "{colors.glass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
    height: "40px"
  tag:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 12px"
  nav-bar:
    backgroundColor: "{colors.glass-strong}"
    rounded: "{rounded.pill}"
    padding: "8px 8px 8px 24px"
---

# Design System: KNETRA

## Overview

**Creative North Star: "The Jeweller's Loupe on the Ledger"**

A warm beige-to-sand ground ruled like an account book, with frosted glass panels floating over it, and one real glass lens moving down the page. What passes under the lens shows its hidden rupee cost. Everything else is quiet so the lens and the numbers it finds get the attention.

Density is calm and editorial: one wide column (1160px max), big condensed headlines, long ruled lists instead of card grids. Glass is the only material. The beige ground and ink type stay mostly neutral, and colour appears only where something costs money or something has been fixed.

The lens is the one 3D object and the signature. It needs a textured ground to refract, so the ledger rules stay fixed behind the scrolling glass. When reduced motion is on, or WebGL is missing, the lens is turned off and every value shows plainly.

**Key Characteristics:**
- Fixed ledger-rule ground (2px rules every 36px) under a 170deg beige-to-sand wash.
- Frosted glass panels: translucent warm white, 20px blur at 140% saturation, crisp white 1px edge, soft warm two-layer shadow.
- One warm accent, used only for live rupee/hour values and the primary action.
- Anek variable sans across Latin, Telugu and Devanagari; headings condensed by the width axis.
- Grouped content goes in ruled rows inside one panel, never in rows of equal cards.

## Colors

A warm, low-saturation paper palette with one fired-clay accent and one reserved green.

### Primary
- **Fired Clay** (accent): live rupee and per-hour leak values, calculator totals, price amounts, the primary action, selection, focus ring, and caret. **Deep Clay** (accent-deep) is its hover. **Cream Ink** (accent-ink) is the text on it.

### Secondary
- **Plugged Green** (plugged): only for something fixed or live: the "sent" confirmation, the demo bot's online dot, the WhatsApp mark. Never for decoration or feature ticks.

### Neutral
- **Beige** (beige) and **Sand** (sand): the two ends of the ground wash. Sand is also the root background.
- **Deep Sand** (sand-deep): scrollbar thumb, the deepest tone of the ground.
- **Glass** / **Strong Glass** / **Glass Edge**: panel fills (38% and 58% warm white) and the white 1px rim.
- **Ledger Ink** (ink): headings, body text, service names, "Custom quote", the 2px top rule on ordered steps.
- **Soft Ink** (ink-soft): secondary copy, captions, nav links at rest, feature ticks, tag text.
- **Hairlines**: ink at 8-25% alpha (`rgb(35 28 21 / 0.1)` for row dividers, 0.14 to 0.16 for field and chip borders, 0.2 for tag outlines, 0.25 dashed for optional/add-on blocks).
- **Error Red** (error): invalid field borders and error messages only.

### Named Rules
**The Leak-Only Accent Rule.** Fired Clay marks only a live rupee or hour value, or the one primary action. A price you can't state yet ("Custom quote") is ink. If a clay element isn't money or the main action, it's wrong.

**The Plugged Green Rule.** Green means plugged. Feature ticks, checkmarks and decoration stay Soft Ink.

## Typography

**Display Font:** Anek Latin (variable, width axis), with Anek Telugu and Anek Devanagari for Indic scripts, falling back to system-ui
**Body Font:** the same Anek stack

**Character:** One variable family in three scripts. Headings are condensed (82-90% width) and heavy, while body text uses normal width.

### Hierarchy
- **Display** (650, clamp 2.6-5.4rem, 0.98, -0.025em, 82% width): page titles and the hero line.
- **Headline** (650, clamp 2-3.4rem, 1.05, -0.02em, 85% width, balanced wrap): section headings.
- **Value** (650, clamp 2.5-4rem, 1, 85% width, tabular figures, Fired Clay): calculator total. Price amounts use the same treatment at clamp 2-2.75rem.
- **Group title** (650, clamp 1.5-2rem, 1.1, 90% width): service group names.
- **Statement** (500, clamp 1.5-2.25rem, 1.25, 30ch): lead statements under a page title.
- **Title** (650, 1.35rem): card names, step and promise headings.
- **Body** (400, 1.0625rem, 1.6): running text. Measure 68ch. Lead subs are 1.1-1.2rem in Soft Ink at 44-56ch.
- **Label** (600, 0.75-0.85rem): outline tags such as "Illustrative", the language switcher, small notes. Sentence case.
- **Wordmark** (700, 110% width, 0.18em tracking): the KNETRA logo only.

### Named Rules
**The Indic Breathing Rule.** In Telugu and Hindi, h1 to h3 use line-height 1.35 and normal tracking. Their marks above and below the letter need the room, and negative tracking breaks conjuncts.

**The Tabular Money Rule.** Every rupee figure and numeric input uses tabular figures.

## Layout

One centred column, `min(1160px, 100% - 32px)`. Sections are separated by the 112px step (72px on inner-page heads and on mobile). The hero fills the viewport minus the nav, split 1.1fr / 0.9fr. Two-column sections use asymmetric splits (0.8fr / 1.2fr, 1fr / 2fr, 0.9fr / 1.1fr), with the explanatory column sticky where the other side scrolls (demo). Sequences (how we work, promises) are three-column ordered lists, separated by a 2px ink top rule instead of a container. Breakpoints: the nav collapses at 1020px, main grids stack at 900/860px, panels drop to 24px padding at 760/640px, and the compact nav and WhatsApp icon-only button kick in at 480px. Spacing follows the 4-8-12-16-24-32-48-72-112 scale.

## Elevation & Depth

Depth comes from glass layered over a fixed ground. Panels blur and brighten the ledger rules as they scroll past them, and one warm, diffuse two-layer shadow lifts them. The primary action carries a clay-tinted glow. Nothing uses hard or offset shadows.

### Shadow Vocabulary
- **Panel float** (`0 12px 40px rgb(92 64 36 / 0.14), 0 2px 6px rgb(92 64 36 / 0.08)`): every glass panel, the nav bar, the WhatsApp button.
- **Clay glow** (`0 8px 22px rgb(180 83 42 / 0.32)`, hover `0 12px 28px rgb(180 83 42 / 0.38)`): primary action only.
- **Bubble lift** (`0 4px 12px rgb(92 64 36 / 0.08)`): example chat bubbles.
- **Field focus** (`0 0 0 3px rgb(180 83 42 / 0.2)` with clay border): inputs.

### Named Rules
**The Something-To-Frost Rule.** Glass works only over texture. The ledger rules stay `background-attachment: fixed` behind the page, and no glass panel sits on a flat fill.

## Shapes

Soft, generous corners. Panels are 22px, fields 14px, chat bubbles 18px with a 4px tail corner on the speaker's side. Buttons, nav bar, chips, tags and the language switcher are full pills. The only circle is the lens and its tint. Borders are 1px: a white rim on glass, ink hairlines inside it, and dashed ink at 25% for optional or add-on blocks (DeskBuddy, the pricing add-on).

## Components

### Buttons
- **Shape:** full pill (999px), min-height 48px, 24px side padding, 600 weight.
- **Primary:** Fired Clay with Cream Ink text and the clay glow; Deep Clay on hover.
- **Secondary:** Strong Glass with a white rim and ink text; turns almost opaque cream on hover.
- **Motion:** lifts 2px on hover over 0.25s `cubic-bezier(0.16, 1, 0.3, 1)` and returns on press. Focus is a 2px clay outline at 3px offset.

### Chips and Tags
- **Reply chips** (demo): 40px pill, Glass fill, ink hairline at 16%; white fill with a clay border on hover.
- **Tags** ("Illustrative", "Demo"): outline pill, ink at 20%, 0.75-0.8rem 600 in sentence case. They state what a value is; they never sit above headings.

### Cards / Containers
- **Glass panel:** 22px corners, Glass (or Strong Glass for the answer side of a pair), 20px blur at 140% saturation, white rim, panel float shadow, 32px padding (24px on mobile).
- **Ruled group:** one glass panel holding a heading row (title, the live leak value in clay, price or "Custom quote" in ink) and then a list of rows split by 10% ink hairlines, in a 14rem name / 1fr pitch grid.

### Inputs / Fields
- **Style:** Strong Glass fill, 1px ink hairline at 14%, 14px corners, 48px tall, 1.05rem text.
- **Focus:** clay border plus a 3px clay ring at 20%.
- **Error:** Error Red border and a 600-weight message.

### Navigation
- Sticky floating pill 12px from the top, Strong Glass, panel shadow. Wordmark on the left, then Soft Ink links that turn ink on hover or when current, a recessed pill language switcher (EN / తె / हि), and a clay "Book a consultation" pill. At 1020px and below, links move into a glass dropdown panel behind a 44px toggle.

### The Lens (signature)
A Three.js glass loupe (real transmission, refraction of the page) plus a DOM tint circle behind it that brightens what's underneath. Any element marked `data-lens-stop` is a stop: `"hero"` stops are scanned on a timer, `"page"` stops track the one nearest the viewport centre. `data-lens-target` marks the spot the lens moves to. `data-lens-value` content is blurred (7px, 50% opacity) until the lens reveals its stop, and scales to 1.1 while it's under the lens (`data-under`). `data-lens-value="long"` gets revealed but never scaled. Reveals use 0.7s `cubic-bezier(0.16, 1, 0.3, 1)`. With reduced motion or no WebGL, the lens is turned off and every value shows.

### Floating WhatsApp
A fixed 52px glass pill at the bottom right: green mark, ink label. On narrow phones only the icon shows.

## Do's and Don'ts

### Do:
- **Do** put every frosted surface over the fixed ledger-rule ground (2px rules every 36px at 8% ink).
- **Do** keep Fired Clay for live rupee/hour values and the primary action, and set unpriced "Custom quote" in ink.
- **Do** keep green for the plugged state only, and set feature ticks in Soft Ink.
- **Do** list grouped services as ruled rows inside one glass panel.
- **Do** mark every figure the lens reveals with `data-lens-value`, its container with `data-lens-stop`, and use `"long"` for values too wide to magnify.
- **Do** set Telugu and Hindi headings at line-height 1.35 with no negative tracking.
- **Do** label illustrative numbers with an outline "Illustrative" tag next to the value.

### Don't:
- **Don't** put services or features in rows of equal cards. Use ruled rows, or ordered lists joined by an ink top rule.
- **Don't** add eyebrow or kicker labels above headings.
- **Don't** use clay for decoration, ticks, links at rest, or prices that haven't been stated.
- **Don't** add another 3D object, gradient orbs, or icon tiles; the lens is the only spectacle.
- **Don't** hide values when reduced motion is on or WebGL is unavailable.
