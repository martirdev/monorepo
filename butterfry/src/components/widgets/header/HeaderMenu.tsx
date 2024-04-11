"use client";
import { Button } from "@/components/shared/button";
import { ADMIN_LINKS } from "@/components/shared/consts";
import { Logo } from "@/components/shared/logo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/shared/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

type HeaderMenuPropsType = {
  className?: string;
};

export function HeaderMenu({ className }: HeaderMenuPropsType) {
  const { project } = useParams();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className={cn("shrink-0", className)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col gap-6">
        <Logo />
        <nav className="grid gap-2 text-lg font-medium">
          {ADMIN_LINKS.map(({ label, value, Icon }) => (
            <SheetClose key={value} asChild>
              <Link
                href={`/${project}/${value}`}
                className="flex items-center gap-4 text-md font-semibold"
              >
                <Icon className="w-4" />
                <span>{label}</span>
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
