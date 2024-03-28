import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
  value: z.number().int(),
});

export const setProductCountHistory = procedure
  .input(paramsValidator)
  .mutation(async ({ input }) => {
    return await prisma.productCountHistory.create({
      data: {
        productId: input.id,
        value: input.value,
      },
    });
  });
