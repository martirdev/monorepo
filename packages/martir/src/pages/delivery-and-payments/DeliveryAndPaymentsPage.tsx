import { MDXContent } from "@/features/mdx-content";
import { DeliveryAndPaymentsSection } from "@/widgets/delivery-and-payments-section";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";

function DeliveryPage() {
  return (
    <MDXContent>
      <DeliveryAndPaymentsSection />
    </MDXContent>
  );
}

export const deliveryAndPaymentsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/delivery-and-payments",
  component: DeliveryPage,
  meta: () => [
    {
      title: "Доставка и оплата",
    },
  ],
});
