import { MDXContent } from "@/features/mdx-content";
import { RefundSection } from "@/widgets/refund-section";
import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";

function RefundPage() {
  return (
    <MDXContent>
      <RefundSection />
    </MDXContent>
  );
}

export const refundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/refund",
  component: RefundPage,
  meta: () => [
    {
      title: "Обмен и возврат",
    },
  ],
});
