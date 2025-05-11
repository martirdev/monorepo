import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export const GET_ORDERS_KEY = "get-orders";
export const getProductsKey = (offset: number | undefined) => [
  GET_ORDERS_KEY,
  offset,
];

export function ordersOptions(offset?: number) {
  return queryOptions({
    queryKey: getProductsKey(offset),
    queryFn: async () => {
      const response = await client.admin.orders.$post({
        json: {
          offset,
        },
      });
      return response.json();
    },
  });
}

export const useOrders = (offset?: number) => {
  return useQuery(ordersOptions(offset));
};
