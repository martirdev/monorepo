import { createRoute, redirect } from "@tanstack/react-router";
import { FC } from "react";

import { sharedRoutes } from "@/pages/router";
import { Button } from "@/shared/ui/button";

const SignInPage: FC = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto mt-64 grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Добро пожаловать!</h1>
            <p className="text-balance text-muted-foreground">
              Начни управлять товарами
            </p>
          </div>
          <div className="grid gap-4">
            <Button className="w-full" variant="outline" asChild>
              <a
                href={`/api/user?redirect=${document.location.origin}/api/user/callback`}
              >
                Войти с Яндекс ID
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const signInRoute = createRoute({
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({
        to: "/",
      });
    }
  },
  component: SignInPage,
  getParentRoute: () => sharedRoutes,
  path: "signin",
});
