import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export function productOptions(id: string | undefined) {
  return queryOptions({
    queryKey: ["get-product", id],
    queryFn: async () => {
      if (!id) return;

      const response = await client.admin.products.product.$get({
        query: {
          id: id,
        },
      });
      return response.json();
    },
    enabled: !!id,
  });
}

export const useProduct = (id: string | undefined) => {
  return useQuery(productOptions(id));
};

export function productsOptions(offset: number | undefined) {
  return queryOptions({
    queryKey: ["get-products", offset],
    queryFn: async () => {
      const response = await client.admin.products.products.$post({
        json: {
          offset,
        },
      });
      return response.json();
    },
  });
}

export const useProducts = (offset?: number) => {
  return useQuery(productsOptions(offset));
};
