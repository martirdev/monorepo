"use client";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import { Button } from "../shared/button";
import { wait } from "@/lib/utils";

const TITLES_BY_MODE: Record<string, string> = {
  create: "Создание заказа",
  edit: "Изменение заказа",
  copy: "Копирование заказа",
  show: "Просмотр заказа",
  not_exist: "Режим не существует",
};

export const OrderSheet = memo(function OrderSheet() {
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
      toast("Заказ создан", {
        description: "",
      });
    },
  });

  return (
    <Sheet open={searchparams.has("mode")} onOpenChange={close}>
      <SheetContent container={document.body} className="w-full">
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
