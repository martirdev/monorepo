import { queryOptions, useQuery } from "@tanstack/react-query";
import { client } from "./hono";

export const GET_CLIENTS_KEY = "get-clients";
export const getClientsKey = () => [GET_CLIENTS_KEY];

export function getClientsOptions() {
  return queryOptions({
    queryKey: getClientsKey(),
    queryFn: async () => {
      const response = await client.admin.clients.$get();
      return response.json();
    },
  });
}

export const useClients = () => {
  return useQuery(getClientsOptions());
};
