import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
});

export const getProduct = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.product.findFirst({
      where: {
        id: {
          equals: input.id,
        },
      },
      include: {
        versions: true,
      },
    });
  });
