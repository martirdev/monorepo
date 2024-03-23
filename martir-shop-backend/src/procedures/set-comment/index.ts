import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string().optional(),
  orderId: z.string(),
  text: z.string(),
});

export const setComment = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return await prisma.comment.upsert({
      where: {
        id: input.id ?? "",
      },
      create: {
        orderId: input.orderId,
        text: input.text,
        userId: ctx.user.id,
      },
      update: {
        orderId: input.orderId,
        text: input.text,
        userId: ctx.user.id,
      },
    });
  });
