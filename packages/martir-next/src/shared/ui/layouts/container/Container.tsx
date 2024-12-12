import { PropsWithChildren } from "react";
import { cn } from "@/shared/lib/utils";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("w-full px-4 xl:px-16", className)}>{children}</div>
  );
}
