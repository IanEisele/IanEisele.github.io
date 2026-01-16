# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio/resume website for Ian Eisele (IanEisele.github.io), built with Astro and Tailwind CSS v4. It's a modern, dark-themed single-page application with smooth animations.

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
├── components/
│   ├── Header.astro           # Sticky nav with smooth scroll links
│   ├── Footer.astro           # Footer with social links
│   └── sections/              # Page sections
│       ├── Hero.astro
│       ├── About.astro
│       ├── Experience.astro
│       ├── Skills.astro
│       ├── Projects.astro
│       └── Contact.astro
├── layouts/
│   └── BaseLayout.astro       # SEO, View Transitions, meta tags
├── styles/
│   └── global.css             # Tailwind v4 + custom theme
├── data/                      # JSON files for easy content updates
│   ├── experience.json
│   ├── skills.json
│   └── projects.json
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

## Updating Content

To update portfolio content, edit the JSON files in `src/data/`:
- `experience.json` - Work history timeline
- `skills.json` - Skill categories and badges
- `projects.json` - Project cards

The components automatically render from these data files.

## Deployment

Deployed via GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages.
The site is served at https://ianeisele.com via the CNAME in `public/`.
