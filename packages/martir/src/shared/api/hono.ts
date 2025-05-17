import { QueryClient } from "@tanstack/react-query";
import { hc } from "hono/client";
import { AppRouter } from "../types/codegen";

export const queryClient = new QueryClient();

export const client = hc<AppRouter>(
  `${process.env.NEXT_PUBLIC_SERVER_URL}/shop`
);
