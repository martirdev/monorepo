"use client";
import { Sheet, SheetContent } from "@/components/shared/sheet";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { ClientForm } from "./client-form";
import { CLIENT_FORM_INIT_VALUES } from "./consts";

type ClientSheetPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof CLIENT_FORM_INIT_VALUES;
};

export const ClientSheet = memo<ClientSheetPropsType>(function ClientSheet({
  id,
  mode,
  initValues,
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
        className="overflow-auto"
      >
        <ClientForm id={id} mode={mode} initValues={initValues} />
      </SheetContent>
    </Sheet>
  );
});
