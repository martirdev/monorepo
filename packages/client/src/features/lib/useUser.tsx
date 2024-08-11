import { queryOptions, useQuery } from "@tanstack/react-query";

import { honoClient } from "@/shared/lib/api";

export const userQueryOptions = queryOptions({
  queryFn: async () => {
    const response = await honoClient.user.me.$get();
    return await response.json();
  },
  queryKey: ["user"],
});

export const useUser = () => useQuery(userQueryOptions);
