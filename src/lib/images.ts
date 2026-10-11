import type { ImageMetadata } from "astro";
import type { Figure, Visual } from "../config";

/**
 * Project images live in src/assets/projects/ so Astro can optimise them
 * (resize + WebP). In config.ts they are referenced as "/projects/<slug>/<file>".
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/projects/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true },
);

export function resolveImage(path: string): ImageMetadata {
  const key = `/src/assets${path.startsWith("/") ? path : `/${path}`}`;
  const found = images[key];
  if (!found) {
    throw new Error(
      `Image "${path}" not found. Put it in src/assets${path} (paths in config.ts start with /projects/...).`,
    );
  }
  return found.default;
}

export function toFigure(visual: Visual): Figure {
  return typeof visual === "string" ? { src: visual, caption: "" } : visual;
}
