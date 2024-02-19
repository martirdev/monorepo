"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";

export const ProductSheet = memo(function ProductSheet() {
  const searchparams = useSearchParams();

  const close = useCallback(() => {
    const params = new URLSearchParams(searchparams);
    params.delete("mode");
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [searchparams]);

  return (
    <Sheet open={searchparams.has("mode")} onOpenChange={close}>
      <SheetContent
        container={typeof window === "object" ? document.body : undefined}
      >
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
});
