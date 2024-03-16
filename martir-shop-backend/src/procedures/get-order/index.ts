import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
});

export const getOrder = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.order.findFirst({
      where: {
        id: {
          equals: input.id,
        },
      },
      include: {
        orderVersions: {
          include: {
            products: true,
          },
        },
      },
    });
  });
