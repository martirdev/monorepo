import { relations } from "drizzle-orm";

import {
  productCategories,
  productPackages,
  productParams,
  productParamValues,
  products,
  productVariantToImages,
  productVariants,
  productVariantsToProductParamValues,
  productVariantPrices,
} from "./products";
import { images } from "../images";
import { stock } from "../stock";

export const productPackageRelations = relations(
  productPackages,
  ({ one }) => ({
    productVariants: one(productVariants, {
      fields: [productPackages.productVariantId],
      references: [productVariants.id],
    }),
  })
);

export const productCategoryRelations = relations(
  productCategories,
  ({ one, many }) => ({
    parentCategory: one(productCategories, {
      fields: [productCategories.parentCategoryId],
      references: [productCategories.id],
    }),
    productVariant: many(productVariants),
  })
);

export const productRelations = relations(products, ({ many }) => ({
  productVariants: many(productVariants),
}));

export const productVariantRelations = relations(
  productVariants,
  ({ one, many }) => ({
    category: one(productCategories, {
      fields: [productVariants.categoryId],
      references: [productCategories.id],
    }),
    package: one(productPackages, {
      fields: [productVariants.packageId],
      references: [productPackages.id],
    }),
    product: one(products, {
      fields: [productVariants.productId],
      references: [products.id],
    }),
    images: many(productVariantToImages),
    params: many(productVariantsToProductParamValues),
    stock: one(stock, {
      fields: [productVariants.id],
      references: [stock.productVariantId],
    }),
    lastPrice: one(productVariantPrices, {
      fields: [productVariants.lastPriceId],
      references: [productVariantPrices.id],
    }),
  })
);

export const productParamsValuesRelations = relations(
  productParamValues,
  ({ one, many }) => ({
    param: one(productParams, {
      fields: [productParamValues.paramId],
      references: [productParams.id],
    }),
    variants: many(productVariantsToProductParamValues),
  })
);

export const productToImagesRelations = relations(
  productVariantToImages,
  ({ one }) => ({
    productVariant: one(productVariants, {
      fields: [productVariantToImages.productVariantId],
      references: [productVariants.id],
    }),
    image: one(images, {
      fields: [productVariantToImages.imageId],
      references: [images.id],
    }),
  })
);

export const productVariantsToProductParamValuesRelations = relations(
  productVariantsToProductParamValues,
  ({ one }) => ({
    paramValue: one(productParamValues, {
      fields: [productVariantsToProductParamValues.productParamValueId],
      references: [productParamValues.id],
    }),
    productVariant: one(productVariants, {
      fields: [productVariantsToProductParamValues.productVariantId],
      references: [productVariants.id],
    }),
  })
);
