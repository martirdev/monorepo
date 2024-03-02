"use client";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { ProductSheet } from "./product-sheet";
import { ProductSheetWithRequest } from "./product-sheet-with-request";

type SheetWrapperPropsType = {};

const SheetWrapper = memo<SheetWrapperPropsType>(function SheetWrapper({}) {
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const mode = searchparams.get("mode");
  const version = searchparams.get("version");

  if (id) {
    return <ProductSheetWithRequest id={id} mode={mode} version={version} />;
  }

  return <ProductSheet id={id} mode={mode} />;
});

export { SheetWrapper };
