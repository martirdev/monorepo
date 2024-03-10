import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
});

export const getProductCountHistory = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.productCountHistory.findMany({
      where: {
        id: {
          equals: input.id,
        },
      },
    });
  });
