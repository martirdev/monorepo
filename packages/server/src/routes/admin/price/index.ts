import { eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { productVariantPrices, productVariants } from "@/scheme";

import { createPriceScheme } from "./utils";

export const pricesRouter = new Hono().post(
  "/create",
  zValidator("json", createPriceScheme),
  async (c) => {
    const data = c.req.valid("json");

    const priceId = uuidv4();

    await db.transaction(async (tx) => {
      await Promise.all([
        tx
          .update(productVariants)
          .set({
            lastPriceId: priceId,
          })
          .where(eq(productVariants.id, data.productId)),
        tx.insert(productVariantPrices).values({
          id: priceId,
          productVariantId: data.productId,
          price: data.price.toString(),
        }),
      ]);
    });

    return c.json({ message: "Ok" });
  }
);
