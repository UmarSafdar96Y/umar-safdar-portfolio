// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site. With a custom domain, set `site` to it and remove `base`.
  site: "https://umarsafdar96y.github.io",
  base: "/umar-safdar-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});
