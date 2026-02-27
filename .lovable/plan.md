
# White-Label the Entire App — ✅ COMPLETED

All Behavior Frontiers-specific content has been removed and replaced with generic placeholders.
Everything is now driven by `src/config/brandConfig.ts`.

## What was done

1. **Created `src/config/brandConfig.ts`** — single source of truth for all brand data
2. **Updated `index.html`** — generic meta tags, removed GCP-hosted images
3. **Updated `src/index.css`** — switched to Inter font, added rebranding comments
4. **Updated `tailwind.config.ts`** — Inter font, added rebranding comments
5. **Refactored all components** — Header, Footer, Hero, Values, Testimonials, Benefits, Awards, Video, CareerPathways, Bulletin all import from brandConfig
6. **Refactored all pages** — Mission, Careers, BulletinDetail (replaced BulletinJanuary2026)
7. **Emptied job listings** — kept types/helpers, removed all BF-specific data
8. **Removed all BF assets** — logos, photos, PDFs, bulletin images
9. **Updated App.tsx** — dynamic bulletin route `/bulletin/:slug`

## How to rebrand

1. Edit `src/config/brandConfig.ts` — update company info, copy, data arrays
2. Add your assets to `src/assets/` and update the asset paths in brandConfig
3. Edit `src/index.css` — change HSL color values for --primary, --secondary, --accent
4. Edit the Google Fonts import in `src/index.css` + `tailwind.config.ts` font-family
5. Update `index.html` meta tags (or keep them synced with brandConfig.seo values)
