import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

const _plugins = [mkcert(), svgr(), react()];
_plugins.unshift(MillionLint.vite());
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: _plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@server": fileURLToPath(new URL("../server/src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/api": {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          target: env.API_URL,
          ws: true,
        },
      },
    },
  };
});
