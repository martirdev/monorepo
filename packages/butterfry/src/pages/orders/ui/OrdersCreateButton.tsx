import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Plus, Trash2 } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ClientsSelect } from "@/features/clients-select";
import { ProductVariantsSelect } from "@/features/product-variants-select";
import { queryClient } from "@/shared/api";
import { client } from "@/shared/api/hono";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

import { CreateOrderForm } from "../types";
import { createOrderScheme } from "../utils";

type OrdersCreateButtonPropsType = PropsWithChildren<{
  open?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}>;

export function OrdersCreateButton({
  children,
  open,
  onClose,
  onSuccess,
}: OrdersCreateButtonPropsType) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: CreateOrderForm) => {
      const response = await client.admin.orders.create.$post({
        json: data,
      });
      return response.json();
    },
    onSuccess: () => {
      setSheetOpen(false);
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(""),
      });
      onSuccess?.();
      toast.success("Заказ сформирован, можете передать его клиенту");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onSubmit = (data: CreateOrderForm) => {
    mutate(data);
  };

  const form = useForm<CreateOrderForm>({
    resolver: zodResolver(createOrderScheme),
    mode: "onBlur",
    defaultValues: {
      products: [{ productId: undefined!, quantity: 1 }],
    },
  });

  const productsField = useFieldArray({
    control: form.control,
    name: "products",
  });

  const handleOpenModal = (value: boolean) => {
    setSheetOpen(value);

    if (value === false) {
      onClose?.();
    } else {
      form.reset();
    }
  };

  useEffect(() => {
    typeof open === "boolean" && setSheetOpen(open);
  }, [open]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleOpenModal}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="max-w-[800px]">
        <SheetHeader>
          <SheetTitle>Создание заказа</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <div className="mt-4 space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="clientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Клиент</FormLabel>
                    <FormControl>
                      <ClientsSelect
                        {...field}
                        id={field.name}
                        onChange={(val) => field.onChange(val?.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <Label className="text-md font-bold">Товары</Label>
              {productsField.fields.map((productField, index) => (
                <>
                  <div className="flex w-full flex-1 gap-2">
                    <FormField
                      control={form.control}
                      key={productField.id}
                      name={`products.${index}.productId`}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel htmlFor={field.name}>Товар</FormLabel>
                          <ProductVariantsSelect
                            {...field}
                            placeholder="Хлопковая футболка"
                            onChange={(e) => field.onChange(e?.value)}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      key={productField.id}
                      name={`products.${index}.quantity`}
                      render={({ field }) => (
                        <FormItem className="w-[150px]">
                          <FormLabel htmlFor={field.name}>Количество</FormLabel>
                          <Input
                            {...field}
                            placeholder="1"
                            type="number"
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      size="icon"
                      type="button"
                      variant="outline"
                      onClick={() => productsField.remove(index)}
                      className="mt-8 shrink-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  productsField.append({
                    productId: undefined!,
                    quantity: 1,
                  })
                }
              >
                <Plus className="mr-2 h-4 w-4" /> Добавить товар
              </Button>
            </div>
          </div>
        </Form>
        <SheetFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Создать заказ</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
