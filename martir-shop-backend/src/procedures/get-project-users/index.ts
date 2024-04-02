import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";
import { TRPCError } from "@trpc/server";

const paramsValidator = z.object({
  project: z.string(),
});

export const getProjectUsers = procedure
  .input(paramsValidator)
  .query(async ({ ctx, input }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return await prisma.usersOnProjects.findMany({
      where: {
        projectId: input.project,
      },
      include: {
        user: true,
      },
    });
  });
