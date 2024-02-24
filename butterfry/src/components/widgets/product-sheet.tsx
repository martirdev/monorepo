"use client";
import { Button } from "@/components/shared/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { wait } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { toast } from "sonner";

const TITLES_BY_MODE: Record<string, string> = {
  create: "Создание товара",
  edit: "Изменение товара",
  copy: "Копирование товара",
  show: "Просмотр товара",
  not_exist: "Режим не существует",
};

export const ProductSheet = memo(function ProductSheet() {
  const searchparams = useSearchParams();

  const close = useCallback(() => {
    const params = new URLSearchParams(searchparams);
    params.delete("mode");
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [searchparams]);

  const mode = searchparams.get("mode");

  const form = useForm({
    defaultValues: {
      fullName: "",
    },
    onSubmit: async ({ value }) => {
      await wait(5000);
      toast("Товар добавлен", {
        description: "",
      });
    },
  });

  return (
    <Sheet open={searchparams.has("mode")} onOpenChange={close}>
      <SheetContent
        container={typeof window === "object" ? document.body : undefined}
      >
        <SheetHeader>
          <SheetTitle>
            {TITLES_BY_MODE[mode ?? ""] ?? TITLES_BY_MODE.not_exist}
          </SheetTitle>
        </SheetHeader>
        <div className="py-4"></div>
        <SheetFooter>
          <Button
            disabled={form.state.isSubmitting}
            onClick={form.handleSubmit}
          >
            {form.state.isSubmitting && (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Сохранить
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
});
