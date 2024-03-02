"use client";
import { Sheet, SheetContent } from "@/components/shared/sheet";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { FORM_INIT_VALUES } from "./consts";
import { ProductForm } from "./product-form";

type ProductSheetPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof FORM_INIT_VALUES;
  version?: string;
  versions?: { id: string }[];
};

export const ProductSheet = memo<ProductSheetPropsType>(function ProductSheet({
  id,
  mode,
  initValues,
  version,
  versions,
}) {
  const searchparams = useSearchParams();

  const close = useCallback(() => {
    const params = new URLSearchParams(searchparams);
    params.delete("mode");
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [searchparams]);

  return (
    <Sheet open={!!mode} onOpenChange={close}>
      <SheetContent
        container={typeof window === "object" ? document.body : undefined}
      >
        <ProductForm
          id={id}
          mode={mode}
          initValues={initValues}
          version={version}
          versions={versions}
          key={version}
        />
      </SheetContent>
    </Sheet>
  );
});
