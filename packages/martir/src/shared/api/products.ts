import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export function productOptions(id: string) {
  return queryOptions({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await client.products[":id"].$get({
        param: {
          id,
        },
      });
      return response.json();
    },
  });
}

export const useProduct = (id: string) => {
  return useQuery(productOptions(id));
};

export function productsOptions(ids: string[]) {
  return queryOptions({
    queryKey: ["products", ids],
    queryFn: async () => {
      const response = await client.products.products.$post({
        json: {
          ids,
        },
      });
      return response.json();
    },
    enabled: !!ids.length,
  });
}

export const useProducts = (ids: string[]) => {
  return useQuery(productsOptions(ids));
};
