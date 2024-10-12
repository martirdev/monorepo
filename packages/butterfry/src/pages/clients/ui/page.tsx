import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";

import { ClientsPage } from "./ClientsPage";

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
