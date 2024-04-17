import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  project: z.string(),
});

export const createInvite = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    const foundProject = ctx.user.projects?.find(
      (project) => project.projectId === input.project
    );
    if (!foundProject || foundProject.role.every((role) => role !== "OWNER")) {
      throw new TRPCError({ code: "FORBIDDEN" });
    }

    const [updatedInvite, createdInvite] = await prisma.$transaction([
      prisma.invitation.updateMany({
        data: {
          isExpired: true,
        },
        where: {
          projectId: input.project,
          isExpired: false,
        },
      }),
      prisma.invitation.create({
        data: {
          projectId: input.project,
        },
      }),
    ]);

    return { updatedInvite, createdInvite };
  });
