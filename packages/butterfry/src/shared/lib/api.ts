import { AppType } from "@server";
import { QueryClient } from "@tanstack/react-query";
import { hc } from "hono/client";

export const queryClient = new QueryClient();

export const honoClient = hc<AppType>("/api");
