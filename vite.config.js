import {resolve} from "path"
import {sveltekit} from "@sveltejs/kit/vite"
import {adorableCSS} from "adorable-css/vite"

/** @type {import("vite").UserConfig} */
const config = {
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      strict: false
    }
  },
  plugins: [adorableCSS(), sveltekit()],
  resolve: {
    alias: {
      "src": resolve("src"),
      "packages": resolve("packages"),
    },
  }
}

export default config
