# Daman Dogra — Portfolio

🌐 Live: https://damandogra.github.io/

A personal portfolio showcasing projects in geospatial analysis, urban systems, and 3D data workflows. Built to communicate complex spatial narratives through clean visuals and structured data pipelines.

---

## Overview

This portfolio presents selected work across:

* 3D point cloud classification and processing
* Geospatial data engineering (PostGIS, QGIS workflows)
* Urban and regional energy systems analysis
* Decision-support tools for spatial planning

The site is designed to be minimal, fast, and highly visual, with project pages structured to clearly communicate methodology and results.

---

## Tech Stack

* **Astro** — static site generation
* **Tailwind CSS** — styling
* **TypeScript** — configuration
* **GitHub Pages + Actions** — deployment

---

## Project Structure

```
.
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Routes
│   ├── styles/          # Global styles
│   └── config.ts        # Site content (projects, skills, etc.)
├── astro.config.mjs     # Astro config
├── package.json
└── tsconfig.json
```

---

## Configuration

All portfolio content is managed through:

```text
src/config.ts
```

This file controls:

* Personal info (name, title, description)
* Social links
* Skills
* Projects (including descriptions, links, and tags)
* Experience and education

This allows easy updates without touching UI components.

---

## Local Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/damandogra/damandogra.github.io.git
cd damandogra.github.io
npm install
```

Run development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment

This site is deployed using **GitHub Pages with GitHub Actions**.

* Every push to `main` triggers a build
* The site is automatically deployed to:

```text
https://damandogra.github.io/
```

---

## Customization

To adapt this portfolio:

1. Update `src/config.ts` with your content
2. Replace images in `/public`
3. Modify components in `/src/components` if needed
4. Adjust styles in `/src/styles/global.css`

---

## Credits

This portfolio is based on the following template:

Ryan Fitzgerald — DevPortfolio
https://github.com/RyanFitzgerald/devportfolio

The template has been significantly modified and extended for personal use.

---

## License

This project is licensed under the MIT License.
The original license from the template has been retained.

---

## Contact

* LinkedIn: https://www.linkedin.com/in/daman-dogra/
* GitHub: https://github.com/damandogra

---
