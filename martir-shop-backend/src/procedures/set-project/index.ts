import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string().optional(),
  name: z.string(),
});

export const setProject = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    try {
      return await prisma.project.upsert({
        where: {
          id: input.id ?? "",
          usersOnProjects: {
            some: {
              projectId: input.id,
              userId: ctx.user.id,
            },
          },
        },
        create: {
          name: input.name,
          usersOnProjects: {
            create: {
              role: ["OWNER"],
              user: {
                connect: {
                  id: ctx.user.id,
                },
              },
            },
          },
        },
        update: {
          name: input.name,
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
