"use client";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import {
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { trpc } from "@/lib/trpc";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import { CLIENT_FORM_INIT_VALUES, TITLES_BY_MODE } from "./consts";
import { useProject } from "@/lib/hooks/params";

type ClientFormPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof CLIENT_FORM_INIT_VALUES;
};

const ClientForm = memo<ClientFormPropsType>(function ClientForm({
  id,
  mode,
  initValues,
}) {
  const searchparams = useSearchParams();
  const project = useProject();

  const { mutate, isLoading } = trpc.setCustomer.useMutation({
    onSuccess: (data) => {
      const params = new URLSearchParams(searchparams);
      params.set("id", data.id || id || "");
      params.set("mode", "edit");
      window.history.pushState(null, "", `?${params.toString()}`);

      toast("Клиент добавлен", {
        description: "Теперь вы можете создать заказ с его участием",
      });
    },
  });

  const form = useForm({
    defaultValues: initValues || CLIENT_FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      if (mode === "edit" && !id) {
        throw new Error("ID обязателен для режима редактирования");
      }

      mutate({
        id: mode === "edit" ? id! : v4(),
        firstName: value.firstName,
        secondName: value.secondName,
        project,
        thirdName: value.thirdName || undefined,
        contact: value.contact,
      });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <>
      <SheetHeader>
        <SheetTitle>
          {TITLES_BY_MODE[mode ?? ""] ?? TITLES_BY_MODE.not_exist}
        </SheetTitle>
      </SheetHeader>
      <div className="py-4 space-y-4">
        <form.Field name="firstName">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Имя</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                autoFocus
              />
            </div>
          )}
        </form.Field>
        <form.Field name="secondName">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Фамилия</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <form.Field name="thirdName">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Отчество</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
        <form.Field name="contact">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Контакт</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        </form.Field>
      </div>
      <SheetFooter>
        <Button disabled={isLoading} onClick={form.handleSubmit}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Сохранить
        </Button>
      </SheetFooter>
    </>
  );
});

export { ClientForm };
