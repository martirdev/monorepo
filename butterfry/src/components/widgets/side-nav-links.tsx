"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

const LINKS = [
  {
    label: "Товары",
    value: "/products",
  },
  {
    label: "Заказы",
    value: "/orders",
  },
];

export const SideNavLinks = memo(function SideNavLinks() {
  const pathname = usePathname();
  return (
    <nav className="grid items-start px-4 text-sm font-medium">
      {LINKS.map(({ label, value }) => (
        <Link
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
            pathname === value
              ? "bg-gray-100 text-gray-900 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              : ""
          )}
          href={value}
          key={value}
        >
          <div className="h-4 w-4" /> {/* TODO: Добавить иконку */}
          {label}
        </Link>
      ))}
    </nav>
  );
});
