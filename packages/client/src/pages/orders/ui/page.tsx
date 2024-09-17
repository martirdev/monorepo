import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { ConsoleTitle } from "@/shared/ui/console-title";

const OrdersPage = () => {
  return <ConsoleTitle>Заказы</ConsoleTitle>;
};

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
