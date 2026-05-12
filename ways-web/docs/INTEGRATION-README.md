# Motoways v3.0 — motoways-web integration bundle

**Source of truth:** [WAY-515](/WAY/issues/WAY-515) (Brand v3.0, locked 2026-05-11). This zip is a curated copy of the subset that motoways-web needs.

## Direction recap

- **Direction:** M-as-route (route polyline forms the M; "otoways" wordmark right)
- **Palette:** ink `#0a0a0a` · ink-soft `#1d1d1b` · lime accent `#c6ff00` · paper `#fafaf7` · fog `#f0eeea` · stone `#7a7770`
- **Type:** Poppins 700 italic (display) · Inter (body) · JetBrains Mono (code)
- **Accent rule:** lime is mid-waypoint only — never wash UI in lime.

## Bundle layout

```
public/                    → drop into motoways-web /public root, served from /
  favicon.svg              light favicon (auto-themed via media query)
  favicon-dark.svg         dark favicon (loaded under prefers-color-scheme:dark)
  favicon-16x16.png
  favicon-32x32.png
  favicon-48x48.png
  apple-touch-icon.png     180×180
  android-chrome-192x192.png
  android-chrome-512x512.png
  mstile-150x150.png
  site.webmanifest         already references the android-chrome icons above
  og-image.png             1200×630 (rasterized from .svg, ready for fb/linkedin/og preview)
  og-image.svg             vector source
  twitter-card.png         1200×675
  twitter-card.svg
  hero-light.svg           1920×1080 hero illustration on paper bg
  hero-dark.svg            1920×1080 hero illustration on ink bg

assets/logo/               → drop into motoways-web /assets/logo (or /public/assets/logo)
  motoways-primary.svg          horizontal lockup, light theme (header)
  motoways-primary-dark.svg     horizontal lockup, dark theme
  motoways-primary-2x.png       fallback raster (header @ 2x)
  motoways-primary-dark-2x.png
  motoways-monogram.svg         M-only, square; use for ≤120px contexts (footer, share icon)
  motoways-monogram-dark.svg
  motoways-wordmark.svg         "otoways" wordmark only (rare; co-marketing)
  motoways-wordmark-dark.svg
  motoways-stacked.svg          vertical lockup (app launch, narrow columns)
  motoways-stacked-dark.svg

tokens/                    → wire into the build
  tokens.css               CSS custom properties (drop into /public, import once in root)
  tailwind.motoways.js     extend block — merge into tailwind.config.js
  colors.json              reference table (Pantone/CMYK/RGB) — design doc, not runtime

docs/                      → integration snippets (paste into the right place)
  head-snippet.html        complete <head> block (favicon + OG + Twitter + fonts + tokens)
  header-logo-snippet.html header/footer logo markup
  hero-snippet.html        landing hero markup with dark-mode <picture>
  favicon-snippet.html     legacy snippet (kept for reference; head-snippet.html supersedes)
```

## Integration steps for motoways-web

1. **Replace files in `/public`** with every file from `public/` above. Delete pre-v3.0 favicon/og/hero files in the same commit (`favicon.ico`, old `og-image*.png`, old `hero*.{png,svg}`).
2. **Replace `/assets/logo`** (or whatever path the current header uses) with files from `assets/logo/`. Update any `<img src>` / `import` references to the new filenames; delete W-direction logos.
3. **Wire tokens:**
   - Copy `tokens/tokens.css` to `/public/tokens.css` and `<link rel="stylesheet" href="/tokens.css">` (already in head-snippet).
   - In `tailwind.config.js`, merge `tokens/tailwind.motoways.js` into `theme.extend` (colors + fontFamily). The `motoways-*` colors then become `bg-motoways-ink`, `text-motoways-lime`, etc.
4. **Replace head metadata** with `docs/head-snippet.html` (favicons + OG + Twitter + fonts + tokens import). Keep any non-brand meta (canonical, GA, hreflang, etc.) unchanged.
5. **Header/footer logo:** swap markup per `docs/header-logo-snippet.html`. If the site already has a `<Logo>` component, just point its asset import at `motoways-primary.svg` (+ `-dark.svg`).
6. **Hero:** swap the landing hero per `docs/hero-snippet.html`. If the existing hero has CTAs/copy overlays, keep that scaffolding; only replace the W-direction visual with `motoways-primary.svg` + `motoways-lime` accent, OR drop in `hero-light.svg` / `hero-dark.svg` whole.
7. **Lighthouse:** before promoting to prod, run mobile Lighthouse on the Vercel preview. Targets: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO ≥95. If Performance dips below 95, check that:
   - PNGs aren't being shipped where SVGs would do (favicons, hero, logo).
   - Fonts use `display=swap` (already in head-snippet).
   - OG image is referenced as absolute URL (Facebook validator requires it).
8. **Verify previews:** paste `https://<vercel-preview>.vercel.app/` into the FB/LinkedIn/Twitter share validators to confirm OG/twitter cards render the v3.0 image.
9. **Promote** preview → production. Verify on `www.motoways.cz` that:
   - Browser tab favicon is the M-as-route monogram.
   - Header/footer show v3.0 horizontal lockup.
   - Sharing the URL on any platform shows v3.0 OG image.
   - No pre-v3.0 W-direction assets remain (grep for old asset names; search rendered HTML for old `<img>` srcs).

## Definition of done (per WAY-550)

- [ ] All files in `public/` and `assets/logo/` deployed to `motoways-web`.
- [ ] `tokens.css` referenced in `<head>`; Tailwind extend merged.
- [ ] `<head>` block matches `docs/head-snippet.html` (favicons, OG, Twitter, fonts).
- [ ] Lighthouse mobile a11y + perf ≥ 95 on the Vercel preview.
- [ ] Vercel preview reviewed by Visual Designer before promote.
- [ ] Production verified at `https://www.motoways.cz/` (visual + share previews).
- [ ] Screenshot/URL posted as a comment on WAY-550.
