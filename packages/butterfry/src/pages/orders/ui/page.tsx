import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";

import { OrdersPage } from "./OrdersPage";

export const ordersRoute = createRoute({
  component: OrdersPage,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Заказы",
    },
  ],
  path: "orders",
});
