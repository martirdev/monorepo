import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { logger } from "./middleware/logger";
import { shopRoutes } from "./routes/shop";
import { auth } from "./lib/auth";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .get("/auth/*", (c) => auth.handler(c.req.raw))
  .post("/auth/*", (c) => auth.handler(c.req.raw))
  .route("/shop", shopRoutes);

export default app;
export type AppType = typeof app;
