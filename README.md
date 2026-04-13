# comdevops — ABG DCD IS&CT Unit Website

Official web portal for the **Autonomous Bougainville Government — Department of Community Development (DCD)**, built and maintained by the **IS&CT Unit**.

**Live site:** https://abgee-cloud.github.io/comdevops  
**Repository:** https://github.com/abgee-cloud/comdevops.github  
**Contact:** tmaioni.dcd@abg.gov.pg

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Astro](https://astro.build) | Static site framework |
| TypeScript | Type-safe source files |
| GitHub Pages | Static hosting with SSL |
| GitHub Actions | CI/CD — auto-deploys on push to `main` |

## Quick Start (Termux)

```bash
npm install
npm run dev       # http://localhost:4321/
```

## Deploy

Push to `main` — GitHub Actions handles the rest. Live within ~2 minutes.

## Brand

| Token | Value | Use |
|---|---|---|
| `--color-primary` | `#1B3A6B` | ABG Navy |
| `--color-accent` | `#C9A84C` | ABG Gold |
| `--color-background` | `#F9F7F2` | Warm Cream |

## Key Files

| To change | Edit |
|---|---|
| Navigation | `src/data/navItems.ts` |
| Programme cards | `src/data/featuresData.ts` |
| Homepage | `src/pages/index.astro` |
| Global colours | `src/styles/global.css` |
| New page | Add `src/pages/newpage.astro` |

---

*IS&CT Unit · Department of Community Development · Autonomous Bougainville Government · Buka, AROB, Papua New Guinea*
 
 
