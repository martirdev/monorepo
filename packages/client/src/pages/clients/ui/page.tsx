import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { ConsoleTitle } from "@/shared/ui/console-title";

const ClientsPage = () => {
  return <ConsoleTitle>Клиенты</ConsoleTitle>;
};

export const clientsRoute = createRoute({
  component: ClientsPage,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Клиенты",
    },
  ],
  path: "clients",
});
