import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import mkcert from "vite-plugin-mkcert";
import svgr from "vite-plugin-svgr";

function callByParam<T>(needToCall: boolean, callback: () => T) {
  return needToCall ? callback() : undefined;
}

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const plugins = [
    callByParam(!isProduction, () => MillionLint.vite()),
    callByParam(!isProduction, () => mkcert()),
    svgr(),
    react(),
  ].filter(Boolean);

  return {
    plugins,
    preview: {
      port: 8080,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "@server": fileURLToPath(new URL("../server/src", import.meta.url)),
      },
    },
    server: {
      host: true,
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
