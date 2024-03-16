import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  skip: z.number().nonnegative().optional(),
  take: z.number().positive(),
});

export const getOrders = procedure
  .input(paramsValidator)
  .query(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const condition = {
      userId: {
        equals: ctx.user.id,
      },
    };

    const [total, orders] = await prisma.$transaction([
      prisma.product.count({ where: condition }),
      prisma.order.findMany({
        skip: input.skip ?? 0,
        take: input.take,
        orderBy: {
          createdAt: "desc",
        },
        where: condition,
        include: {
          customer: true,
          orderVersions: {
            take: 1,
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      }),
    ]);

    return { total, orders };
  });