import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { omit } from "lodash/fp";
import { Loader2, Trash2, Undo2 } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ContactsTypeSelect } from "@/features/contacts-type-select";
import { getClientsKey } from "@/shared/api/clients";
import { client, queryClient } from "@/shared/api/hono";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { CreateClientForm } from "../types";
import { clientSchema } from "../utils";
import { cn } from "@/shared/lib/utils";

type ClientsCreateButtonPropsType = PropsWithChildren<{
  defaultValue?: {
    id: string;
    firstName?: string;
    secondName?: string;
    thirdName?: string;
    contacts: {
      id: string;
      contact: string;
      type:
        | "vk"
        | "ok"
        | "telegram"
        | "instagram"
        | "email"
        | "youtube"
        | "phone";
    }[];
  };
  open?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}>;

export function ClientsCreateButton({
  defaultValue,
  children,
  open,
  onClose,
  onSuccess,
}: ClientsCreateButtonPropsType) {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    typeof open === "boolean" && setModalOpen(open);
  }, [open]);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: CreateClientForm) => {
      const request = data.id
        ? (client.admin.clients.update.$post as any)
        : client.admin.clients.create.$post;

      const dataRequest = data.id ? data : omit("id", data);
      const dataRequestWithContacts = {
        ...dataRequest,
        contacts: dataRequest.contacts
          .filter((item) => item.action !== "default")
          .map((item) => ({
            ...item,
            id: item.action === "remove" ? item.contactId : undefined,
          })),
      };

      const res = await request({ json: dataRequestWithContacts });
      return res.json();
    },
    onSuccess: (data) => {
      setModalOpen(false);
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getClientsKey() });
      toast.success(
        `Клиент ${data.client.secondName} ${data.client.firstName} добавлен`,
      );
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<CreateClientForm>({
    resolver: zodResolver(clientSchema),
    mode: "onBlur",
    defaultValues: {
      id: defaultValue?.id || "",
      firstName: defaultValue?.firstName || "",
      secondName: defaultValue?.secondName || "",
      thirdName: defaultValue?.thirdName || "",
      contacts: defaultValue?.contacts.map((contact) => ({
        ...contact,
        contactId: contact.id,
        action: "default",
      })) || [
        {
          contact: "",
          type: undefined!,
          action: "add",
        },
      ],
    },
  });

  const contactsField = useFieldArray({
    name: "contacts",
    control: form.control,
  });

  const handleSubmit = async (values: CreateClientForm) => {
    mutate({
      id: values.id,
      firstName: values.firstName || undefined,
      secondName: values.secondName || undefined,
      thirdName: values.thirdName || undefined,
      contacts: values.contacts,
    });
  };

  const handleOpenModal = (value: boolean) => {
    setModalOpen(value);
    if (value === false) {
      onClose?.();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {defaultValue ? "Изменение данных" : "Добавление"} клиента
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="mt-4 space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="secondName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Фамилия</FormLabel>
                      <FormControl>
                        <Input {...field} autoFocus />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Имя</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thirdName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Отчество</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="space-y-4">
                  <FormLabel>Контакты</FormLabel>

                  {contactsField.fields.map((contactField, index) => (
                    <div
                      className={cn(
                        "flex gap-2",
                        contactField.action === "remove"
                          ? "opacity-60"
                          : undefined,
                      )}
                      key={index}
                    >
                      <FormField
                        key={contactField.id}
                        control={form.control}
                        name={`contacts.${index}.type`}
                        render={({ field }) => (
                          <FormItem className="min-w-[160px]">
                            <FormControl>
                              <ContactsTypeSelect
                                {...field}
                                defaultValue={field.value}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`contacts.${index}.contact`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormControl>
                              <Input
                                {...field}
                                readOnly={contactField.action === "default"}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {contactField.action === "remove" ? (
                        <Button
                          size="icon"
                          type="button"
                          variant="outline"
                          onClick={() =>
                            contactsField.update(index, {
                              contactId: contactField.contactId,
                              contact: contactField.contact,
                              type: contactField.type,
                              action: "default",
                            })
                          }
                          className="shrink-0"
                        >
                          <Undo2 className="h-4 w-4" />
                        </Button>
                      ) : (
                        <Button
                          size="icon"
                          type="button"
                          variant="outline"
                          onClick={() =>
                            contactField.action === "default"
                              ? contactsField.update(index, {
                                  contactId: contactField.contactId,
                                  contact: contactField.contact,
                                  type: contactField.type,
                                  action: "remove",
                                })
                              : contactsField.remove(index)
                          }
                          className="shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  ))}
                  <div>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() =>
                        contactsField.append({
                          type: undefined!,
                          contact: "",
                          action: "add",
                        })
                      }
                    >
                      Добавить контакт
                    </Button>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="gap-2" disabled={isPending}>
                  {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  {defaultValue ? "Изменить" : "Добавить"} клиента
                </Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
