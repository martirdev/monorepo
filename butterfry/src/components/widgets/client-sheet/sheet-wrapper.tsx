"use client";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { ClientSheet } from "./client-sheet";
import { ClientSheetWithRequest } from "./client-sheet-with-request";

type SheetWrapperPropsType = {};

const SheetWrapper = memo<SheetWrapperPropsType>(function SheetWrapper({}) {
  const searchparams = useSearchParams();
  const id = searchparams.get("id");
  const mode = searchparams.get("mode");

  if (id) {
    return <ClientSheetWithRequest id={id} mode={mode} />;
  }

  return <ClientSheet id={id} mode={mode} />;
});

export { SheetWrapper };
