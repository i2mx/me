import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://i2mx.github.io',
  base: '/me',
  integrations: [tailwind()]
});