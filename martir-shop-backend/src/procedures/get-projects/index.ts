import { prisma, procedure } from "../../shared/trpc";
import { TRPCError } from "@trpc/server";

export const getProjects = procedure.query(async ({ ctx }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }

  return await prisma.project.findMany({
    where: {
      usersOnProjects: {
        some: {
          userId: ctx.user.id,
        },
      },
    },
  });
});
