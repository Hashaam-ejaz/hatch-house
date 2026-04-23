// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import vercel from '@astrojs/vercel';


export default defineConfig({
  output: 'server',
  adapter: vercel(),

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
});