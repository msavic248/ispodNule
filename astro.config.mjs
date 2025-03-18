// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), icon()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: node({
    mode: 'standalone'
  })
});