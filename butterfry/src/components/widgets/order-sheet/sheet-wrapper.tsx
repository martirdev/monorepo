"use client";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { OrderSheet } from "./order-sheet";
import { OrderSheetWithRequest } from "./order-sheet-with-request";

type SheetWrapperPropsType = {};

const SheetWrapper = memo<SheetWrapperPropsType>(function SheetWrapper({}) {
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const mode = searchparams.get("mode");
  const version = searchparams.get("version");

  if (id) {
    return <OrderSheetWithRequest id={id} mode={mode} version={version} />;
  }

  return <OrderSheet id={id} mode={mode} />;
});

export { SheetWrapper };
