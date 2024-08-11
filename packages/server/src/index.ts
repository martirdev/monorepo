import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { logger } from "./middleware/logger";
import { user } from "./routes/user";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .route("/user", user);

export default app;
export type AppType = typeof app;
