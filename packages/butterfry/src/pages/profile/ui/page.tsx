import { createRoute } from "@tanstack/react-router";
import { FC } from "react";

import { authenticatedRoutes } from "@/pages/router";

const ProfilePage: FC = () => {
  return <h1>Profile</h1>;
};

export const profileRoute = createRoute({
  component: ProfilePage,
  getParentRoute: () => authenticatedRoutes,
  path: "profile",
});
