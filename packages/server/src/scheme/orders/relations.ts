import { relations } from "drizzle-orm";

import { productVariants } from "../products";
import { orderProducts, orders, orderStatuses, statuses } from "./orders";
import { clients } from "../clients";

export const ordersRelations = relations(orders, ({ one, many }) => ({
  orderProducts: many(orderProducts),
  orderStatuses: many(orderStatuses),
  client: one(clients, {
    fields: [orders.clientId],
    references: [clients.id],
  }),
}));

export const orderProductsRelations = relations(orderProducts, ({ one }) => ({
  order: one(orders, {
    fields: [orderProducts.orderId],
    references: [orders.id],
  }),
  productVariant: one(productVariants, {
    fields: [orderProducts.productId],
    references: [productVariants.id],
  }),
}));

export const orderStatusesRelations = relations(orderStatuses, ({ one }) => ({
  order: one(orders, {
    fields: [orderStatuses.orderId],
    references: [orders.id],
  }),
  status: one(statuses, {
    fields: [orderStatuses.statusId],
    references: [statuses.id],
  }),
}));
