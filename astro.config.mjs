// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://ffxiv.wtf',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
