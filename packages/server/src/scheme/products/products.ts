import {
  boolean,
  integer,
  json,
  numeric,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { images } from "../images";

export const products = pgTable("Products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const productVariants = pgTable("Product variants", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  meta: json("meta"),

  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),

  productId: uuid("product_id").notNull(),
  packageId: uuid("package_id"),
  categoryId: uuid("category_id"),
  lastPriceId: uuid("last_price_id"),
});

export const productCategories = pgTable("Product categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  isActive: boolean("is_active").default(true),
  meta: json("meta"),

  parentCategoryId: uuid("parent_category_id"),
});

export const productVariantToImages = pgTable(
  "Product variant to images",
  {
    productVariantId: uuid("product_variant_id")
      .notNull()
      .references(() => productVariants.id),
    imageId: uuid("image_id")
      .notNull()
      .references(() => images.id),
  },
  (t) => ({ pk: primaryKey({ columns: [t.productVariantId, t.imageId] }) })
);

export const productPackages = pgTable("Product packages", {
  id: uuid("id").defaultRandom().primaryKey(),
  width: integer("width"),
  height: integer("height"),
  length: integer("length"),
  weight: integer("weight"),

  productVariantId: uuid("product_variant_id").notNull(),
});

export const productParams = pgTable("Product params", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
});

export const productParamValues = pgTable("Product param values", {
  id: uuid("id").defaultRandom().primaryKey(),
  value: text("value").notNull(),

  paramId: uuid("param_id").notNull(),
});

export const productVariantsToProductParamValues = pgTable(
  "Product variant to product param values",
  {
    productVariantId: uuid("product_variant_id")
      .notNull()
      .references(() => productVariants.id),
    productParamValueId: uuid("product_param_value_id")
      .notNull()
      .references(() => productParamValues.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productVariantId, t.productParamValueId] }),
  })
);

export const productVariantPrices = pgTable("Product variant prices", {
  id: uuid("id").defaultRandom().primaryKey(),
  price: numeric("price", { precision: 2 }).notNull(),

  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),

  productVariantId: uuid("product_variant_id")
    .notNull()
    .references(() => productVariants.id),
});
