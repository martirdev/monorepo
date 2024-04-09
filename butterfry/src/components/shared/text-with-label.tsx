import { PropsWithChildren } from "react";

type TextWithLabelPropsType = PropsWithChildren<{ label: string }>;

export const TextWithLabel = ({ children, label }: TextWithLabelPropsType) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-gray-400">{label}</div>
      <div>{children}</div>
    </div>
  );
};
