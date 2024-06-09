import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";

export const getProducts = procedure
  .input(
    z.object({
      type: z.array(z.string()).optional(),
      place_id: z.array(z.string()).optional(),
    })
  )
  .query(async ({ input }) => {
    return await prisma.product.findMany({
      where: {
        ...(input.type?.length
          ? {
              place: {
                OR: [
                  {
                    mp_id: {
                      isSet: input.type.includes("ozon"),
                    },
                  },
                  {
                    mp_id: {
                      isSet: !input.type.includes("ym"),
                    },
                  },
                ],
              },
            }
          : {}),
        ...(input.place_id
          ? {
              place_id: {
                in: input.place_id,
              },
            }
          : {}),
      },
      include: {
        place: true,
      },
    });
  });
