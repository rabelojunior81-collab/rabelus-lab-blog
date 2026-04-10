import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rabelus.com.br',
  integrations: [sitemap()],
  output: 'static',
});
