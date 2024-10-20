import { Hono } from "hono";
import { productsRouter } from "./products";
import { codegenRouter } from "./codegen";

export const shopRoutes = new Hono()
  .route("/products", productsRouter)
  .route("/codegen", codegenRouter);

export type AppRouter = typeof shopRoutes;
