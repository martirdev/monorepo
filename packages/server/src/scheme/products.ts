import { relations } from "drizzle-orm";
import { decimal, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { orderItems } from "./orders";

export const products = pgTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price"),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const params = pgTable("params", {
  id: text("id").primaryKey(),
  productId: text("product_id")
    .notNull()
    .references(() => products.id, { onDelete: "cascade" }),
  name: text("name").notNull(),
  value: text("value").notNull(),
});

export const productsRelations = relations(products, ({ many }) => ({
  params: many(params),
  orderItems: many(orderItems),
}));

export const paramsRelations = relations(params, ({ one }) => ({
  product: one(products, {
    fields: [params.productId],
    references: [products.id],
  }),
}));
