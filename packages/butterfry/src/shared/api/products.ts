import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export const GET_PRODUCTS_KEY = "get-products";
export const getProductsKey = (offset: number | undefined) => [
  GET_PRODUCTS_KEY,
  offset,
];

export function productsOptions(offset?: number) {
  return queryOptions({
    queryKey: getProductsKey(offset),
    queryFn: async () => {
      const response = await client.admin.products.$post({
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

export const GET_PRODUCTS_VARIANTS_KEY = "get-products-variants";
export const getProductsVariantsKey = (search: string) => [
  GET_PRODUCTS_VARIANTS_KEY,
  search,
];

export function productsVariantsOptions(search: string = "") {
  return queryOptions({
    queryKey: getProductsVariantsKey(search),
    queryFn: async () => {
      const response = await client.admin.products.variants.$post({
        json: {
          search,
        },
      });
      return response.json();
    },
  });
}

export const useProductsVariants = (search: string) => {
  return useQuery(productsVariantsOptions(search));
};
