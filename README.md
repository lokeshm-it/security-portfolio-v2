# security-portfolio-v2

A modern, enterprise-grade cybersecurity portfolio built with Next.js 15 (App Router), TypeScript (strict), Tailwind CSS and shadcn/ui-style primitives. Dark mode by default with a blue accent, glassmorphism cards and Framer Motion scroll reveals. Showcases Microsoft Security, Microsoft 365, Azure, Zero Trust and ISO 27001 projects.

This is a separate, brand-new project. It does not modify or replace any existing portfolio repository.

## Tech Stack

Next.js 15, React 19, TypeScript (strict), Tailwind CSS 3, Framer Motion, next-themes, Lucide icons, react-markdown + remark-gfm.

## Getting Started

npm install
npm run dev

Open http://localhost:3000.

Production build:

npm run build
npm run start

## Environment Variables

Copy .env.example to .env.local and set NEXT_PUBLIC_SITE_URL to your deployed domain. This value is used for canonical links, Open Graph tags and the sitemap.

## Project Structure

src/app - App Router pages: home, /projects listing, /projects/[slug] case-study template, sitemap.ts
src/components - Navbar/Footer, theme provider/toggle, shared UI primitives (Button, Card, Badge), ProjectCard, ArchitecturePlaceholder, ScreenshotGallery, MarkdownRenderer, and the homepage sections
src/lib - site.ts (identity, nav, social links), projects.ts (single source of truth for every project case study), profile.ts (metrics, focus areas, certifications, experience), utils.ts, h.ts
public/images/<slug> - per-project screenshot folders, one per project
public/images/manifest.json - generated list of screenshots per project, read by the gallery component
scripts/generate-image-manifest.mjs - scans public/images/<slug> and regenerates manifest.json

## Adding a New Project

Append a new object to the projects array in src/lib/projects.ts (slug, title, overview, tech stack, prerequisites, implementation steps, PowerShell scripts, validation, lessons learned, certification mapping, etc.). A page is generated automatically at /projects/<slug> with no extra routing work. Where real evidence is not yet available, use the COMING_SOON constant rather than inventing details.

## Screenshots

Add images to public/images/<slug>/, then run:

npm run generate:manifest

This rewrites public/images/manifest.json so the gallery on each project page picks up the new files automatically, no code changes required. The gallery supports lightbox viewing with previous/next controls.

## Deployment

Vercel (recommended): import this repository, set the NEXT_PUBLIC_SITE_URL environment variable, and deploy. vercel.json pins the framework preset and adds baseline security headers.

A GitHub Actions workflow (.github/workflows/ci.yml) runs lint, typecheck and build on every push and pull request to main.

## Scripts

npm run dev - start the dev server
npm run build - production build
npm run start - serve the production build
npm run lint - ESLint
npm run typecheck - TypeScript, no emit
npm run format - Prettier
npm run generate:manifest - regenerate public/images/manifest.json
