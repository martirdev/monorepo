"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { PropsWithChildren, memo, useState } from "react";
import type { Router } from "../../../../martir-shop-backend/src/routers";

export const trpc = createTRPCReact<Router>();

const useTRPc = (token?: string) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.BACKEND_API}/trpc`,
          headers() {
            return {
              authorization: token ? `Bearer ${token}` : undefined,
            };
          },
        }),
      ],
    })
  );

  return { queryClient, trpcClient };
};

export const TrpcProvider = memo<
  PropsWithChildren<{ token: string | undefined }>
>(function TrpcProvider({ children, token }) {
  const { trpcClient, queryClient } = useTRPc(token);
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
});
