# O'Connor Chimney Sweeps — website concept

A modern redesign concept for **Michael O'Connor & Son Industries**
([chimneysweeps.com.au](https://chimneysweeps.com.au)), built as a no-obligation
demo by ClearSet.

> **This is a temporary concept site for review only.** It will be taken down
> after viewing. All content was drawn from the existing public website.

## Stack

- [Astro](https://astro.build) 5 (static output)
- [Tailwind CSS](https://tailwindcss.com) 4 (via `@tailwindcss/vite`)
- Hosted on Cloudflare Pages

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

## Pages

| Route        | Purpose                                            |
|--------------|----------------------------------------------------|
| `/`          | Home — hero, divisions, why-us, process, CTA       |
| `/services`  | Industrial / Commercial / Domestic detail          |
| `/weddings`  | Traditional good-luck wedding sweep                 |
| `/contact`   | Contact methods + enquiry form                      |

Company details live in one place: `src/data/site.ts`.

## Cloudflare Pages build settings

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Framework preset:** Astro

## Branding & design rules

- Lime `#8cc63f` (logo) is used as an accent only; **forest/olive** green
  (`green-700/800`) is the primary action colour. One muted **clay** accent is
  reserved for emergency/urgency.
- Headings: Barlow Condensed. Body: Inter, near-black, left-aligned, ~68ch.
- Logo mark (`logo-mark.png`) and AHHA mark (`ahha-mark.png`) were cropped from
  the original PNGs (both had white text unusable on a light background).
- Photos in `public/images/` are from the existing site; `ba1-*`/`ba2-*` are the
  before/after pairs supplied by the owner.

## Key components

- `BeforeAfter.astro` — interactive drag-to-compare slider (CSS clip-path +
  range input, touch-friendly, lazy-loaded). Add more pairs by reusing it.
- `Testimonials.astro` — review layout with **placeholder slots only**. No
  fabricated reviews. Set `googleRating` once a Google profile exists.
- `Credentials.astro` — trust badges (AHHA, WorkSafe, insured, contractors board).

## Notes for going live

- Contact form uses a `mailto:` fallback. For launch, wire to a form backend
  (Cloudflare Pages Functions, Formspree, etc.).
- **Verify before publishing:** ABN 62 069 253 872, address 25 Bormar Drive
  Beaconsfield, and "open 24 hours" are shown as given in the brief.
- Add higher-res photography (crew, current white/green vans) and real
  before/after pairs (2 supplied so far; 3–4 ideal).
- Collect genuine Google reviews, then fill the testimonial slots.
