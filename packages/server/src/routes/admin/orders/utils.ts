import { z } from "zod";

export const getOrdersScheme = z.object({
  offset: z.number().positive().optional(),
});

export const createOrderScheme = z.object({
  clientId: z.string().uuid(),
  products: z.array(
    z.object({
      productId: z.string().uuid(),
      quantity: z.number().int().positive(),
    })
  ),
});
