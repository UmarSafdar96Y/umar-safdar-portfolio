# Umar Safdar — Portfolio

Personal portfolio site for Umar Safdar, Lead Flutter Developer. Live at
**https://umarsafdar96y.github.io/umar-safdar-portfolio/**.

Built with [Astro](https://astro.build) and Tailwind CSS, based on the MIT-licensed
[devportfolio](https://github.com/RyanFitzgerald/devportfolio) template by Ryan Fitzgerald.

## Editing content

All content lives in [`src/config.ts`](src/config.ts): bio, stats, skills, experience, projects,
App Store apps, certifications and education. Remove an entry (or empty a list) to hide that section.

App icons are stored in [`public/apps/`](public/apps/). To add an app, drop a square icon there
(256×256 works well) and add an entry under `apps.items`.

## Development

```bash
npm install
npm run dev       # http://localhost:4321/umar-safdar-portfolio/
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Deployment

Every push to `main` builds and deploys to GitHub Pages via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To use a custom domain, set `site` in [`astro.config.mjs`](astro.config.mjs) to the domain, remove
`base`, add a `public/CNAME` file containing the domain, and configure DNS as described in
GitHub's Pages custom-domain docs.
