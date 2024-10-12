import { Layout } from "@/shared/ui/layouts/root";
import {
  createRootRouteWithContext,
  createRouter,
} from "@tanstack/react-router";
import { deliveryAndPaymentsRoute } from "./delivery-and-payments";
import { faqRoute } from "./faq";
import { mainRoute } from "./main";
import { productRoute } from "./product";
import { refundRoute } from "./refund";

export const rootRoute = createRootRouteWithContext()({
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

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
