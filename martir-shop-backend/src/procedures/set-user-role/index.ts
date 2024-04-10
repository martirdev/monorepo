import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";
import { ROLES } from "../../shared/consts";

const paramsValidator = z.object({
  userId: z.string(),
  projectId: z.string(),
  role: z.enum(ROLES),
});

export const setUserRole = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    try {
      return await prisma.usersOnProjects.updateMany({
        where: {
          userId: input.userId,
          projectId: input.projectId,
        },
        data: {
          role: [input.role],
        },
      });
    } catch (error) {
      console.error(error);
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "Error creating project",
        cause: error,
      });
    }
  });
