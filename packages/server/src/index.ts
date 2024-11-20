import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { auth } from "./lib/auth";
import { logger } from "./middleware/logger";
import { adminRoutes } from "./routes/admin";
import { shopRoutes } from "./routes/shop";
import { codegenRouter } from "./routes/codegen";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .get("/auth/*", (c) => auth.handler(c.req.raw))
  .post("/auth/*", (c) => auth.handler(c.req.raw))
  .route("/codegen", codegenRouter)
  .route("/admin", adminRoutes)
  .route("/shop", shopRoutes);

export default app;
export type AppType = typeof app;
