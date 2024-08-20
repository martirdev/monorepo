import { QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Menu } from "lucide-react";
import { FC } from "react";
import { z } from "zod";

import { useParamsMessage } from "@/features/lib/useParamsMessage";
import { userQueryOptions, useUser } from "@/features/lib/useUser";
import { Error404Page } from "@/pages/error404";
import Logo from "@/shared/assets/logo.svg?react";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Toaster } from "@/shared/ui/sonner";

const RootLayout: FC = () => {
  const { data } = useUser();
  useParamsMessage();

  const shorthandName = data?.user
    ? `${data.user.secondName.charAt(0)}${data.user.firstName.charAt(0)}`
    : "";

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 px-4 backdrop-blur-md md:px-6">
        <div>
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link to="/">
              <Logo className="h-10 w-6" />
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <div className="shrink-0 md:hidden">
                <Button size="icon" variant="outline">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню навигации</span>
                </Button>
              </div>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>Меню</SheetHeader>
              <nav className="grid gap-6 text-lg font-medium"></nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="ml-auto">
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            {data?.user && (
              <Button size="sm" variant="secondary" asChild>
                <Link className="flex gap-2" to="/console">
                  Консоль
                </Link>
              </Button>
            )}
            {data?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <Button
                      className="flex rounded-full"
                      size="icon"
                      variant="secondary"
                    >
                      <Avatar className="size-10 sm:flex">
                        <AvatarFallback>{shorthandName}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    {data.user.secondName} {data.user.firstName}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Настройки</DropdownMenuItem>
                  <DropdownMenuItem>Поддержка</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <a href="/api/user/logout">Выйти</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="secondary" asChild>
                <Link to="/login">Войти</Link>
              </Button>
            )}
          </div>
        </div>
      </header>
      <main className="z-0">
        <Outlet />
      </main>
      <Toaster />
      {process.env.NODE_ENV !== "production" && <TanStackRouterDevtools />}
    </div>
  );
};

type RootContext = {
  queryClient: QueryClient;
};

const rootRouteSearchSchema = z.object({
  code: z.string().optional(),
});

export const rootRoute = createRootRouteWithContext<RootContext>()({
  beforeLoad: async ({ context: { queryClient } }) => {
    return {
      userData: await queryClient.fetchQuery(userQueryOptions),
    };
  },
  component: RootLayout,
  notFoundComponent: Error404Page,
  validateSearch: rootRouteSearchSchema.parse,
});
