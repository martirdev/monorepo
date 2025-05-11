import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { inArray } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";

export const productsRouter = new Hono()
  .post(
    "/products",
    zValidator("json", z.object({ id: z.string() })),
    async (c) => {
      const { id } = c.req.valid("json");

      const products = await db.query.products.findFirst({
        where: (products, { eq }) => eq(products.id, id),
        with: {
          productVariants: {
            columns: {
              updatedAt: false,
              createdAt: false,
            },
            with: {
              lastPrice: true,
              category: true,
              package: true,
              stock: true,
              images: {
                with: {
                  image: true,
                },
              },
              params: {
                with: {
                  paramValue: {
                    with: {
                      param: true,
                    },
                  },
                },
              },
            },
          },
        },
        columns: {
          createdAt: false,
          updatedAt: false,
        },
      });

      return c.json({ products });
    }
  )
  .post(
    "/variants",
    zValidator("json", z.object({ ids: z.string().array() })),
    async (c) => {
      const { ids } = c.req.valid("json");

      const variants = await db.query.productVariants.findMany({
        where: (variants) => inArray(variants.id, ids),
        with: {
          product: true,
          lastPrice: true,
          stock: true,
          images: {
            with: {
              image: true,
            },
          },
          params: {
            with: {
              paramValue: {
                with: {
                  param: true,
                },
              },
            },
          },
        },
        columns: {
          createdAt: false,
          updatedAt: false,
        },
      });

      return c.json({ variants });
    }
  );
