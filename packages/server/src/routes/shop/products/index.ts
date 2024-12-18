import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const productsRouter = new Hono().post(
  "/products",
  zValidator("json", z.object({ id: z.string() })),
  async (c) => {
    const { id } = c.req.valid("json");

    const products = await db.query.products.findFirst({
      where: (products, { eq }) => eq(products.id, id),
      with: {
        productToProductCategory: {
          with: {
            productCategory: true,
          },
        },
        productVariants: {
          columns: {
            updatedAt: false,
            createdAt: false,
          },
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
      columns: {
        createdAt: false,
        updatedAt: false,
      },
    });

    return c.json({ products });
  }
);
