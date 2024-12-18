import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const productsRouter = new Hono().post(
  "/products",
  zValidator("json", z.object({ offset: z.number().positive().optional() })),
  async (c) => {
    const { offset = 0 } = c.req.valid("json");

    const products = await db.query.products.findMany({
      limit: 20,
      offset: offset,
      with: {
        productToProductCategory: {
          with: {
            productCategory: true,
          },
        },
        productVariants: {
          with: {
            images: true,
            package: true,
            productVariantsToProductParams: {
              columns: {},
              with: {
                productParam: true,
              },
            },
          },
        },
      },
    });

    return c.json({ products });
  }
);
