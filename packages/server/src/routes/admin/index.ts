import { Hono } from "hono";
import { productsRouter } from "./products";
import { categoriesRouter } from "./categories";
import { clientsRouter } from "./clients";
import { inventoryRouter } from "./inventory";
import { pricesRouter } from "./price";
import { ordersRouter } from "./orders";

export const adminRoutes = new Hono()
  .route("/products", productsRouter)
  .route("/clients", clientsRouter)
  .route("/categories", categoriesRouter)
  .route("/inventory", inventoryRouter)
  .route("/prices", pricesRouter)
  .route("/orders", ordersRouter);

export type AppRouter = typeof adminRoutes;
