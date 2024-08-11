import { DetailedHTMLProps } from "react";

import { cn } from "../lib/utils";

export const Container = ({
  children,
  className,
  ...props
}: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  return (
    <div className={cn("p-4 md:p-10", className)} {...props}>
      {children}
    </div>
  );
};
