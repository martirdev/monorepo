import { Hono } from "hono";

import { userRoutes } from "./user";
import { clientsRoutes } from "./clients";

export const appRouter = new Hono()
  .get("/ping", (c) => c.json({ data: "pong" as const }))
  .route("/user", userRoutes)
  .route("/clients", clientsRoutes);

export type AppRouter = typeof appRouter;
