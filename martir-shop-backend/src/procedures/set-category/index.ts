import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  parentCategoryId: z.string().optional(),
  name: z.string(),
});

export const setCategory = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return prisma.category.create({
      data: {
        name: input.name,
        parentCategoryId: input.parentCategoryId,
      },
    });
  });
