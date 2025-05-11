import { z } from "zod";

export const createOrderScheme = z.object({
  clientId: z.string(),
  products: z
    .array(
      z.object({
        productId: z.string(),
        quantity: z.number().positive(),
      }),
    )
    .min(1),
});
