
# White-Label the Entire App

## Overview
Create a single `brandConfig.ts` file that centralizes every brand-specific value, then update all components and pages to import from it instead of using hardcoded strings, images, and data. Remove all Behavior Frontiers-specific content and replace with generic placeholder defaults.

---

## Step 1: Create `src/config/brandConfig.ts`

A single source of truth containing:

- **Company**: name, shortName, tagline, description, founderName, founderTitle, founderQuote, address, mainWebsiteUrl, copyrightHolder
- **Assets**: logoColor, logoWhite, heroImage, teamImage, founderImage (import paths)
- **Colors** (documented, but actual values stay in `index.css` -- the config just documents what to change)
- **Font**: googleFontUrl, fontFamily
- **SEO**: pageTitle, metaDescription, ogImage, favicon
- **Nav**: links array, ctaLabel
- **Hero**: headline, highlightedWord, subheadline, primaryCta, secondaryCta
- **Values**: array of { icon, title, description, highlights }
- **Stats/Milestones**: array of { icon, number, label, description }
- **Testimonials**: array of { quote, name, role, tenure, initials }
- **Benefits**: categories array, highlights array, testimonialQuote
- **Career Pathway**: steps array (title, description, perks)
- **Videos**: array of { title, description, embedId }
- **Bulletin/Newsletter**: section title, featured item, bulletin items, archive entries
- **Timeline** (Mission page): events array
- **Job listings**: array or empty array with applyUrl base
- **Referral program**, **CEO message**, and all bulletin page content
- **Footer**: description, quickLinks, connectText

All values will default to generic placeholders (e.g., "Your Company", lorem-style descriptions, empty arrays for jobs).

---

## Step 2: Update `index.html`

Replace hardcoded:
- `<title>` with a generic placeholder
- All `<meta>` content (description, og:title, og:image, twitter, favicon)
- Remove GCP-hosted BF-specific image URLs

---

## Step 3: Update `src/index.css`

- Change font import from Montserrat to a CSS variable/comment noting it's configurable
- Add comments marking which HSL values to change for rebranding
- No structural changes needed -- colors are already tokenized via CSS variables

---

## Step 4: Update all components to import from `brandConfig`

Each file gets its hardcoded strings and data replaced:

| File | What changes |
|------|-------------|
| `Header.tsx` | Logo import, alt text, nav links, CTA label |
| `Footer.tsx` | Logo import, description, copyright, main website URL |
| `HeroSection.tsx` | Hero image import, headline, subheadline, CTA labels |
| `ValuesSection.tsx` | Section header, values array, quote |
| `TestimonialsSection.tsx` | Testimonials array, section header copy |
| `BenefitsSection.tsx` | Benefits data, quote attribution |
| `AwardsSection.tsx` | Stats/milestones array, section header |
| `VideoSection.tsx` | Videos array, section description |
| `CareerPathways.tsx` | Career steps array, section header |
| `BulletinSection.tsx` | Bulletin items, newsletter archive, section header |
| `Mission.tsx` | Timeline events, founder bio, YouTube embed, all copy |
| `Careers.tsx` | Hero copy, "Why us" perks, CTA copy |
| `BulletinJanuary2026.tsx` | Entire page content (or remove/make optional) |

---

## Step 5: Replace/remove brand-specific assets

- Replace `src/assets/bf-logo-color.png` and `bf-logo-white.png` with generic placeholder SVGs
- Replace `hero-zipline.jpg`, `team-celebration.jpg`, `helen-mader.jpg`, `training-summit.jpg` with placeholder images (use `/placeholder.svg` or Unsplash-style generic images)
- Remove `src/assets/bulletin/` directory content
- Remove `src/assets/newsletter-*.jpg` files
- Remove PDFs from `public/newsletters/`

---

## Step 6: Clean up job listings

- Empty the `jobListings` array in `src/data/jobListings.ts` (keep the type/interface and helper functions)
- Remove all Jobvite URLs
- Add a comment: "Populate with your job listings"

---

## Step 7: Make bulletin page optional

- Keep the `BulletinJanuary2026.tsx` route but replace all BF-specific content with brandConfig references, or remove the page entirely and keep just the bulletin section on the homepage as a template
- Remove BF-specific employee names, shout-outs, and CEO quotes

---

## Step 8: Update `tailwind.config.ts`

- Add a comment block at the top documenting the font family swap point
- No structural changes (already tokenized)

---

## Technical Notes

- The `brandConfig.ts` file uses TypeScript interfaces so adopters get autocomplete and type safety
- All image imports will use a `placeholder.svg` fallback
- The config file will include inline comments explaining each field
- Components will destructure from the config, keeping JSX clean
- The bulletin sub-page will be converted to a generic "newsletter detail" template

---

## Files Created
1. `src/config/brandConfig.ts` -- central config

## Files Modified
1. `index.html` -- generic meta tags
2. `src/index.css` -- add rebranding comments
3. `src/components/Header.tsx`
4. `src/components/Footer.tsx`
5. `src/components/HeroSection.tsx`
6. `src/components/ValuesSection.tsx`
7. `src/components/TestimonialsSection.tsx`
8. `src/components/BenefitsSection.tsx`
9. `src/components/AwardsSection.tsx`
10. `src/components/VideoSection.tsx`
11. `src/components/CareerPathways.tsx`
12. `src/components/BulletinSection.tsx`
13. `src/pages/Mission.tsx`
14. `src/pages/Careers.tsx`
15. `src/pages/BulletinJanuary2026.tsx`
16. `src/data/jobListings.ts`
17. `tailwind.config.ts` -- add comments

## Files Removed
- Brand-specific images and PDFs (replaced with placeholders)
