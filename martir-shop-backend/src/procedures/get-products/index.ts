import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  skip: z.number().positive().optional(),
  take: z.number().positive(),
  name: z.string().optional(),
});

export const getProducts = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.product.findMany({
      skip: input.skip ?? 0,
      take: input.take,
      orderBy: { createdAt: "desc" },
      where: {
        versions: {
          some: {
            name: {
              contains: input.name,
            },
          },
        },
      },
      include: {
        versions: {
          take: 1,
          orderBy: { createdAt: "desc" },
        },
      },
    });
  });
