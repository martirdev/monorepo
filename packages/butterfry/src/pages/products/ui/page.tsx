import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";

import { ProductsPage } from "./ProductsPage";
import { z } from "zod";

const validateSearch = z.object({ id: z.string().optional() });

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
  validateSearch,
});
