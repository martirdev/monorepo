import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
  firstName: z.string(),
  secondName: z.string(),
  thirdName: z.string().optional(),
  contact: z.string(),
  project: z.string(),
});

export const setCustomer = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return await prisma.customer.upsert({
      where: {
        id: input.id,
        userId: ctx.user.id,
      },
      create: {
        id: input.id,
        userId: ctx.user.id,
        projectId: input.project,
        firstName: input.firstName,
        secondName: input.secondName,
        thirdName: input.thirdName,
        contact: input.contact,
      },
      update: {
        firstName: input.firstName,
        secondName: input.secondName,
        thirdName: input.thirdName,
        contact: input.contact,
      },
    });
  });
