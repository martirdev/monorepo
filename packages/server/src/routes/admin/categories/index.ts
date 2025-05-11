import { db } from "@/lib/db";
import { productCategories } from "@/scheme";
import { zValidator } from "@hono/zod-validator";
import { eq, inArray } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";

export const categoriesRouter = new Hono()
  .get("/", async (c) => {
    const categories = await db.query.productCategories.findMany({
      orderBy: productCategories.id,
    });

    return c.json({ categories });
  })
  .post(
    "/create",
    zValidator(
      "json",
      z.array(
        z.object({
          name: z.string(),
          parentCategoryId: z.string().optional(),
          isActive: z.boolean(),
        })
      )
    ),
    async (c) => {
      const data = c.req.valid("json");

      const categories = await db
        .insert(productCategories)
        .values(data)
        .returning();

      return c.json({ categories }, 200);
    }
  )
  .post(
    "/update",
    zValidator(
      "json",
      z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          parentCategoryId: z.string().optional(),
          isActive: z.boolean(),
        })
      )
    ),
    async (c) => {
      const data = c.req.valid("json");

      const rawCategories = await db.transaction(async (tx) => {
        return await Promise.all(
          data.map((category) =>
            tx
              .update(productCategories)
              .set(category)
              .where(eq(productCategories.id, category.id))
              .returning()
          )
        );
      });

      const categories = rawCategories.flat(1);

      return c.json({ categories }, 200);
    }
  )
  .delete("/delete", zValidator("json", z.array(z.string())), async (c) => {
    const data = c.req.valid("json");

    const deletedCategories = await db
      .delete(productCategories)
      .where(inArray(productCategories.id, data))
      .returning();

    return c.json({ message: "categories deleted", deletedCategories });
  });
