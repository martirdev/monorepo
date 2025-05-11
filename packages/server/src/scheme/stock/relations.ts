import { relations } from "drizzle-orm";

import { stock, stockItem } from "./stock";
import { productVariants } from "../products";

export const stockRelations = relations(stock, ({ many, one }) => ({
  items: many(stockItem),
  productVariant: one(productVariants, {
    fields: [stock.productVariantId],
    references: [productVariants.id],
  }),
}));

export const stockItemRelations = relations(stockItem, ({ one }) => ({
  stock: one(stock, {
    fields: [stockItem.stockId],
    references: [stock.id],
  }),
}));
