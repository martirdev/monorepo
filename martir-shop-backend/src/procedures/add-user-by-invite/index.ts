import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  invite: z.string(),
});

export const addUserByInvite = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const invite = await prisma.invitation.findFirst({
      where: {
        id: input.invite,
      },
      include: {
        project: true,
      },
    });

    if (invite?.isExpired) {
      throw new TRPCError({ code: "FORBIDDEN", message: "Invite is expired" });
    }

    const isAlreadyInvited = ctx.user.projects?.some(
      (project) => project.projectId === invite?.projectId
    );
    if (!isAlreadyInvited) {
      await prisma.user.update({
        data: {
          usersOnProjects: {
            create: {
              role: ["VIEWER"],
              project: {
                connect: {
                  id: invite?.project.id,
                },
              },
            },
          },
        },
        where: {
          id: ctx.user.id,
        },
      });
    }

    return invite?.project.id;
  });
