import { Hono } from "hono";
import { cors } from "hono/cors";
import { requestId } from "hono/request-id";

import { appRouter } from "./routes/app";
import { logger } from "./middleware/logger";
import { userContext } from "./routes/user";

const app = new Hono()
  .use(cors())
  .use(requestId())
  .use(logger())
  .use("*", userContext)
  .route("/", appRouter);

export default app;
