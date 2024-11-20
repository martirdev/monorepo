import { db } from "@/lib/db";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const productsRouter = new Hono()
  .get(
    "/product",
    zValidator("query", z.object({ id: z.string() })),
    async (c) => {
      const { id } = c.req.valid("query");

      const product = await db.query.products.findFirst({
        where: (products, { eq }) => eq(products.id, id),
      });

      return c.json({ product });
    }
  )
  .post(
    "/products",
    zValidator("json", z.object({ offset: z.number().positive().optional() })),
    async (c) => {
      const { offset = 0 } = c.req.valid("json");

      const products = await db.query.products.findMany({
        limit: 20,
        offset: offset,
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
      });

      return c.json({ products });
    }
  );
