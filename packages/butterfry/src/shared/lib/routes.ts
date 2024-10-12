import { createRouter } from "@tanstack/react-router";

import { routeTree } from "@/pages/router";

import { queryClient } from "./api";

export const router = createRouter({ context: { queryClient }, routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
