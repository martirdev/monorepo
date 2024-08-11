import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { ConsoleTitle } from "@/shared/ui/console-title";

const DashboardPage = () => {
  return <ConsoleTitle>Сводка</ConsoleTitle>;
};

export const dashboardRoute = createRoute({
  component: DashboardPage,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Сводка",
    },
  ],
  path: "/",
});
