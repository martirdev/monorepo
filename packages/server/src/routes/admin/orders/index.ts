import { zValidator } from "@hono/zod-validator";
import { inArray } from "drizzle-orm";
import { Hono } from "hono";
import { v4 as uuidv4 } from "uuid";

import { db } from "@/lib/db";
import {
  orderProducts,
  orders,
  orderStatuses,
  productVariants,
} from "@/scheme";

import { createOrderScheme, getOrdersScheme } from "./utils";

export const ordersRouter = new Hono()
  .post("/", zValidator("json", getOrdersScheme), async (c) => {
    const data = c.req.valid("json");

    const orders = await db.query.orders.findMany({
      offset: data.offset,
      limit: 20,
      with: {
        client: true,
        orderProducts: true,
        orderStatuses: {
          orderBy: orderStatuses.createdAt,
        },
      },
    });

    return c.json({ orders });
  })
  .post("/create", zValidator("json", createOrderScheme), async (c) => {
    const data = c.req.valid("json");
    const orderId = uuidv4();

    return await db.transaction(async (tx) => {
      // Получаем актуальные цены для товаров
      const productsWithPrices = await tx.query.productVariants.findMany({
        where: inArray(
          productVariants.id,
          data.products.map((item) => item.productId)
        ),
        columns: {
          id: true,
        },
        with: {
          lastPrice: {
            columns: {
              id: true,
              price: true,
            },
          },
        },
      });

      // Проверяем, что все товары существуют и имеют активные цены
      if (productsWithPrices.length !== data.products.length) {
        throw new Error("Some products not found");
      }

      // Создаем мапу товар -> цена для удобного доступа
      const productPriceMap = new Map(
        productsWithPrices.map((product) => [
          product.id,
          { ...product.lastPrice, productId: product.id },
        ])
      );

      // Вычисляем реальную сумму заказа
      const totalAmount = data.products.reduce((sum, product) => {
        return sum + Number(productPriceMap.get(product.productId)?.price!);
      }, 0);

      // Выполняем операции создания заказа
      await Promise.all([
        // Создаем новый заказ
        tx.insert(orders).values({
          id: orderId,
          clientId: data.clientId,
          totalAmount: totalAmount.toString(),
        }),

        // Добавляем продукты к заказу
        tx.insert(orderProducts).values(
          data.products.map((product) => ({
            orderId: orderId,
            productId: product.productId,
            priceId: productPriceMap.get(product.productId)?.id!,
            quantity: product.quantity,
          }))
        ),
      ]);

      return c.json({
        message: "Order created successfully",
        orderId: orderId,
      });
    });
  });
