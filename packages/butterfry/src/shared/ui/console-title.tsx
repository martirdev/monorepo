import { PropsWithChildren } from "react";

type ConsoleTitleProps = PropsWithChildren<{
  primaryAction?: JSX.Element;
}>;

export const ConsoleTitle = ({
  children,
  primaryAction,
}: ConsoleTitleProps) => {
  return (
    <div className="flex items-end gap-4">
      <h1 className="text-4xl font-bold">{children}</h1>
      {primaryAction}
    </div>
  );
};
