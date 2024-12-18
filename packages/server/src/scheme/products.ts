import { relations } from "drizzle-orm";
import {
  boolean,
  decimal,
  integer,
  json,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const productRelations = relations(products, ({ many }) => ({
  productToProductCategory: many(productToProductCategories),
  productVariants: many(productVariants),
}));

export const productVariants = pgTable("product-variant", {
  id: uuid("id").defaultRandom().primaryKey(),
  productId: uuid("productId"),
  packageId: uuid("packageId"),
  name: text("name").notNull(),
  description: text("description"),
  meta: json("meta"),
  createdAt: timestamp("created_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 0 })
    .notNull()
    .defaultNow(),
});

export const productVariantRelations = relations(
  productVariants,
  ({ one, many }) => ({
    package: one(productPackages, {
      fields: [productVariants.packageId],
      references: [productPackages.id],
    }),
    product: one(products, {
      fields: [productVariants.productId],
      references: [products.id],
    }),
    images: many(productImages),
    productVariantsToProductParams: many(productVariantsToProductParams),
  })
);

export const productImages = pgTable("product-images", {
  id: uuid("id").defaultRandom().primaryKey(),
  productVariantId: uuid("productVariantId"),
  url: text("url").notNull(),
  alt: text("alt"),
});

export const productCategories = pgTable("product-categories", {
  id: uuid("id").defaultRandom().primaryKey(),
  parentCategoryId: uuid("parentCategoryId"),
  isActive: boolean("isActive").default(true),
  name: text("name").notNull(),
  meta: json("meta"),
});

export const productCategoryRelations = relations(
  productCategories,
  ({ one, many }) => ({
    productToProductCategory: many(productToProductCategories),
    cihldrenCategories: many(productCategories),
    parentCategory: one(productCategories, {
      fields: [productCategories.parentCategoryId],
      references: [productCategories.id],
    }),
  })
);

export const productToProductCategories = pgTable(
  "product-to-product-categories",
  {
    productId: uuid("productId")
      .notNull()
      .references(() => products.id),
    productCategoryId: uuid("productCategoryId")
      .notNull()
      .references(() => productCategories.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productId, t.productCategoryId] }),
  })
);

export const productToProductCategoriesRelations = relations(
  productToProductCategories,
  ({ one }) => ({
    product: one(products, {
      fields: [productToProductCategories.productId],
      references: [products.id],
    }),
    productCategory: one(productCategories, {
      fields: [productToProductCategories.productCategoryId],
      references: [productCategories.id],
    }),
  })
);

export const productPackages = pgTable("product-packages", {
  id: uuid("id").defaultRandom().primaryKey(),
  width: integer("width"),
  height: integer("height"),
  length: integer("length"),
  weight: integer("weight"),
});

export const productParams = pgTable("product-params", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  value: text("value").notNull(),
});

export const productParamsRelations = relations(productParams, ({ many }) => ({
  productVariantsToProductParams: many(productVariantsToProductParams),
}));

export const productVariantsToProductParams = pgTable(
  "product-variants-to-product-params",
  {
    productVariantId: uuid("productVariantId")
      .notNull()
      .references(() => productVariants.id),
    productParamId: uuid("productParamId")
      .notNull()
      .references(() => productParams.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.productVariantId, t.productParamId] }),
  })
);

export const productVariantsToProductParamsRelations = relations(
  productVariantsToProductParams,
  ({ one }) => ({
    productParam: one(productParams, {
      fields: [productVariantsToProductParams.productParamId],
      references: [productParams.id],
    }),
    productVariant: one(productVariants, {
      fields: [productVariantsToProductParams.productVariantId],
      references: [productVariants.id],
    }),
  })
);
