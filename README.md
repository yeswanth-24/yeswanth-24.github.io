# yeswanth-24.github.io

Personal portfolio — React + Vite + Tailwind CSS v4, deployed to GitHub Pages
by GitHub Actions on every push to `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Edit content

Everything on the page is data-driven — edit `src/data/projects.js`:

- `projects[]` — cards in the Projects section (`slug` is the GitHub repo name)
- `skillGroups[]` — the Skills section
- `GITHUB`, `EMAIL`, `LINKEDIN` — links used in the nav, hero and footer

Components live in `src/components/` (Nav, Hero, Projects, ProjectCard,
Skills, Contact, Footer). Design tokens (colours, fonts) are defined once in
the `@theme` block of `src/index.css`.

## Deploy

Push to `main`. In the repo settings, set **Pages → Source → GitHub Actions**
once; after that every push publishes automatically.

`legacy-static-site.html` is the original hand-written single-file version,
kept for reference and excluded from the build.
