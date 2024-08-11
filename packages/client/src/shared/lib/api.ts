import { AppType } from "@server/src";
import { QueryClient } from "@tanstack/react-query";
import { hc } from "hono/client";

export const queryClient = new QueryClient();

export const honoClient = hc<AppType>("/api");
