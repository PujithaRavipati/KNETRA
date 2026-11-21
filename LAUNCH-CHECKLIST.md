# KNETRA launch checklist

Everything left for a person to do. Work top to bottom: section 1 blocks the launch, the rest can follow.

Run the site locally with `npm run dev`, then open http://localhost:3000/en.

---

## 1. Before launch (blocks going live)

| # | Task | Time | How |
|---|------|------|-----|
| 1 | Create a Formspree form | 10 min | formspree.io → New form → copy the ID (the part after `/f/`). Put `NEXT_PUBLIC_FORMSPREE_ID=<id>` in a new file `.env.local`. Without it the form shows its error message. |
| 2 | Deploy to Vercel | 15 min | Run `npx vercel`, log in, accept the defaults. In Vercel → Settings → Environment Variables add `NEXT_PUBLIC_FORMSPREE_ID` (and `NEXT_PUBLIC_SITE_URL` once you have a domain). Redeploy. |
| 3 | Send a test enquiry | 5 min | On the live site, fill in `/en/contact`. Check it arrives in your inbox. |
| 4 | Native check of Telugu and Hindi | 1–2 h, a native speaker | Read every page in `/te` and `/hi`, or edit `dictionaries/te.json` and `dictionaries/hi.json` directly. Pay most attention to headlines and the demo chat. These are AI drafts. |
| 5 | Check the privacy page | 30 min, someone who knows Indian data law (DPDP Act) | `/en/privacy`. Text lives in `dictionaries/*.json` under `privacy`. |
| 6 | Merge the work into `main` | 5 min | All work is on the branch `rebuild-nextjs`. Merge it (or open a pull request) when steps 1–5 are done. |
| 7 | Remove the old site | 2 min | Delete the old `index.html` in the project root. Next.js does not use it. |

## 2. Decisions only you can make

| Decision | Where it goes |
|----------|---------------|
| Starting prices for AI agents, Automation, Creative & web | `lib/site.ts` → `groups` → `priceFrom` (a number like `25000`; `null` shows "Custom quote") |
| DeskBuddy monthly price | `lib/site.ts` → `deskBuddyPricePerMonth` |
| One-time or monthly pricing for AI agents | Tell me and I'll change the price cards |
| Which services DeskBuddy connects to | Currently says "the KNETRA services you use". Update `offers.deskbuddy` in the dictionaries |
| Domain name | Buy it, connect it in Vercel → Domains, set `NEXT_PUBLIC_SITE_URL=https://yourdomain` |
| Business email on that domain | Replace `email` in `lib/site.ts` → `contact` (also the privacy text in all three dictionaries) |
| Vercel plan | Page visits are counted on the free plan. As far as I know, the "form sent" and "WhatsApp tap" counts need a paid plan |

### Claims I removed because they were not confirmed

Add any back if they are true:

- "Cancel any time" (DeskBuddy)
- "You own what we build" (custom builds)
- "Support after launch" (automation)
- "Most pilots go live in 1 to 3 weeks" (FAQ)
- "We reply within one working day" (contact page)
- "Call 500 members in an hour" (now "without anyone picking up a phone")

## 3. Content to create

| Item | Why | Where it goes |
|------|-----|---------------|
| 60-second recording of the AI calling agent | Planned demo; nothing is shown until it exists | Send me the file and I'll add a player to the AI agents page and the "Call 500 members" page |
| 3–4 Creative & web samples (videos, designs, sites) | That page has no demo section yet | Send me the files or links |
| First real case study, after the first pilot | Replaces the "Illustrative" example with real numbers | Hero report rows are in `dictionaries/*.json` → `hero.rows` |
| Founder photo (optional) | Makes the About page more personal | Send it and I'll place it |

## 4. Manual checks (things I could not test)

Tick each one on a real phone **and** a laptop after deploying.

- [ ] **The 3D lens while scrolling.** It should move over the hero rows, then follow down to the calculator and the demo chat, un-blurring values. My screenshots are still images, so I never saw it move.
- [ ] **The lens on an iPhone (Safari) and an Android phone (Chrome).** Check it isn't slow or jumpy.
- [ ] **"Reduce motion" on.** No lens, all values visible. On iPhone: Settings → Accessibility → Motion.
- [ ] **Demo chat.** Click all four questions, then "Start again".
- [ ] **Leak calculator.** Type on a phone keyboard. Typing `-5` or `1.5` should show the error.
- [ ] **Mobile menu.** Opens and closes, and every link works.
- [ ] **Language switch.** On `/en/pricing`, tap తె: you should land on `/te/pricing`, not the home page.
- [ ] **Every WhatsApp button.** Opens +91 78429 39489 with the right pre-filled message, in each language.
- [ ] **Contact form with real Formspree.** Check the "Sending…", "Message sent" and error states. Test the error by turning off Wi-Fi before pressing Send.
- [ ] **Link preview.** Paste the live URL into a WhatsApp chat. The beige KNETRA card should appear.
- [ ] **Speed.** Run PageSpeed Insights (pagespeed.web.dev) on the live home page, phone tab. Send me the score if it is under 80.

## 5. Open design items (from the final design review)

The review ran twice. The second pass found nothing blocking; these were left on purpose. Tell me when you want them done.

- [ ] **Offer pages without a demo look empty on the right of the first screen.** Affects Creative & web, DeskBuddy and Custom builds. They also have no lens. Fix: give each a small illustrative report panel like the home page. About 1 hour.
- [ ] **Telugu and Hindi link previews.** Pages in those languages share the English preview card.
- [ ] **Re-check the glass look on a real screen.** The page now has faint ledger lines behind the glass so the frosting shows. If they feel too strong, change `0.08` in `app/globals.css` (the `repeating-linear-gradient` line) to `0.05`.

## 6. After launch

- [ ] Add the site to Google Search Console and submit `https://yourdomain/sitemap.xml`
- [ ] Check Vercel → Analytics after one week: which pages get visits, and how many form sends and WhatsApp taps
- [ ] Put the site link in the Instagram bio and WhatsApp Business profile

## Where things live

| To change | Edit |
|-----------|------|
| Any text on the site | `dictionaries/en.json`, `te.json`, `hi.json` (same keys in all three) |
| Prices, contact details, service list | `lib/site.ts` |
| Colours, spacing, fonts | `app/globals.css` (top of file) |
| Leak calculator maths (26 working days, 1 in 5 conversion) | `lib/leak.ts` (tests: `npm test`) |
| The 3D lens | `components/lens/` |
| Design rules for future pages | `DESIGN.md` |
