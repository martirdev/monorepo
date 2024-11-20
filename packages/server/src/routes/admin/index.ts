import { Hono } from "hono";
import { productsRouter } from "./products";

export const adminRoutes = new Hono().route("/products", productsRouter);

export type AppRouter = typeof adminRoutes;
