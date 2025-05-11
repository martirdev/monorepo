import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const orders = pgTable("Orders", {
  id: uuid("id").defaultRandom().primaryKey(),
  clientId: uuid("client_id").notNull(),

  totalAmount: numeric("total_amount").notNull(),

  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const statuses = pgTable("Statuses", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const orderStatuses = pgTable("Order statuses", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderId: uuid("order_id").notNull(),
  statusId: uuid("status_id").notNull(),

  comment: text("comment"),

  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const orderProducts = pgTable("Order products", {
  id: uuid("id").defaultRandom().primaryKey(),
  orderId: uuid("order_id").notNull(),
  productId: uuid("product_id").notNull(),
  priceId: uuid("price_id").notNull(),

  quantity: integer("quantity").notNull().default(1),

  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  removedAt: timestamp("removed_at", { mode: "date", precision: 0 }),
});
