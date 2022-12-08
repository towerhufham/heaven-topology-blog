import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  extract: {
    include: ['./src/**/*.{vue,svelte,html,mdx,jsx,tsx,astro}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [require('windicss/plugin/typography')],
});