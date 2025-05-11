import { z } from "zod";

import {
  removeEmptyValuesFromArray,
  removeEmptyValuesFromObject,
  toUndefined,
} from "@/shared/lib/schemas";

export const productPackageScheme = z.object({
  weight: z.coerce.number().nonnegative().optional().transform(toUndefined),
  length: z.coerce.number().nonnegative().optional().transform(toUndefined),
  width: z.coerce.number().nonnegative().optional().transform(toUndefined),
  height: z.coerce.number().nonnegative().optional().transform(toUndefined),
});

export const productParamScheme = z.object({
  name: z.string().trim().min(3, {
    message: "Название должно быть не менее 3 символов",
  }),
  values: z.string().trim().array().min(1, {
    message: "Должно быть не менее 1 значения",
  }),
});

export const productImageAddedScheme = z.object({
  url: z
    .string()
    .trim()
    .url({
      message: "Не является ссылкой",
    })
    .or(z.literal("")),
  type: z.literal("added"),
});

export const productImageRemovedScheme = z.object({
  imageId: z.string(),
  url: z.string().optional(),
  type: z.literal("deleted"),
});

export const productImageDefaultScheme = z.object({
  imageId: z.string(),
  url: z.string(),
  type: z.literal("default"),
});

const productCommonSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Имя обязательный параметр" })
    .min(3, {
      message: "Строка должна содержать не менее 3 символов",
    }),
  category: z
    .string()
    .uuid()
    .or(z.literal(""))
    .optional()
    .transform(toUndefined),
  description: z.string().optional().transform(toUndefined),
  meta: z.string().trim().optional().or(z.literal("")).transform(toUndefined),
});

export const createProductSchema = productCommonSchema.extend({
  images: productImageAddedScheme
    .transform(removeEmptyValuesFromObject)
    .array()
    .transform(removeEmptyValuesFromArray),
  package: productPackageScheme.transform(removeEmptyValuesFromObject),
  params: productParamScheme.array().min(1, {
    message: "Нужно указать не менее 1 параметра",
  }),
});

export const updateProductVariantSchema = productCommonSchema.extend({
  id: z.string(),
  images: z
    .union([
      productImageAddedScheme,
      productImageRemovedScheme,
      productImageDefaultScheme,
    ])
    .transform(removeEmptyValuesFromObject)
    .array()
    .transform(removeEmptyValuesFromArray),
  package: productPackageScheme,
  params: productParamScheme.array().optional(),
});

export const createInventorySchema = z.object({
  id: z.string().optional().transform(toUndefined),
  sku: z.string().min(3),
  productVariantId: z.string(),
  stockedQuantity: z.coerce.number().optional().transform(toUndefined),
});

export const createPriceSchema = z.object({
  productVariantId: z.string(),
  price: z.coerce.number(),
});
