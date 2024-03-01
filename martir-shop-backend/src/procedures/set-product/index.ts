import { z } from "zod";
import { prisma, procedure } from "../../shared/trpc";
import { TRPCError } from "@trpc/server";

const paramsValidator = z.object({
  id: z.string(),
  categoryId: z.string().optional(),
  description: z.string(),
  name: z.string(),
  price: z.number(),
  images: z.array(z.string()),
  params: z.array(
    z.object({
      name: z.string(),
      value: z.string(),
    })
  ),
});

export const setProduct = procedure
  .input(paramsValidator)
  .mutation(async ({ input, ctx }) => {
    if (!ctx.user) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    try {
      const existingProduct = await prisma.product.findUnique({
        where: {
          id: input.id,
        },
      });

      if (existingProduct) {
        return await prisma.productVersion.create({
          data: {
            categoryId: input.categoryId,
            name: input.name,
            description: input.description,
            price: input.price,
            productId: input.id,
            images: {
              createMany: {
                data: input.images.map((url) => ({ url })),
              },
            },
            params: {
              create: input.params.map(({ name, value }) => ({ name, value })),
            },
          },
        });
      } else {
        return await prisma.product.create({
          data: {
            id: input.id,
            count: 0,
            user: {
              connect: {
                id: ctx.user.id,
              },
            },
            versions: {
              create: {
                categoryId: input.categoryId,
                name: input.name,
                description: input.description,
                price: input.price,
                images: {
                  createMany: {
                    data: input.images.map((url) => ({ url })),
                  },
                },
                params: {
                  create: input.params.map(({ name, value }) => ({
                    name,
                    value,
                  })),
                },
              },
            },
          },
          include: {
            versions: true,
          },
        });
      }
    } catch (error) {
      console.error(error);
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: `Error creating product or version`,
        cause: error,
      });
    }
  });
