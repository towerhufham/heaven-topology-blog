import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(), 
    mdx(), 
    sitemap(), 
    prefetch({
      //prefetch all links unless they were given the no-prefetch attribute
      selector: "a:not([no-prefetch])"
    })
  ],
  site: "https://heaventopology.com"
});