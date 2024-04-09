import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type CardPropsType = PropsWithChildren<{ className?: string }>;

export const Card = ({ children, className }: CardPropsType) => {
  return (
    <div
      className={cn(
        "py-6 px-4 lg:py-8 lg:px-6 bg-white rounded-2xl w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
