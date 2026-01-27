# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/resume website for Ian Eisele (IanEisele.github.io), built with Astro and Tailwind CSS v4. It's a modern, dark-themed site featuring a single-page portfolio with smooth animations and a pizza blog section.

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

**Astro-based static site** with the following structure:

```
src/
├── assets/
│   └── images/                # Portfolio images (Astro-optimized)
├── components/
│   ├── Header.astro           # Sticky nav with smooth scroll links
│   ├── Footer.astro           # Footer with social links
│   └── sections/              # Portfolio page sections
│       ├── Hero.astro
│       ├── About.astro
│       ├── Experience.astro
│       ├── Skills.astro
│       ├── Projects.astro
│       └── Contact.astro
├── content/
│   ├── config.ts              # Content collection schemas
│   └── pizza/                 # Pizza blog posts (markdown)
├── layouts/
│   └── BaseLayout.astro       # SEO, View Transitions, meta tags
├── styles/
│   └── global.css             # Tailwind v4 + custom theme
├── data/                      # JSON files for easy content updates
│   ├── experience.json
│   ├── skills.json
│   └── projects.json
└── pages/
    ├── index.astro            # Single-page portfolio
    └── pizza/
        ├── index.astro        # Blog listing page
        └── [...slug].astro    # Individual post pages
```

**Key dependencies:**
- Astro 5 - Static site generator with View Transitions
- Tailwind CSS v4 - Via Vite plugin
- astro-icon + @iconify-json/lucide - Icon components

## Color Theme

| Element | Value |
|---------|-------|
| Background | `#0d0d0f` (near black) |
| Surface/Cards | `#1a1a1f` (dark gray) |
| Primary Accent | `#f59e0b` (amber-500) |
| Text Primary | `#f5f5f5` |
| Text Secondary | `#a3a3a3` |

Colors are defined as CSS custom properties in `src/styles/global.css`.

## Images

Images are organized separately for portfolio and blog content:

| Section | Location | Usage |
|---------|----------|-------|
| Portfolio | `src/assets/images/` | Import in components for Astro optimization |
| Pizza blog | `public/images/pizza/` | Reference by URL path in frontmatter |

**Portfolio images** are imported in Astro components and benefit from automatic optimization (resizing, format conversion, lazy loading).

**Pizza blog images** use simple URL paths in frontmatter (e.g., `heroImage: "/images/pizza/my-pizza.jpg"`). These are served directly from the `public/` directory.

## Pizza Blog

The site includes a pizza blog section at `/pizza` using Astro's content collections.

**Content collection schema** (`src/content/config.ts`):
- `title` (required) - Post title
- `description` (required) - Short description for listings
- `publishDate` (required) - Publication date
- `heroImage` (optional) - URL path to image in `public/images/pizza/`
- `tags` (optional) - Array of tag strings

**Adding new posts:**
1. Create a new `.md` file in `src/content/pizza/`
2. Add images to `public/images/pizza/`
3. Add frontmatter with required fields:
   ```yaml
   ---
   title: "My Pizza Post"
   description: "A description of this post"
   publishDate: 2024-01-15
   heroImage: "/images/pizza/my-image.jpg"
   tags: ["neapolitan", "homemade"]
   ---
   ```
4. Write post content in markdown below the frontmatter

**URL structure:**
- `/pizza` - Blog listing page
- `/pizza/[slug]` - Individual posts (slug derived from filename)

## Updating Content

**Portfolio content** - edit JSON files in `src/data/`:
- `experience.json` - Work history timeline
- `skills.json` - Skill categories and badges
- `projects.json` - Project cards

**Pizza blog posts** - add/edit markdown files in `src/content/pizza/`

The components automatically render from these data files.

## Deployment

Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.
The site is served at https://ianeisele.com via the CNAME in `public/`.
