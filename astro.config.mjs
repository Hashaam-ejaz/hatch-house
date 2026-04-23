// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import vercel from '@astrojs/vercel';


export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  fonts: [
    {
      name: 'Jost',
      cssVariable: '--font-jost',
      provider: fontProviders.google(),
    },
  ],

  adapter: vercel()
});