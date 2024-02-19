import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { SITE } from "./src/config.mjs";
import { builderDevTools } from "@builder.io/dev-tools/vite";

export default defineConfig(() => {
  return {
    base: SITE.basePathname,
    plugins: [
      builderDevTools(),
      qwikCity({
        trailingSlash: SITE.trailingSlash,
      }),
      qwikVite(),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
