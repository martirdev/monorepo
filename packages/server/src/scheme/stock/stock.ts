import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

import { productVariants } from "../products";

export const stock = pgTable("Stock", {
  id: uuid("id").defaultRandom().primaryKey(),
  sku: text("sku").notNull(),
  productVariantId: uuid("product_variant_id")
    .notNull()
    .references(() => productVariants.id)
    .unique(),
  stockedQuantity: integer("stocked_quantity").notNull().default(0),
  reservedQuantity: integer("reserved_quantity ").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export const stockItem = pgTable("Stock item", {
  id: uuid("id").defaultRandom().primaryKey(),
  stockedQuantity: integer("stocked_quantity").notNull().default(0),
  reservedQuantity: integer("reserved_quantity").notNull().default(0),
  stockId: uuid("stock_id")
    .notNull()
    .references(() => stock.id),
});
