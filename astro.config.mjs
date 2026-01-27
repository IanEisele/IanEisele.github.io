// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://ianeisele.com',
  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: [
          'arrow-left',
          'calendar',
          'check',
          'chevron-down',
          'code-2',
          'external-link',
          'file-text',
          'github',
          'linkedin',
          'menu',
          'pizza',
          'tag',
          'x',
        ],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
