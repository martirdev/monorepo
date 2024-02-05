import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

const paramsValidator = z.object({
  ids: z.array(z.string()),
});

export const getProductVersions = procedure
  .input(paramsValidator)
  .query(async ({ input }) => {
    return await prisma.productVersion.findFirst({
      where: {
        id: {
          in: input.ids,
        },
      },
    });
  });
