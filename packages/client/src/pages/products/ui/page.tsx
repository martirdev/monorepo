import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { ConsoleTitle } from "@/shared/ui/console-title";

const ProductsPage = () => {
  return <ConsoleTitle>Товары</ConsoleTitle>;
};

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
