import { ProductCategorySelect } from "@/features/product-category-select";
import { getCategoriesKey } from "@/shared/api/categories";
import { client, queryClient } from "@/shared/api/hono";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { PropsWithChildren, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const productCategorySchema = z.object({
  id: z.string(),
  name: z.string().min(3, "Имя категории должно содержать более 3 символов"),
  parentId: z.string(),
  isActive: z.boolean(),
});

type CategoriesCreateButtonPropsType = PropsWithChildren<{
  defaultValue?: {
    id: string;
    name: string;
    parentId?: string;
    isActive: boolean;
  };
  open?: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
}>;

type CreateCategory = Parameters<
  typeof client.admin.categories.update.$post
>[0]["json"][number];

export function CategoriesCreateButton({
  defaultValue,
  children,
  open,
  onClose,
  onSuccess,
}: CategoriesCreateButtonPropsType) {
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    typeof open === "boolean" && setModalOpen(open);
  }, [open]);

  const { isPending, mutate } = useMutation({
    mutationFn: async (data: CreateCategory) => {
      const request = data.id
        ? client.admin.categories.update.$post
        : client.admin.categories.create.$post;
      const res = await request({ json: [data] });
      return res.json();
    },
    onSuccess: (data) => {
      setModalOpen(false);
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: getCategoriesKey() });
      toast.success(`Категория ${data.categories[0].name} создана`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<z.infer<typeof productCategorySchema>>({
    resolver: zodResolver(productCategorySchema),
    defaultValues: {
      id: defaultValue?.id || "",
      name: defaultValue?.name || "",
      isActive: defaultValue?.isActive || true,
      parentId: defaultValue?.parentId || "",
    },
  });

  const handleSubmit = async (
    values: z.infer<typeof productCategorySchema>,
  ) => {
    mutate({
      id: values.id,
      name: values.name,
      isActive: values.isActive,
      parentCategoryId: values.parentId || undefined,
    });
  };

  const handleOpenModal = (value: boolean) => {
    setModalOpen(value);
    if (value === false) {
      onClose?.();
    } else {
      form.reset();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenModal}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {defaultValue ? "Изменение" : "Создание"} категории товаров
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <div className="mt-4 space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          id={field.name}
                          checked={field.value}
                          onCheckedChange={(val) => field.onChange(!!val)}
                          onBlur={field.onBlur}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel htmlFor={field.name}>Активна</FormLabel>
                        <FormDescription>
                          Неактивные категории не видны в ваших каналах продаж
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Название</FormLabel>
                      <FormControl>
                        <Input {...field} autoFocus />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="parentId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Родительская категория</FormLabel>
                      <ProductCategorySelect
                        {...field}
                        onChange={(option) => field.onChange(option?.value)}
                        isClearable
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <Button type="submit" className="gap-2" disabled={isPending}>
                  {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  {defaultValue ? "Изменить" : "Создать"} категорию
                </Button>
              </DialogFooter>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
