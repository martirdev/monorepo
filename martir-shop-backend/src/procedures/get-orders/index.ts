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

    return await prisma.order.findMany({
      skip: input.skip ?? 0,
      take: input.take,
      orderBy: {
        createdAt: "desc",
      },
      where: {
        userId: {
          equals: ctx.user.id,
        },
      },
      include: {
        orderVersions: {
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
  });
