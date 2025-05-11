import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { CategoriesPage } from "./CategoriesPage";

export const categoriesRoute = createRoute({
  component: CategoriesPage,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Категории товаров",
    },
  ],
  path: "categories",
});
