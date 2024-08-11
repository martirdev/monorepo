import { createRoute, redirect } from "@tanstack/react-router";

import { clientsRoute } from "./clients";
import { dashboardRoute } from "./dashboard";
import { homeRoute } from "./home";
import { organizationRoute } from "./layouts/organization";
import { rootRoute } from "./layouts/root";
import { loginRoute } from "./login";
import { productsRoute } from "./products";
import { profileRoute } from "./profile";
import { settingsRoute } from "./settings";

export const sharedRoutes = createRoute({
  getParentRoute: () => rootRoute,
  id: "shared",
});

export const authenticatedRoutes = createRoute({
  beforeLoad: ({ context }) => {
    if (!context.userData?.user) {
      throw redirect({
        to: "/login",
      });
    }
  },
  getParentRoute: () => rootRoute,
  meta: () => [
    {
      id: "meta",
      title: "Консоль",
    },
  ],
  path: "console",
});

export const authenticatedHome = createRoute({
  beforeLoad: ({ context }) => {
    if (!context.userData.organizations[0]) {
      throw redirect({
        search: {
          code: "UserDontHaveOrg",
        },
        to: "/",
      });
    }
    throw redirect({
      params: {
        organization: context.userData.organizations[0]?.id,
      },
      to: "/console/$organization",
    });
  },
  getParentRoute: () => authenticatedRoutes,
  path: "/",
});

export const routeTree = rootRoute.addChildren([
  sharedRoutes.addChildren([loginRoute, homeRoute]),
  authenticatedRoutes.addChildren([
    authenticatedHome,
    profileRoute,
    organizationRoute.addChildren([
      dashboardRoute,
      productsRoute,
      clientsRoute,
      settingsRoute,
    ]),
  ]),
]);
