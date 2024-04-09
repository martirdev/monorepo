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
        id: input.id,
      },
      include: {
        customer: true,
        comments: {
          orderBy: {
            createdAt: "desc",
          },
          include: {
            user: true,
          },
        },
        orderVersions: {
          include: {
            products: {
              include: {
                product: {
                  include: {
                    images: {
                      take: 1,
                    },
                    params: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  });
