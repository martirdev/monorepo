import React, { ReactNode, memo } from "react";
import { Button } from "../button";

type EmptyTableStatePropsType = {
  title: string;
  description: string;
  action: ReactNode;
};

const EmptyTableState = memo<EmptyTableStatePropsType>(
  function EmptyTableState({ title, description, action }) {
    return (
      <div className="max-w-[350px] text-center flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="text-base md:text-xl font-bold">{title}</div>
          <div>{description}</div>
        </div>
        <div>{action}</div>
      </div>
    );
  }
);

export { EmptyTableState };
