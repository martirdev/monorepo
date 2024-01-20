import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

export const removeMarkeplaceKeys = procedure
  .input(z.array(z.string()))
  .query(async ({ input }) => {
    return await prisma.marketplaceKey.deleteMany({
      where: {
        id: {
          in: input,
        },
      },
    });
  });
