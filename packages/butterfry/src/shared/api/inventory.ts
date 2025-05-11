import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export const GET_INVENTORY_KEY = "get-inventory";

export const getInventoryKey = (offset: number | undefined) => [
  GET_INVENTORY_KEY,
  offset,
];

export function inventoryOptions(offset?: number) {
  return queryOptions({
    queryKey: getInventoryKey(offset),
    queryFn: async () => {
      const response = await client.admin.inventory.$post({
        json: {
          offset,
        },
      });
      return response.json();
    },
  });
}

export const useInventory = (offset?: number) => {
  return useQuery(inventoryOptions(offset));
};
