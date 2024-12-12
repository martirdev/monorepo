import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/components/button";
import { PropsWithChildren } from "react";

type IconButtonProps = PropsWithChildren<{
  className?: string;
}>;

export function IconButton({ children, className }: IconButtonProps) {
  return (
    <Button variant="ghost" className={cn("relative h-10 w-10 p-0", className)}>
      {children}
    </Button>
  );
}
