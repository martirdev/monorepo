"use client";
import { Button } from "@/components/shared/button";
import { REFETCH_CUSTOMERS_EVENT } from "@/components/shared/consts";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { trpc } from "@/lib/trpc";
import { preventDefault } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { memo, useState } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import { CLIENT_FORM_INIT_VALUES } from "./consts";
import { useProject } from "@/lib/hooks/params";

type CreateClientLinkPropsType = {
  onSave?: (id: string) => void;
};

const CreateClientLink = memo<CreateClientLinkPropsType>(
  function CreateClientLink({ onSave }) {
    const [open, setOpen] = useState(false);
    const project = useProject();

    const { mutate, isLoading } = trpc.setCustomer.useMutation({
      onSuccess: (data) => {
        dispatchEvent(REFETCH_CUSTOMERS_EVENT);
        onSave?.(data.id);
        toast("Клиент добавлен", {
          description: "Теперь вы можете создать заказ с его участием",
        });
        setOpen(false);
      },
    });

    const form = useForm({
      defaultValues: CLIENT_FORM_INIT_VALUES,
      onSubmit: async ({ value }) => {
        mutate({
          id: v4(),
          firstName: value.firstName,
          secondName: value.secondName,
          thirdName: value.thirdName || undefined,
          contact: value.contact,
          project,
        });
      },
      validatorAdapter: zodValidator,
    });

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="text-xs underline hover:no-underline">
          Создать клиента
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="w-[400px]" onOpenAutoFocus={preventDefault}>
            <DialogHeader>
              <DialogTitle>Создать клиента</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <form.Field name="firstName">
                {(field) => (
                  <div className="space-y-2">
                    <Label htmlFor={field.name}>Имя</Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={field.handleChange}
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
                      onChange={field.handleChange}
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
                      onChange={field.handleChange}
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
                      onChange={field.handleChange}
                    />
                  </div>
                )}
              </form.Field>
            </div>
            <DialogFooter>
              <Button disabled={isLoading} onClick={form.handleSubmit}>
                {isLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Создать
              </Button>
              <DialogClose asChild>
                <Button variant="secondary" disabled={isLoading}>
                  Отменить
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  }
);

export { CreateClientLink };
