import { LucideIcon } from "lucide-react";
import { FC } from "react";

import { cn } from "@/shared/lib/utils";

type BlankSlate = {
  className: string;
  description: string;
  icon: LucideIcon;
  title: string;
  primaryAction?: JSX.Element;
};

export const BlankSlate: FC<BlankSlate> = ({
  className,
  description,
  icon: Icon,
  primaryAction,
  title,
}) => {
  return (
    <div className={cn("max-w-[500px] text-center", className)}>
      <Icon className="m-auto h-12 w-12" />
      <div className="mb-6 mt-4">
        <h2 className="mb-2 text-2xl font-medium">{title}</h2>
        <p className="text-zinc-500">{description}</p>
      </div>
      {primaryAction}
    </div>
  );
};
