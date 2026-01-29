// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://dungeon-notes.example.com',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
