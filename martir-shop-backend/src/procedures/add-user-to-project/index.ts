import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  project: z.string(),
  user: z.string(),
});

export const addUserToProject = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const userOnProject = await prisma.usersOnProjects.findFirst({
      where: {
        projectId: input.project,
        userId: ctx.user.id,
      },
      include: {
        user: true,
      },
    });

    if (!userOnProject?.role.includes("OWNER")) {
      throw new TRPCError({
        code: "FORBIDDEN",
        message: "User must have OWNER role",
      });
    }

    return await prisma.usersOnProjects.create({
      data: {
        projectId: input.project,
        userId: input.user,
        role: ["EDITOR"],
      },
    });
  });
