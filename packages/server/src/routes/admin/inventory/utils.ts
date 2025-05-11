import { z } from "zod";

export const getInventoryScheme = z.object({
  offset: z.number().positive().optional(),
});

export const createInventoryScheme = z.object({
  id: z.string().optional(),
  sku: z.string(),
  productVariantId: z.string(),
  stockedQuantity: z.number().optional(),
});

export const createInventoryItemScheme = z.object({
  stockId: z.string(),
  stockedQuantity: z.number().optional(),
  reservedQuantity: z.number().optional(),
});
