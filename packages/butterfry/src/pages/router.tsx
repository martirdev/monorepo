import { createRoute, redirect } from "@tanstack/react-router";

import { authClient } from "@/shared/lib/auth";

import { clientsRoute } from "./clients";
import { dashboardRoute } from "./dashboard";
import { homeRoute } from "./home";
import { organizationRoute } from "./layouts/organization";
import { rootRoute } from "./layouts/root";
import { ordersRoute } from "./orders";
import { productsRoute } from "./products";
import { profileRoute } from "./profile";
import { settingsRoute } from "./settings";
import { signInRoute } from "./signin";
import { signUpRoute } from "./signup";

export const sharedRoutes = createRoute({
  getParentRoute: () => rootRoute,
  id: "shared",
});

export const authenticatedRoutes = createRoute({
  beforeLoad: async ({ context }) => {
    if (!context.user) {
      throw redirect({
        to: "/signin",
      });
    }

    const { data: organizations } = await authClient.organization.list();

    return {
      organizations,
    };
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
  beforeLoad: async ({ context }) => {
    if (!context.organizations) {
      throw redirect({
        search: {
          code: "UserDontHaveOrg",
        },
        to: "/",
      });
    }
    throw redirect({
      params: {
        organization: context.organizations[0]?.id,
      },
      to: "/console/$organization",
    });
  },
  getParentRoute: () => authenticatedRoutes,
  path: "/",
});

export const routeTree = rootRoute.addChildren([
  sharedRoutes.addChildren([homeRoute, signInRoute, signUpRoute]),
  authenticatedRoutes.addChildren([
    authenticatedHome,
    profileRoute,
    organizationRoute.addChildren([
      dashboardRoute,
      productsRoute,
      ordersRoute,
      clientsRoute,
      settingsRoute,
    ]),
  ]),
]);
