import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../router";
import { ProductSection } from "@/widgets/product-section";

function ProductPage() {
  return (
    <div>
      <ProductSection />
    </div>
  );
}

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$productId",
  component: ProductPage,
});
