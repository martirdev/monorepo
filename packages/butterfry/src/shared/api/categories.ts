import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export const getCategoriesKey = () => ["get-categories"];

export function getCategoriesOptions() {
  return queryOptions({
    queryKey: getCategoriesKey(),
    queryFn: async () => {
      const response = await client.admin.categories.$get();
      return response.json();
    },
  });
}

export const useCategories = () => {
  return useQuery(getCategoriesOptions());
};
