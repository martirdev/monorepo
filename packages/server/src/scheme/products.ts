import { relations } from "drizzle-orm";
import {
  decimal,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const masterProducts = pgTable("master_products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: decimal("price"),
  count: integer("count"),
  masterProductId: uuid("master_product_id").notNull(),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const masterProductsRelations = relations(
  masterProducts,
  ({ many }) => ({
    products: many(products),
  })
);

export const productsRelations = relations(products, ({ one, many }) => ({
  productToParams: many(productToParams),
  masterProduct: one(masterProducts, {
    fields: [products.masterProductId],
    references: [masterProducts.id],
  }),
}));

export const params = pgTable("params", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  value: text("value").notNull(),
});

export const paramsRelations = relations(products, ({ many }) => ({
  productToParams: many(productToParams),
}));

export const productToParams = pgTable(
  "product_params",
  {
    productId: uuid("product_id")
      .notNull()
      .references(() => products.id),
    paramId: uuid("param_id")
      .notNull()
      .references(() => params.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.paramId] }),
  })
);

export const productToParamsRelations = relations(
  productToParams,
  ({ one }) => ({
    params: one(params, {
      fields: [productToParams.paramId],
      references: [params.id],
    }),
    products: one(products, {
      fields: [productToParams.productId],
      references: [products.id],
    }),
  })
);
