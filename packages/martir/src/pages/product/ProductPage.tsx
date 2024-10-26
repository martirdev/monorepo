import { productOptions } from "@/shared/api/products";
import { ProductSection } from "@/widgets/product-section";
import { createRoute, notFound } from "@tanstack/react-router";
import { z } from "zod";
import { rootRoute } from "../router";

function ProductPage() {
  return (
    <div>
      <ProductSection />
    </div>
  );
}

const searchParamsScheme = z.record(z.string());

export const productRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/product/$productId",
  validateSearch: (search) => {
    return searchParamsScheme.parse(search);
  },
  loaderDeps: (ctx) => ctx,
  loader: async (ctx) => {
    const { productId } = ctx.params;
    const search = ctx.deps.search;

    const data = await ctx.context.queryClient.fetchQuery(
      productOptions(productId)
    );

    const product = data?.products?.products.find((product) => {
      return product.productToParams.every(
        (param) => search[param.params.name] === param.params.value
      );
    });

    if (!product) {
      throw notFound();
    }

    return {
      product,
    };
  },
  component: ProductPage,
  meta: () => [
    {
      title: "Страница товара",
    },
  ],
});
