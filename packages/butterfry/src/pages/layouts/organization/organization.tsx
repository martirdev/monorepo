import {
  createRoute,
  Link,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import React, { FC } from "react";

import { authenticatedRoutes } from "@/pages/router";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/ui/breadcrumb";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

type BreadcrumbItem = { title: string; to: string };

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

const CustomBreadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const itemsToShow = items.length > 4 ? [items[0], ...items.slice(-2)] : items;

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {itemsToShow.map((item, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              {index === itemsToShow.length - 1 ? (
                <BreadcrumbPage>{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link from="/console/$organization" to={item.to}>
                    {item.title}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < itemsToShow.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
        {items.length > 4 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {items.slice(1, -2).map((item, index) => (
                    <DropdownMenuItem key={index}>
                      <Link to={item.to}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

const OrganizationLayout: FC = () => {
  const breadcrumbs = useRouterState({
    select: (state) =>
      state.matches.reduce<BreadcrumbItem[]>((acc, match) => {
        const metaGroup = match.meta?.find((item) => item.id === "meta");
        if (metaGroup && metaGroup.title) {
          acc.push({ title: metaGroup.title, to: match.routeId });
        }
        return acc;
      }, []),
  });

  return (
    <div className="flex flex-col gap-4 px-4 py-6 md:flex-row">
      <div className="-m-1 flex min-w-[200px] gap-1 overflow-auto p-1 md:flex-col">
        <Button className="flex justify-start" variant="ghost" asChild>
          <Link
            activeOptions={{
              exact: true,
            }}
            activeProps={{
              className: "bg-accent text-accent-foreground",
            }}
            from="/console/$organization"
            to="/console/$organization"
          >
            Сводка
          </Link>
        </Button>
        <Button className="flex justify-start" variant="ghost" asChild>
          <Link
            activeProps={{
              className: "bg-accent text-accent-foreground",
            }}
            from="/console/$organization"
            to="/console/$organization/products"
          >
            Товары
          </Link>
        </Button>
        <Button className="flex justify-start" variant="ghost" asChild>
          <Link
            activeProps={{
              className: "bg-accent text-accent-foreground",
            }}
            from="/console/$organization"
            to="/console/$organization/orders"
          >
            Заказы
          </Link>
        </Button>
        <Button className="flex justify-start" variant="ghost" asChild>
          <Link
            activeProps={{
              className: "bg-accent text-accent-foreground",
            }}
            from="/console/$organization"
            to="/console/$organization/clients"
          >
            Клиенты
          </Link>
        </Button>
        <Button className="flex justify-start" variant="ghost" asChild>
          <Link
            activeProps={{
              className: "bg-accent text-accent-foreground",
            }}
            from="/console/$organization"
            to="/console/$organization/settings"
          >
            Настройки
          </Link>
        </Button>
      </div>
      <div className="flex-1">
        <div className="flex h-10 items-center">
          <CustomBreadcrumb items={breadcrumbs} />
        </div>
        <div className="py-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export const organizationRoute = createRoute({
  component: OrganizationLayout,
  getParentRoute: () => authenticatedRoutes,
  meta: (context) => {
    const userOrganizations = context.match.context?.organizations ?? [];
    const currentOrganization = context.params.organization;

    return [
      {
        id: "meta",
        title:
          userOrganizations.find((org) => org?.id === currentOrganization)
            ?.name ?? currentOrganization,
      },
    ];
  },
  path: "$organization",
});
