"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCClient, createTRPCReact } from "@trpc/react-query";
import { PropsWithChildren, memo, useState } from "react";
import type { Router } from "../../../../martir-shop-backend/src/routers";
import { makeSettings } from "./utils";
import { cookies } from "next/headers";

const queryClient = new QueryClient();
export const trpc = createTRPCReact<Router>();

const useTRPc = (token?: string) => {
  const [trpcQueryClient] = useState(() => queryClient);
  const [trpcClient] = useState(() => trpc.createClient(makeSettings(token)));

  return { queryClient: trpcQueryClient, trpcClient };
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
