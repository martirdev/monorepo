import { ReactNode } from "react";

export type Option = {
  label: string;
  value: string;
  icon?: string;
  description?: string | ReactNode;
};
