# ACM SUI 2027 Website Starter

A responsive Next.js starter inspired by the visual character and information architecture of the ACM SUI 2026 website.

The official SUI 2026 site presents the conference as the ACM Symposium on Spatial User Interaction, with conference dates/location, news, submission information, and important deadlines. This project keeps that conference-site structure while using an original implementation and placeholder visual treatment.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Main files to edit

- `lib/content.ts` — dates and news
- `app/page.tsx` — homepage
- `components/SiteHeader.tsx` — navigation
- `components/Footer.tsx` — footer/contact links
- `app/*/page.tsx` — individual pages
- `app/globals.css` — visual design

## Before publishing

1. Replace all `XX` dates with officially approved dates.
2. Confirm the venue and accessibility/travel information.
3. Add the final organizing committee.
4. Replace placeholder Paris graphics with licensed/owned photography or custom artwork.
5. Add official submission/registration URLs.
6. Add ACM/SIGCHI branding according to current ACM branding guidance.
7. Configure your production domain, e.g. `sui.acm.org/2027/`.

## Suggested deployment

Push the project to GitHub and deploy it with Vercel or another Next.js-compatible host.

If the ACM web server requires a static deployment rather than Node hosting, this project can also be adapted to export static HTML.
