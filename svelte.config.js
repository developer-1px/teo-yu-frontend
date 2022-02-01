import adapter from "@sveltejs/adapter-static"
import preprocess from "svelte-preprocess"
import {adorableCSS} from "adorable-css/vite-plugin-adorable-css"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    vite: {
      server:{fs: {strict:false}},
      plugins: [adorableCSS()],
    }
  }
}

if (process.env.NODE_ENV === "production") {
  config.kit.paths = {base: "/teo-yu-frontend"}
}

export default config
