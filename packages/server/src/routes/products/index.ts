import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const productsRouter = new Hono().get(
  "/:id",
  zValidator("param", z.object({ id: z.string().uuid() })),
  async (c) => {
    const { id } = c.req.valid("param");

    const fetchedProducts = await db.query.masterProducts.findFirst({
      where: (masterProducts, { eq }) => eq(masterProducts.id, id),
      with: {
        products: {
          with: {
            productToParams: {
              columns: {},
              with: {
                params: {
                  columns: {
                    name: true,
                    value: true,
                  },
                },
              },
            },
          },
          columns: {
            createdAt: false,
            updatedAt: false,
            masterProductId: false,
          },
        },
      },
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    return c.json({ products: fetchedProducts });
  }
);
