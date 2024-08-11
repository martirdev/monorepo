import { PropsWithChildren } from "react";

export const ConsoleTitle = ({ children }: PropsWithChildren) => {
  return <h1 className="text-4xl font-bold">{children}</h1>;
};
