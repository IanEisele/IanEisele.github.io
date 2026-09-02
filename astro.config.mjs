// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ianeisele.com',
  prefetch: true,
  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: [
          'calendar',
          'check',
          'chevron-down',
          'external-link',
          'file-text',
          'github',
          'linkedin',
          'menu',
          'x',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
