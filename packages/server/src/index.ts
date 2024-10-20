import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { logger } from "./middleware/logger";
import { shopRoutes } from "./routes/shop";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .route("/shop", shopRoutes);

export default app;
export type AppType = typeof app;
