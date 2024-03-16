"use client";
import { Sheet, SheetContent } from "@/components/shared/sheet";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { FORM_INIT_VALUES } from "./consts";
import { OrderForm } from "./order-form";

type OrderSheetPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof FORM_INIT_VALUES;
  version?: string;
  versions?: { id: string }[];
};

export const OrderSheet = memo<OrderSheetPropsType>(function OrderSheet({
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
        className="overflow-auto sm:w-[450px] sm:max-w-[initial]"
      >
        <OrderForm
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
