"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { memo, useMemo } from "react";

const LINKS = [
  {
    label: "Товары",
    value: "products",
  },
  {
    label: "Заказы",
    value: "orders",
  },
  {
    label: "Клиенты",
    value: "clients",
  },
  {
    label: "Настройки",
    value: "settings",
  },
];

export const SideNavLinks = memo(function SideNavLinks() {
  const pathname = usePathname();
  const { project } = useParams();

  const [_, _project, path] = useMemo(() => pathname.split("/"), [pathname]);

  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {project &&
        LINKS.map(({ label, value }) => (
          <Link
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
              path === value
                ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                : ""
            )}
            href={`/${project}/${value}`}
            key={value}
          >
            {label}
          </Link>
        ))}
    </nav>
  );
});
