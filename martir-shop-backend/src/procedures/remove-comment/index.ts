import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string().optional(),
});

export const removeComment = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return await prisma.comment.delete({
      where: {
        id: input.id,
        userId: ctx.user.id,
      },
    });
  });
