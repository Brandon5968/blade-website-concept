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

## Notes for going live

- The contact form currently uses a `mailto:` fallback. For a real launch,
  wire it to a form backend (Cloudflare Pages Functions, Formspree, etc.).
- Swap in real photography (before/after galleries, crew, vans).
- Confirm final copy, ABN and accreditation wording with the client.
