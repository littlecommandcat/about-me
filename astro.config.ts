import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cmdcat.com',
  output: 'static',
  integrations: [sitemap()],
});