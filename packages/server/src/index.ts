import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { logger } from "./middleware/logger";
import { user, userContext } from "./routes/user";
import { clients } from "./routes/clients";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .use("*", userContext)
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .route("/user", user)
  .route("/clients", clients);

export default app;
export type AppType = typeof app;
