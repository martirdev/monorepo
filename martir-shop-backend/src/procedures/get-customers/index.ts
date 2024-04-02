import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  skip: z.number().nonnegative().optional(),
  take: z.number().positive(),
  project: z.string(),
});

export const getCustomers = procedure
  .input(paramsValidator)
  .query(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const condition = {
      projectId: input.project,
    };

    const [total, customers] = await prisma.$transaction([
      prisma.customer.count({
        where: condition,
      }),
      prisma.customer.findMany({
        skip: input.skip ?? 0,
        take: input.take,
        where: condition,
        include: {
          _count: {
            select: {
              orders: true,
            },
          },
        },
      }),
    ]);

    return { total, customers };
  });
