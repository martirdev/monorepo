import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";

import { ProductsPage } from "./ProductsPage";

export const productsRoute = createRoute({
  component: ProductsPage,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Товары",
    },
  ],
  path: "products",
});
