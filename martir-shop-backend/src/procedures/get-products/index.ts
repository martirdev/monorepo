import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";
import { TRPCError } from "@trpc/server";

const paramsValidator = z.object({
  skip: z.number().nonnegative().optional(),
  take: z.number().positive(),
  name: z.string().optional(),
  project: z.string(),
});

export const getProducts = procedure
  .input(paramsValidator)
  .query(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const condition = {
      projectId: input.project,
      versions: {
        some: {
          name: {
            contains: input.name,
          },
        },
      },
    };

    const [products, total] = await prisma.$transaction([
      prisma.product.findMany({
        skip: input.skip ?? 0,
        take: input.take,
        orderBy: { createdAt: "desc" },
        where: condition,
        include: {
          productCountHistory: {
            select: {
              value: true,
            },
          },
          versions: {
            take: 1,
            orderBy: { createdAt: "desc" },
            include: {
              images: {
                take: 1,
              },
            },
          },
        },
      }),
      prisma.product.count({ where: condition }),
    ]);

    return { products, total };
  });
