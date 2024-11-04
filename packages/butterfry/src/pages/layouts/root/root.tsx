import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { FC } from "react";
import { z } from "zod";

import { useParamsMessage } from "@/features/lib/useParamsMessage";
import { Error404Page } from "@/pages/error404";
import { authClient } from "@/shared/lib/auth";
import { Toaster } from "@/shared/ui/sonner";
import { Header } from "@/widgets/header";

const RootLayout: FC = () => {
  useParamsMessage();

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="z-0">
        <Outlet />
      </main>
      <Toaster />
      {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />}
    </div>
  );
};

type RootContext = {
  organizations: (typeof authClient.$Infer.Organization)[] | undefined;
  queryClient: QueryClient;
  user: typeof authClient.$Infer.Session | undefined;
};

const validateSearch = z.object({
  code: z.string().optional(),
}).parse;

export const rootRoute = createRootRouteWithContext<RootContext>()({
  beforeLoad: async () => {
    const { data: user } = await authClient.getSession();

    return { user };
  },
  component: RootLayout,
  notFoundComponent: Error404Page,
  validateSearch,
});
