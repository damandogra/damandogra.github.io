# Daman Dogra — Portfolio
🌐 https://damandogra.github.io/

A personal portfolio showcasing work in geospatial analysis, urban systems, and 3D data workflows.

---

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- GitHub Pages (deployment)

---

## File Structure

```
damandogra.github.io/
├── public/
│   └── projects/
│       └── <project-slug>/     ← images for each project
│           ├── cover.png
│           └── ...
├── src/
│   ├── components/             ← reusable UI sections
│   │   ├── About.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Projects.astro      ← renders project cards from config
│   ├── layouts/
│   │   ├── ProjectLayout.astro ← shared project page template
│   │   └── projects/           ← one file per project type
│   │       ├── pointcloud.astro
│   │       ├── transit-delhi.astro
│   │       └── WaTOD.astro
│   ├── pages/
│   │   ├── index.astro         ← homepage
│   │   └── projects/
│   │       └── [slug].astro    ← dynamic routing for all project pages
│   ├── styles/
│   │   └── global.css
│   └── config.ts               ← all site content lives here
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## Adding a New Project

All project content is defined in `src/config.ts`. The project page is rendered dynamically via `src/pages/projects/[slug].astro` — no new page file is needed.

### Step 1 — Add the project to `src/config.ts`

Add a new object to the `projects` array:

```typescript
{
  name: "Your Project Name",
  slug: "your-project-slug",        // used in the URL: /projects/your-project-slug
  type: "tech",                      // "tech" | "thesis" | "TransitDelhi"
  description: "One-line description shown on the homepage card.",
  link: "https://github.com/...",
  linklabel: "Source code",
  skills: ["Python", "Tag2", "Tag3"],
  cover: "/projects/your-project-slug/cover.png",

  summary: "Paragraph shown in the Overview section.",
  objective: "What problem were you solving?",

  methodology: [
    "Step one",
    "Step two",
    "Step three",
  ],

  analysis: [
    "Key finding 1",
    "Key finding 2",
  ],

  results: [
    "Result 1",
    "Result 2",
  ],

  resultVisuals: [
    {
      src: "/projects/your-project-slug/result.png",
      caption: "Caption for the result image."
    }
  ],

  discussion: [
    "Reflection point 1",
    "Reflection point 2",
  ],

  gallery: [
    {
      src: "/projects/your-project-slug/method.png",
      caption: "Caption for method visual."
    }
  ]
}
```

The `type` field controls which layout is used:
| Type | Layout used |
|---|---|
| `"tech"` | `src/layouts/projects/pointcloud.astro` |
| `"thesis"` | `src/layouts/projects/WaTOD.astro` |
| `"TransitDelhi"` | `src/layouts/projects/transit-delhi.astro` |

The numbering (01, 02 ...) on the homepage is automatic based on array position.

### Step 2 — Add images

Place all project images in:
```
public/projects/your-project-slug/
    cover.png        ← shown on the homepage card
    method.png
    result.png
    ...
```

### Step 3 — Push

```bash
git add .
git commit -m "Add project: Your Project Name"
git push
```

GitHub Actions will build and deploy automatically.

---

## Development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

---

## Deployment

Deployed via GitHub Pages using GitHub Actions. Every push to `main` automatically updates the site.

---

## Credits

Based on a template by Ryan Fitzgerald: https://github.com/RyanFitzgerald/devportfolio  
Modified for personal use.

---

## License

MIT License. Original license retained.
