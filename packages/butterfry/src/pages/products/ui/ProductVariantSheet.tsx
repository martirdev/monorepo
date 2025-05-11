import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Image, Info, Plus, Trash2, Undo2 } from "lucide-react";
import { PropsWithChildren, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ProductCategorySelect } from "@/features/product-category-select";
import { client, queryClient } from "@/shared/api/hono";
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
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import { Textarea } from "@/shared/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

import { DEFAULT_IMAGE, META_PLACEHOLDER } from "../consts";
import { ProductVariantUpdateForm } from "../types";
import { updateProductVariantSchema } from "../utils";

type ProductVariantSheetPropsType = PropsWithChildren<{
  defaultValues: ProductVariantUpdateForm;
}>;

export function ProductVariantSheet({
  children,
  defaultValues,
}: ProductVariantSheetPropsType) {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (data: ProductVariantUpdateForm) => {
      const response = await client.admin.products.variants.update.$post({
        json: {
          id: defaultValues.id,
          name: data.name,
          category: data.category,
          description: data.description,
          images: (data.images ?? [])
            .filter((item) => item.type !== "default")
            .map((item) => {
              if (item.type !== "deleted") return item;

              return {
                ...item,
                id: item.imageId,
              };
            }),
          meta: data.meta,
          package: data.package,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      setSheetOpen(false);
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("get-products"),
      });
      toast.success("Вариант товара изменен");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<ProductVariantUpdateForm>({
    resolver: zodResolver(updateProductVariantSchema),
    mode: "onBlur",
    defaultValues,
  });

  const productImages = useFieldArray({
    control: form.control,
    name: "images",
  });
  const productParams = useFieldArray({
    control: form.control,
    name: "params",
  });

  const onSubmit = (data: ProductVariantUpdateForm) => {
    mutate(data);
  };

  const handleOpenModal = (value: boolean) => {
    setSheetOpen(value);

    if (value === true) {
      form.reset();
    }
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleOpenModal}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Вариант товара "{defaultValues?.name}"</SheetTitle>
        </SheetHeader>
        <Form {...form}>
          <div className="mt-4 space-y-6">
            <div className="space-y-4">
              <Label className="text-md font-bold">Общие</Label>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Название</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Описание</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>Категория</FormLabel>
                    <FormControl>
                      <ProductCategorySelect
                        {...field}
                        id={field.name}
                        onChange={(val) => field.onChange(val?.value)}
                        isClearable
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <Label htmlFor="images[0]">Медиа</Label>
                {productImages.fields.map((imagesField, index) => {
                  return (
                    <FormField
                      control={form.control}
                      key={imagesField.id}
                      name={`images.${index}.url`}
                      render={({ field }) => (
                        <FormItem
                          className={
                            imagesField.type === "deleted"
                              ? "opacity-60"
                              : undefined
                          }
                        >
                          <div className="flex gap-2">
                            <div className="flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-gray-200">
                              {field.value ? (
                                <img
                                  src={field.value}
                                  className="f-full h-full object-cover"
                                  onError={({ currentTarget }) =>
                                    (currentTarget.src = "")
                                  }
                                />
                              ) : (
                                <Image className="text-gray-400" />
                              )}
                            </div>
                            <FormControl>
                              <Input
                                {...field}
                                className={
                                  imagesField.type === "deleted"
                                    ? "line-through"
                                    : undefined
                                }
                                readOnly={imagesField.type === "deleted"}
                                placeholder={`${import.meta.env.VITE_API_URL}/url-to-image.png`}
                              />
                            </FormControl>
                            {imagesField.type === "deleted" ? (
                              <Button
                                size="icon"
                                type="button"
                                variant="outline"
                                onClick={() =>
                                  productImages.update(index, {
                                    imageId: imagesField.imageId,
                                    url: imagesField.url,
                                    type: "default",
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
                                  imagesField.type === "default"
                                    ? productImages.update(index, {
                                        imageId: imagesField.imageId,
                                        url: imagesField.url,
                                        type: "deleted",
                                      })
                                    : productImages.remove(index)
                                }
                                className="shrink-0"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  );
                })}
                <Button
                  className="w-full"
                  type="button"
                  variant="outline"
                  onClick={() => productImages.append(DEFAULT_IMAGE)}
                >
                  <Plus className="mr-2 h-4 w-4" /> Добавить Изображение
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <Label className="text-md font-bold">Габариты поссылки</Label>
              <FormField
                control={form.control}
                name="package.weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Общий вес{" "}
                      <span className="text-xs text-gray-400">(кг)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="package.width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Ширина <span className="text-xs text-gray-400">(см)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="package.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Длина <span className="text-xs text-gray-400">(см)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="package.height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Высота <span className="text-xs text-gray-400">(см)</span>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="number" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-6">
              <Label
                htmlFor={`params[0].name`}
                className="text-md flex items-center gap-1 font-bold"
              >
                Параметры
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="w-4 underline">
                      <Info size="md" className="text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent className="font-normal">
                      <p>
                        Параметры отличающие данную вариацию товара, от других
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              {productParams.fields.map((_field, index) => (
                <div className="space-y-3" key={index}>
                  <FormField
                    control={form.control}
                    name={`params.${index}.name`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Название для параметра #{index + 1}
                        </FormLabel>
                        <FormControl>
                          <Input {...field} readOnly />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`params.${index}.values.0`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Значения для параметра #{index + 1}
                        </FormLabel>
                        <FormControl>
                          <Input {...field} readOnly />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <Label className="text-md font-bold">
                Дополнительная информация
              </Label>
              <FormField
                control={form.control}
                name="meta"
                render={({ field }) => (
                  <div className="space-y-2">
                    <FormLabel className="flex items-center gap-1">
                      Мета
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="w-4 underline">
                            <Info size="sm" className="text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              JSON для дополнительной информации, необходимой
                              для вашего проекта
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder={META_PLACEHOLDER} />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
            </div>
            <Button
              className="w-full"
              type="button"
              onClick={form.handleSubmit(onSubmit)}
            >
              Изменить вариант
            </Button>
          </div>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
