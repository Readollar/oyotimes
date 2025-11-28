// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import readingTime from 'astro-reading-time'; // 1. Import it
import sitemap from "@astrojs/sitemap"; // 1. Import it

// https://astro.build/config
export default defineConfig({
  site: 'https://oyotimes.netlify.app',
  integrations: [tailwind(), react(), mdx(), sitemap(), readingTime()],
});
