import { createRoute } from "@tanstack/react-router";

import { organizationRoute } from "@/pages/layouts/organization";
import { ConsoleTitle } from "@/shared/ui/console-title";

const SettingsRoute = () => {
  return <ConsoleTitle>Настройки организации</ConsoleTitle>;
};

export const settingsRoute = createRoute({
  component: SettingsRoute,
  getParentRoute: () => organizationRoute,
  meta: () => [
    {
      id: "meta",
      title: "Настройки организации",
    },
  ],
  path: "settings",
});
