// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maciekmalachowski.pl',
  // English at `/`, Polish at `/pl/`. SEO-friendly localized routes.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
