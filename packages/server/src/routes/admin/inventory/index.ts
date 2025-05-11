import { desc, eq } from "drizzle-orm";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import { stock, stockItem } from "@/scheme";

import { createInventoryScheme, getInventoryScheme } from "./utils";

export const inventoryRouter = new Hono()
  .post("/", zValidator("json", getInventoryScheme), async (c) => {
    const { offset = 0 } = c.req.valid("json");

    const inventoryResponse = await db.query.stock.findMany({
      limit: 20,
      offset: offset,
      orderBy: desc(stock.createdAt),
      with: {
        items: true,
        productVariant: {
          with: {
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
    });

    return c.json({ inventory: inventoryResponse });
  })
  .post("/upsert", zValidator("json", createInventoryScheme), async (c) => {
    const data = c.req.valid("json");

    if (data.id) {
      const id = data.id;

      await db.transaction(async (tx) => {
        const value = await tx.query.stock.findFirst({
          where: eq(stock.id, id),
        });

        if (!value) {
          throw new Error(`Stock with ${id} not found`);
        }

        await Promise.all([
          tx
            .update(stock)
            .set({
              id: id,
              sku: data.sku,
              stockedQuantity:
                value.stockedQuantity + (data.stockedQuantity || 0),
            })
            .where(eq(stock.id, id)),
          tx.insert(stockItem).values({
            stockId: id,
            stockedQuantity: data.stockedQuantity,
          }),
        ]);
      });
    } else {
      const id = uuidv4();

      await db.transaction(async (tx) => {
        await Promise.all([
          tx.insert(stock).values({
            id,
            sku: data.sku,
            productVariantId: data.productVariantId,
            stockedQuantity: data.stockedQuantity,
          }),
          tx.insert(stockItem).values({
            stockId: id,
            stockedQuantity: data.stockedQuantity,
          }),
        ]);
      });
    }

    return c.json({ message: "Ok" });
  });
