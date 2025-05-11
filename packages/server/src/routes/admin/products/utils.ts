import { z } from "zod";

export const packageScheme = z.object({
  width: z.number().positive().optional(),
  length: z.number().positive().optional(),
  height: z.number().positive().optional(),
  weight: z.number().positive().optional(),
});

export const updateImageDeletedItemScheme = z.object({
  id: z.string(),
  type: z.literal("deleted"),
});
export const updateImageAddedItemScheme = z.object({
  url: z.string(),
  type: z.literal("added"),
});
export const updateImageScheme = z.union([
  updateImageDeletedItemScheme,
  updateImageAddedItemScheme,
]);

export const createProductScheme = z.object({
  name: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  meta: z.string().optional(),
  images: updateImageAddedItemScheme.array(),
  package: packageScheme.optional(),
  params: z
    .object({
      name: z.string(),
      values: z.string().array().min(1),
    })
    .array()
    .min(1),
});

export const updateProductVariantScheme = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  category: z.string().optional(),
  meta: z.string().optional(),
  images: updateImageScheme.array(),
  package: packageScheme,
});

export const deleteProductScheme = z.object({
  id: z.string(),
});

export const getProductsVariants = z.object({
  search: z.string(),
});
