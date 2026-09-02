# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/resume website for Ian Eisele (IanEisele.github.io), built with Astro and Tailwind CSS v4. It's a modern, dark-themed site featuring a single-page portfolio with smooth animations.

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
│       ├── Publications.astro
│       └── Contact.astro
├── layouts/
│   └── BaseLayout.astro       # SEO, View Transitions, meta tags
├── styles/
│   └── global.css             # Tailwind v4 + custom theme
├── data/                      # JSON files for easy content updates
│   ├── profile.json
│   ├── experience.json
│   ├── skills.json
│   └── publications.json
└── pages/
    └── index.astro            # Single-page portfolio
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

Portfolio images live in `src/assets/images/` and are imported in Astro components, which gives them automatic optimization (resizing, format conversion, lazy loading).

## Updating Content

**Portfolio content** - edit JSON files in `src/data/`:
- `profile.json` - Name, headline, bio, stats, contact links
- `experience.json` - Work history timeline
- `skills.json` - Skill categories and badges
- `publications.json` - Publications and application notes

The components automatically render from these data files.

## Deployment

Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.
The site is served at https://ianeisele.com via the CNAME in `public/`.
