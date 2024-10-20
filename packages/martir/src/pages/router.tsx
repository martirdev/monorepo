import { queryClient } from "@/shared/api/hono";
import { Layout } from "@/shared/ui/layouts/root";
import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  createRouter,
} from "@tanstack/react-router";
import { deliveryAndPaymentsRoute } from "./delivery-and-payments";
import { faqRoute } from "./faq";
import { mainRoute } from "./main";
import { productRoute } from "./product";
import { refundRoute } from "./refund";

type RootContext = {
  queryClient: QueryClient;
};

export const rootRoute = createRootRouteWithContext<RootContext>()({
  component: Layout,
  // Add 404 page component
});

const routeTree = rootRoute.addChildren([
  mainRoute,
  productRoute,
  faqRoute,
  refundRoute,
  deliveryAndPaymentsRoute,
]);

export const router = createRouter({ context: { queryClient }, routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
