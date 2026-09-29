# AGENTS.md

## Project overview
This repository is a Vue 3 single-page marketing site for a music academy in Córdoba, Spain. The app is mostly static and route-driven, with each page implemented as a view under `src/views/` and navigation configured in `src/router/index.js`.

## Key commands
- Install dependencies: `npm install`
- Start dev server: `npm run serve` (opens the browser on port 8080)
- Production build: `npm run build`
- Lint: `npm run lint`
- There is no test script or test runner. `lintOnSave` is disabled, so run lint explicitly.

## Architecture and conventions
- `src/main.js` mounts the app, installs the router, and imports `main.css`; `src/App.vue` composes the shared shell and reusable site components.
- `src/views/` contains page-level components. Routes import views directly in `src/router/index.js`; keep route paths, navigation, and each view's page metadata coherent.
- The router handles scroll behavior and virtual SPA page-view tracking. Check both `scrollBehavior` and `afterEach` when changing navigation behavior.
- CSS in `src/assets/css/` is plain and generally imported globally; reusable components may also use scoped styles. Global styles are split between `main.css` and `App.vue`.
- `public/data/` contains runtime JSON for pricing and scheduling. Pricing is shared across the prices/home/class-pricing views; schedule data is used on Home.
- `public/index.html` is more than a Netlify form mirror: it contains default/static SEO metadata, canonical and JSON-LD data, the initial cookie-consent setup before GTM, and hidden Netlify forms. Keep its form fields in sync with Vue form views.

## Important project-specific rules
- Prefer small, targeted edits in the relevant Vue view or component; this project is intentionally simple and flat.
- Keep marketing content, prices, and schedules in the data files or in the relevant view instead of creating a backend.
- For any form change, update/check both the Vue form and its hidden Netlify form in `public/index.html`; keep submitted field names aligned.
- Respect the analytics/consent flow: `src/utils/track.js` pushes events to `dataLayer`; the consent default and restoration happen in `public/index.html` before GTM, while `src/components/CookieConsent.vue` handles the user's choice.
- `src/utils/seo.js` updates the page title, description, and social title/description. `setCanonical(route)` (called from the router's `afterEach`) updates the canonical link and `og:url`; MusicSchool/LocalBusiness JSON-LD is static in `public/index.html`, while the FAQPage JSON-LD is generated in `FrequentlyAskedQuestions.vue` from its `faqs` data. Update the right layer when changing SEO.
- Do not add backend dependencies or database logic unless explicitly requested; this project is static and deploys to Netlify.

## Documentation to consult
- Project overview and setup: [README.md](README.md)
- Measurement plan and analytics details: [docs/plan-medicion.md](docs/plan-medicion.md)

## Quality bar for AI-assisted changes
- Keep the app accessible and responsive; most styling is mobile-first and CSS-driven.
- Use the existing naming patterns and Spanish route slugs when adding pages or navigation.
- Run `npm run lint` after Vue/JS edits and `npm run build` for meaningful application changes; lint does not run automatically on save.
- There is no dedicated test suite in this repository.

## When adding features
- Prefer editing the existing route/view structure instead of introducing a framework or state-management layer.
- If you add a content field or data element, ensure it is reflected in the relevant JSON or page and that the route metadata remains coherent.
- Keep commit-sized changes scoped to one concern at a time.
