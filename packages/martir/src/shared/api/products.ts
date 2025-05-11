import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export function variantsOptions(ids: string[]) {
  return queryOptions({
    queryKey: ["product-variants", ids],
    queryFn: async () => {
      const response = await client.products.variants.$post({
        json: {
          ids,
        },
      });
      return response.json();
    },
    enabled: !!ids.length,
  });
}

export const useVariants = (ids: string[]) => {
  return useQuery(variantsOptions(ids));
};
