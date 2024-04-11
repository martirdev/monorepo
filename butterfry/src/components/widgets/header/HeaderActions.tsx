"use client";
import { Button } from "@/components/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import Link from "next/link";
import { useUserContext } from "@/components/features/context/user-context";
import { cn } from "@/lib/utils";

type HeaderActionsPropsType = {
  className?: string;
};

export function HeaderActions({ className }: HeaderActionsPropsType) {
  const user = useUserContext();

  if (!user) {
    return;
  }

  return (
    <div className={cn("flex gap-2 items-center", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="block rounded-full border border-gray-200 w-8 h-8"
            size="icon"
            variant="ghost"
          >
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src={`${process.env.AVATAR_URL}/${user.avatar}`}
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {user.surname} {user.name}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="https://t.me/maximmartyr">
            <DropdownMenuItem>Поддержка</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href={`${process.env.BACKEND_API}/logout`}>
            <DropdownMenuItem>Выйти</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
