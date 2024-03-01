"use client";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { Textarea } from "@/components/shared/textarea";
import { trpc } from "@/lib/trpc";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useSearchParams } from "next/navigation";
import { memo, useCallback } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import { z } from "zod";

const TITLES_BY_MODE: Record<string, string> = {
  create: "Создание товара",
  edit: "Изменение товара",
  copy: "Копирование товара",
  show: "Просмотр товара",
  not_exist: "Режим не существует",
};

export const ProductSheet = memo(function ProductSheet() {
  const mutation = trpc.setProduct.useMutation({
    onSuccess: () =>
      toast("Товар добавлен", {
        description: "",
      }),
  });
  const searchparams = useSearchParams();

  const close = useCallback(() => {
    const params = new URLSearchParams(searchparams);
    params.delete("mode");
    window.history.pushState(null, "", `?${params.toString()}`);
  }, [searchparams]);

  const mode = searchparams.get("mode");

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      price: undefined! as number,
    },
    onSubmit: async ({ value }) => {
      mutation.mutate({
        id: searchparams.get("id") || v4(),
        name: value.name,
        description: value.description,
        price: value.price,

        // TODO: Добавить поля в форму
        params: [],
        images: [],
      });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <Sheet open={searchparams.has("mode")} onOpenChange={close}>
      <SheetContent
        container={typeof window === "object" ? document.body : undefined}
      >
        <form.Provider>
          <SheetHeader>
            <SheetTitle>
              {TITLES_BY_MODE[mode ?? ""] ?? TITLES_BY_MODE.not_exist}
            </SheetTitle>
          </SheetHeader>
          <div className="py-4 space-y-4">
            <form.Field name="name">
              {(field) => {
                return (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Название</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                );
              }}
            </form.Field>
            <form.Field name="description">
              {(field) => {
                return (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Описание</Label>
                    <Textarea
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                    />
                  </div>
                );
              }}
            </form.Field>
            <form.Field
              name="price"
              validators={{
                onChange: z
                  .number({
                    invalid_type_error: "Стоймость должна быть числом",
                    required_error: "Стоймость обязательная",
                  })
                  .positive("Стоймость должна быть больше 0"),
              }}
            >
              {(field) => {
                return (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Стоймость</Label>
                    <Input
                      type="number"
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) =>
                        field.handleChange(e.target.valueAsNumber)
                      }
                    />
                    {!!field.state.meta.errors.length && (
                      <div className="text-sm text-destructive">
                        {field.state.meta.errors.join("; ")}
                      </div>
                    )}
                  </div>
                );
              }}
            </form.Field>
          </div>
          <SheetFooter>
            <Button disabled={mutation.isLoading} onClick={form.handleSubmit}>
              {mutation.isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Сохранить
            </Button>
          </SheetFooter>
        </form.Provider>
      </SheetContent>
    </Sheet>
  );
});
