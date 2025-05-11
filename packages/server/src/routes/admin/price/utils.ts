import { z } from "zod";

export const createPriceScheme = z.object({
  productId: z.string(),
  price: z.number(),
});
