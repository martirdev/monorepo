import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { client, queryClient } from "@/shared/api/hono";
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

import { CreatePriceForm } from "../types";
import { createPriceSchema } from "../utils";
import { GET_PRODUCTS_KEY } from "@/shared/api/products";

type ProductsCreateButtonPropsType = PropsWithChildren<{
  open?: boolean;
  defaultValue?: {
    productVariantId: string;
    price?: number;
  };
  onClose?: () => void;
  onSuccess?: () => void;
}>;

export function PriceCreateButton({
  children,
  open,
  defaultValue,
  onClose,
  onSuccess,
}: ProductsCreateButtonPropsType) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: CreatePriceForm) => {
      const response = await client.admin.prices.create.$post({
        json: {
          productId: data.productVariantId,
          price: data.price,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      setSheetOpen(false);
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(GET_PRODUCTS_KEY),
      });
      onSuccess?.();
      toast.success("Цена изменена");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<CreatePriceForm>({
    resolver: zodResolver(createPriceSchema),
    mode: "onBlur",
    defaultValues: {
      productVariantId: defaultValue?.productVariantId,
      price: defaultValue?.price || ("" as any as number),
    },
  });

  const onSubmit = (data: CreatePriceForm) => {
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
          <DialogTitle>Изменение цены варианта товара</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <div className="mt-4 space-y-4">
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Цена</FormLabel>
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
              Изменить цену
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
