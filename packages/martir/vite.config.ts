import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      mdx({
        providerImportSource: "@mdx-js/react",
      }),
      react(),
      svgr({
        include: "**/*.svg",
      }),
    ],
    server: {
      host: true,
      proxy: {
        "/api": {
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
          secure: false,
          target: env.SERVER_URL,
        },
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});
