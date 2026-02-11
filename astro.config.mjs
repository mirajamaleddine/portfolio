// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://mirajamaleddine.github.io',
  base: '/', // ONLY if project repo
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
})
