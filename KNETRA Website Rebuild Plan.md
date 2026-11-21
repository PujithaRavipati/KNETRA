# KNETRA Website Rebuild Plan

Nov 12, 2026 · @Dheeraj

## Overview

The new site rebuilds KNETRA in Next.js as a multi-page site. It presents KNETRA as a done-for-you AI and digital studio, with DeskBuddy as an optional add-on.

- **Pitch:** keep "We find where your business leaks money. Then we plug it." as the main promise.
- **Main button on every page:** "Book a free consultation". The words "Free leak audit" stay on the automation pages.
- **Goal:** turn visitors into consultation bookings through the form, WhatsApp or email.
- **Keep from the current site:** sand, clay and amber colours, glass cards, Instrument Serif + Manrope fonts, the sample leak report, Telugu, Hindi and English support, and the floating WhatsApp button.
- **Change:** the current site only covers automation. The new one covers all 9 services, custom builds and DeskBuddy.

## Sitemap

&#91;embedded content: sitemap · Home + 13 pages in 3 groups\]

Every page links back to Home and carries the "Book a free consultation" button. DeskBuddy is highlighted because it is the optional add-on offered across the service pages.

## Page-by-page content

Each page ends with the same consultation call to action and the contact block.

| Page | Sections to include |
| --- | --- |
| Home | Hero with leak pitch + sample leak report · 3 service groups as cards · "Problems we solve" (use cases) · How it works (Consult → Build & pilot → Measure & grow) · DeskBuddy teaser · Demo videos · FAQ · Contact |
| AI agents | What each of the 5 services does · a demo per service · who it suits · starting price · "Add DeskBuddy" box |
| Automation | Leak audit offer · workflows we automate (orders to Tally, payment reminders, lead follow-up, invoice extraction) · starting price · "Add DeskBuddy" box |
| Creative & web | Video editing, graphic design, websites · portfolio samples · starting price |
| DeskBuddy | What it is · how it connects to services the customer already pays for · example questions · monthly add-on price |
| Use case (each) | The problem in the customer's words · how KNETRA solves it · which services it uses · demo · consultation button |
| Custom builds | "Tell us the problem, we build it from scratch" · the build steps · request form |
| Pricing | Starting price per service group · DeskBuddy add-on · pilot offer · "Custom quote" note |
| About | Meaning of "Netra" (eye) · founder story · the 3 promises: measurable results, your language and channel, care with your data |
| Contact | Formspree form · email · WhatsApp · Instagram |
| Privacy | What the form collects · how bot conversation logs are stored · who controls them |

**FAQ ideas:** How long does a build take? Do you work in Telugu and Hindi? Who owns the data? What happens after the pilot? Do I need DeskBuddy?

## Services

The 9 services sit in 3 groups, AI agents first. Custom builds cover anything outside the list.

| Group | Service | One-line pitch for the site |
| --- | --- | --- |
| AI agents | AI chatbots | Answers customer questions on your website, 24/7 |
| AI agents | RAG chatbots | Answers from your own documents, e.g. a hospital's policies and FAQs |
| AI agents | AI calling agents | Calls hundreds of people (e.g. 500 members) in Telugu, Hindi or English and logs every answer |
| AI agents | WhatsApp bots | Bookings, orders and reminders on the app your customers already use |
| AI agents | Multi-agent orchestration | Several AI agents working together on one personalised workflow |
| Automation | Workflow automations | Removes repetitive manual work, e.g. orders into Tally, payment reminders |
| Automation | Custom builds | Tell us the problem and we build the service from scratch |
| Creative & web | Video editing | Edited videos for ads, reels and product demos |
| Creative & web | Graphic design | Posters, social posts and brand assets |
| Creative & web | Websites | Fast, mobile-first business websites |

Open question: confirm the one-line pitches and examples for Creative & web.

## DeskBuddy (optional add-on)

DeskBuddy is an optional assistant that connects to every KNETRA service a customer pays for and answers their questions about them.

- **Example questions to show on the site:** "How many of the 500 calls were answered?" · "What did patients ask the RAG bot this week?" · "Which WhatsApp orders are still pending?"
- **Where it appears:** its own page, a teaser on Home, an "Add DeskBuddy" box on each AI agents and Automation page, and a line on Pricing.
- **Wording rule:** always say "optional add-on" so it never looks like a required extra cost.

Open question: does DeskBuddy work on Creative & web services too, or only on AI agents and Automation?

## Use cases

Launch with 4 problem-led pages. Each one is named the way the customer would search for it.

| Page title | Problem | Services used |
| --- | --- | --- |
| Call 500 members in an hour | Staff spend days phoning members for reminders, renewals or event invites | AI calling agents |
| AI assistant for hospitals | Front desk answers the same timing, fee and policy questions all day | RAG chatbots, WhatsApp bots |
| WhatsApp orders straight to Tally | Orders arrive on WhatsApp or PDF and get retyped by hand | WhatsApp bots, Workflow automations |
| Never miss a lead | Enquiries wait days for a reply and go cold | AI chatbots, WhatsApp bots |

Add more later from real enquiries. The contact form's "what bothers you most" answers are the source.

## Proof without clients yet

There are no client results yet, so the site proves itself with working demos and a low-risk pilot. No testimonials or logos until they are real.

- [ ] Record a 60-second video of the AI calling agent making a real call
- [ ] Record a WhatsApp bot booking an appointment, end to end
- [ ] Build a sample RAG chat visitors can try, using a made-up hospital FAQ
- [ ] Add 3–4 Creative & web samples (videos, designs, sites)
- [ ] Write the pilot offer: one small build, fixed price ₹\_\_\_, results shown on a dashboard
- [ ] Keep the "Illustrative" label on the sample leak report

Replace demos with case studies as soon as the first pilot has numbers.

## Pricing

Show a "starting from" price for each group so visitors know the range before they enquire. Fill in the amounts.

| Item | Shown on site as |
| --- | --- |
| AI agents | Starting from ₹\_\_\_ |
| Automation | Starting from ₹\_\_\_ |
| Creative & web | Starting from ₹\_\_\_ |
| Custom builds | Custom quote after a free consultation |
| Pilot offer | Fixed ₹\_\_\_ for one small build |
| DeskBuddy (optional add-on) | ₹\_\_\_ / month |

Open question: is pricing one-time, monthly, or both, for AI agents (calls, messages and hosting cost money every month)?

## Contact

Visitors reach KNETRA three ways: a Formspree form, email, or WhatsApp directly.

- **Formspree form** replaces today's mailto form, which fails on phones with no email app. Fields: name, business name and type, phone/WhatsApp, service interested in (dropdown of the 9 + "Not sure"), message. Show a thank-you message on the page after sending.
- **Email:** kompellakartikeya@gmail.com (consider a domain address like hello@knetra… before launch).
- **WhatsApp:** +91 78429 39489, with a pre-filled message per page (e.g. "Hi KNETRA, I'm interested in AI calling agents").
- **Floating WhatsApp button** on every page, as today.
- **Instagram:** @yourstrulykarthikeya, in the footer and Contact page.

## Tech

Build with Next.js (App Router) so every page is indexed by Google, and host it on Vercel.

| Area | Choice |
| --- | --- |
| Framework | Next.js + React, static pages where possible |
| Styling | Beige glassmorphism: sand ground, frosted glass panels, one warm accent for ₹ values and the book button, green only for "plugged" |
| Components | Nav, Button, GlassCard, ServiceCard, LeakReport, DemoVideo, PriceCard, DeskBuddyBox, ContactForm, WhatsAppButton, Footer |
| Forms | Formspree |
| SEO | Title + description per page, Open Graph images, sitemap.xml, local keywords ("Hyderabad") |
| Analytics | A privacy-friendly tool (e.g. Vercel Analytics) tracking form sends and WhatsApp clicks |
| Hosting | Vercel, with a custom domain |
| Accessibility | Keep reduced-motion support and keyboard focus styles from the current site |

## Open items

**Decide before building**

- [ ] Fill in all ₹\_\_\_ prices, and choose one-time vs monthly for AI agents
- [ ] Confirm which services DeskBuddy connects to
- [ ] Confirm Creative & web pitches
- [ ] Buy the domain and set up a domain email
- [ ] Finalise the design direction

## Build flow

About 20–25 hours in total. The new site can replace today's `index.html` after step 4; everything after that ships as updates.

1. **Prep (before any code, owner: you)**
   - [ ] Create a Formspree account and form
   - [ ] Buy the domain
   - [ ] Record the calling-agent demo clip (60 s)
   - [ ] Write the scripted demo chat (8–10 messages)
   - [ ] Fill in prices, or agree to launch with "Custom quote"
2. **Setup (\~1 h)**
   - [ ] Create the Next.js app (App Router, TypeScript)
   - [ ] Add Three.js (`@react-three/fiber`, `@react-three/drei`)
   - [ ] Set colour, spacing and font tokens for the beige glass theme
   - [ ] Language routes `/en`, `/te`, `/hi` with English text first
   - [ ] Deploy an empty page to Vercel
   - Done when: the live URL loads on a phone.
3. **Shared components (\~3 h)**
   - [ ] Nav, Footer, GlassPanel, Button, floating WhatsApp button
   - [ ] ServiceCard, PriceCard, DeskBuddyBox
   - Done when: one test page shows every component on desktop and phone.
4. **Home + Contact (\~6 h) — launch point**
   - [ ] Hero with the task list and ₹ leak rows
   - [ ] Three.js glass lens that moves on scroll and reveals each row (\~2 h)
   - [ ] Leak calculator: empty, filled and invalid states
   - [ ] Demo chat (scripted) + calling-agent clip, both labelled "demo"
   - [ ] Services overview (3 groups + DeskBuddy)
   - [ ] Contact page with the Formspree form: sending, sent and error states
   - Done when: a test enquiry arrives in your inbox and the site replaces `index.html`.
5. **Offer pages (\~3 h)**
   - [ ] One template, then AI agents, Automation, Creative & web, DeskBuddy, Custom builds
6. **Use-case pages (\~2 h)**
   - [ ] One template, then the 4 problem pages
7. **Pricing, About, Privacy (\~2 h)**
8. **Telugu and Hindi (\~2 h of wiring, plus translation time)**
   - [ ] Get the text translated, then check that no layout breaks with longer Telugu lines
9. **SEO, analytics, speed (\~2 h)**
   - [ ] Titles and descriptions per page, sitemap.xml, Open Graph images
   - [ ] Track form sends and WhatsApp clicks
   - [ ] Lighter lens scene on phones; reduced-motion version
10. **Review and finish (\~2 h)**
    - [ ] Design review of desktop and phone screenshots
    - [ ] Write DESIGN.md from the finished site
    - [ ] Fix what the review finds, then announce the site
