import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  id: z.string(),
});

export const getProductVersion = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.productVersion.findFirst({
      where: {
        id: input.id,
      },
    });
  });
