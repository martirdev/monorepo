import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { FC } from "react";

import { useParamsMessage } from "@/features/lib/useParamsMessage";
import { rootRoute } from "@/pages/layouts/root";
import Logo from "@/shared/assets/logo.svg?react";
import { authClient } from "@/shared/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/shared/ui/sheet";

export const Header: FC = () => {
  const { user: data } = rootRoute.useRouteContext();
  useParamsMessage();

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 px-4 backdrop-blur-md md:px-6">
      <div className="flex gap-4">
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
        <nav className="flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link to="/">
            <Logo className="h-10 w-6" />
          </Link>
        </nav>
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
                      <AvatarImage src={data.user.image} />
                      <AvatarFallback>
                        {data.user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/console/profile">{data.user.name}</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Настройки</DropdownMenuItem>
                <DropdownMenuItem>Поддержка</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => authClient.signOut()}>
                  Выйти
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="secondary" asChild>
                <Link to="/signin">Войти</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/signup">Зарегистрироваться</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
