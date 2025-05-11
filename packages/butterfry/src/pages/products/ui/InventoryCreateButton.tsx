import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { ProductVariantsSelect } from "@/features/product-variants-select";
import { client, queryClient } from "@/shared/api/hono";
import { GET_INVENTORY_KEY } from "@/shared/api/inventory";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
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

import { CreateInventoryForm } from "../types";
import { createInventorySchema } from "../utils";

type ProductsCreateButtonPropsType = PropsWithChildren<{
  open?: boolean;
  defaultValue?: {
    id?: string;
    sku: string;
    productVariantId: string;
  };
  blockProductVariant?: boolean;
  hideVariantsWithStock?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}>;

export function InventoryCreateButton({
  children,
  open,
  defaultValue,
  blockProductVariant,
  hideVariantsWithStock,
  onClose,
  onSuccess,
}: ProductsCreateButtonPropsType) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: CreateInventoryForm) => {
      const response = await client.admin.inventory.upsert.$post({
        json: {
          id: data.id,
          sku: data.sku,
          productVariantId: data.productVariantId,
          stockedQuantity: data.stockedQuantity,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      setSheetOpen(false);
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(GET_INVENTORY_KEY),
      });
      onSuccess?.();
      toast.success("Товар теперь учитывается на складе");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<CreateInventoryForm>({
    resolver: zodResolver(createInventorySchema),
    mode: "onBlur",
    defaultValues: {
      id: defaultValue?.id || "",
      sku: defaultValue?.sku || "",
      productVariantId: defaultValue?.productVariantId || "",
      stockedQuantity: undefined!,
    },
  });

  const onSubmit = (data: CreateInventoryForm) => {
    mutate(data);
  };

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
    <Dialog open={isSheetOpen} onOpenChange={handleOpenModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Добавление товаров на склад</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <div className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="productVariantId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Вариант товара</FormLabel>
                  <FormControl>
                    <ProductVariantsSelect
                      {...field}
                      id={field.name}
                      onChange={(val) => field.onChange(val?.value)}
                      disabled={blockProductVariant}
                      hideVariantsWithStock={hideVariantsWithStock}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SKU</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stockedQuantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>
                    Сколько товаров добавить
                  </FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              Добавить на склад
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
