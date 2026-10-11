# Daman Dogra — Portfolio

🌐 https://damandogra.github.io/

Personal portfolio covering geospatial data pipelines, point cloud processing, 3D city and subsurface models, and urban spatial analysis.

---

## Tech stack

- [Astro 5](https://astro.build) (static site, optimised images)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript
- IBM Plex Mono, self-hosted via `@fontsource`
- GitHub Pages and GitHub Actions for deployment

Features include a responsive layout with a mobile menu, an image lightbox, an "On this page" navigation on project pages, a sitemap, Open Graph/Twitter preview cards and a 404 page.

---

## File structure

```
├── public/                     ← served as-is (favicons, og.png, robots.txt)
├── src/
│   ├── assets/
│   │   ├── portrait.png        ← hero portrait
│   │   └── projects/<slug>/    ← project images (optimised at build time)
│   ├── components/             ← homepage sections and shared UI
│   ├── layouts/
│   │   ├── BaseLayout.astro    ← <head>, SEO tags, header and footer
│   │   └── ProjectLayout.astro ← single template for every project page
│   ├── lib/images.ts           ← resolves "/projects/..." paths to optimised images
│   ├── pages/
│   │   ├── index.astro         ← homepage
│   │   ├── 404.astro
│   │   └── projects/[slug].astro
│   ├── styles/global.css       ← colour tokens, fonts, base styles
│   └── config.ts               ← ALL site content lives here
└── astro.config.mjs
```

---

## Editing content

All text lives in **`src/config.ts`**: name, bio, skills, projects, experience and education.

### Add a project

1. Put images in `src/assets/projects/<your-slug>/`.
2. Add an entry to `projects` in `src/config.ts`:

```ts
{
  name: "Project name",
  slug: "your-slug",                 // URL: /projects/your-slug/
  type: "tech",                      // "tech" | "thesis" | "web"
  description: "One-line summary for the card and SEO.",
  link: "https://github.com/...",
  linkLabel: "Source code",
  demo: "https://...",               // optional live demo / report
  demoLabel: "Open live map",
  skills: ["Python", "QGIS"],
  cover: "/projects/your-slug/cover.jpg",

  // Every section below is optional and only shows when filled in.
  summary: "…",
  context: "…",
  objective: "…",
  methodology: ["Step 1", "Step 2"],
  data: ["…"],
  process: ["…"],
  analysis: ["…"],
  results: ["…"],
  discussion: ["…"],

  // Visuals: an image path, or { src, caption }
  methodologyVisuals: [{ src: "/projects/your-slug/method.png", caption: "…" }],
  resultVisuals: [{ src: "/projects/your-slug/result.png", caption: "…" }],
  gallery: [{ src: "/projects/your-slug/extra.png", caption: "…" }],
}
```

Image paths are checked at build time. A typo fails the build with a clear message.

### Change colours

Edit the CSS variables at the top of `src/styles/global.css` (`--accent`, etc.).

---

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # production build in dist/
npm run preview   # serve the build locally
npm run check     # type-check
```

---

## Deployment

Deployed to GitHub Pages with GitHub Actions (`.github/workflows/deploy.yml`). Every push to `main` updates the site.

---

## Credits

Originally based on [devportfolio](https://github.com/RyanFitzgerald/devportfolio) by Ryan Fitzgerald, since redesigned and extended.

## License

MIT License. The original license is retained in `LICENSE.md`.
