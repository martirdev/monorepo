import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
});

export const getCustomer = procedure
  .input(paramsValidator)
  .query(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return await prisma.customer.findFirst({
      where: {
        id: input.id,
        userId: ctx.user.id,
      },
    });
  });
