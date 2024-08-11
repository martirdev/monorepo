import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/scheme/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DB_POSTGRESS_URL,
  },
  strict: true,
  verbose: true,
});
