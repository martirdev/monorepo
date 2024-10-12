import { Layout } from "@/shared/ui/layouts/root";
import {
  createRootRouteWithContext,
  createRouter,
} from "@tanstack/react-router";
import { mainRoute } from "./main";
import { productRoute } from "./product";

export const rootRoute = createRootRouteWithContext()({
  component: Layout,
  // Add 404 page component
});

const routeTree = rootRoute.addChildren([mainRoute, productRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
