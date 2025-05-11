import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Image, Info, Plus, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";

import { ProductCategorySelect } from "@/features/product-category-select";
import { client, queryClient } from "@/shared/api/hono";
import { Button, ButtonProps } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { Label } from "@/shared/ui/label";
import { MultiSelect } from "@/shared/ui/multi-select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { Textarea } from "@/shared/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

import {
  DEFAULT_IMAGE,
  DEFAULT_PACKAGE,
  DEFAULT_PARAM,
  META_PLACEHOLDER,
} from "../consts";
import { ProductCreateForm } from "../types";
import { createProductSchema } from "../utils";

type ProductsCreateButtonPropsType = {
  buttonText: string;
  trigger?: ButtonProps;
};

export function ProductsCreateButton({
  buttonText,
  trigger,
}: ProductsCreateButtonPropsType) {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestData, setRequestData] = useState<ProductCreateForm | undefined>(
    undefined,
  );

  const { mutate } = useMutation({
    mutationFn: async (data: ProductCreateForm) => {
      const response = await client.admin.products.create.$post({
        json: {
          name: data.name,
          category: data.category,
          description: data.description,
          images: data.images ?? [],
          meta: data.meta,
          package: data.package,
          params: data.params,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      setSheetOpen(false);
      setIsModalOpen(false);
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("get-products"),
      });
      toast.success("Товар добавлен");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const form = useForm<ProductCreateForm>({
    resolver: zodResolver(createProductSchema),
    mode: "onBlur",
    defaultValues: {
      category: "",
      description: "",
      images: [DEFAULT_IMAGE],
      name: "",
      package: DEFAULT_PACKAGE,
      params: [DEFAULT_PARAM],
      meta: "",
    },
  });

  const productImages = useFieldArray({
    control: form.control,
    name: "images",
  });
  const productParams = useFieldArray({
    control: form.control,
    name: "params",
  });

  const onSubmit = (data: ProductCreateForm) => {
    setRequestData(data);
    setIsModalOpen(true);
  };

  const handleOpenModal = (value: boolean) => {
    setSheetOpen(value);

    if (value === true) {
      form.reset();
    }
  };

  const generateVariants = useCallback((): Record<string, string>[] => {
    const name = form.watch("name");
    const params = form.watch("params");
    if (params.length === 0) return [];

    const cartesian = (...arrays: string[][]): string[][] => {
      return arrays.reduce<string[][]>(
        (acc, array) => acc.flatMap((x) => array.map((y) => [...x, y])),
        [[]],
      );
    };

    const paramValues = params.map((param) => param.values);
    const combinations = cartesian(...paramValues);
    return combinations.map((combination) => {
      const variant: Record<string, string> = { id: name };
      params.forEach((param, i) => {
        variant[param.name] = combination[i];
      });
      return variant;
    });
  }, []);

  const handleCreateProduct = () => {
    if (!requestData) {
      toast.error("Произошла ошибка, попробуйте снова");
      return;
    }

    mutate(requestData);
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={handleOpenModal}>
      <SheetTrigger asChild>
        <div>
          <Button {...trigger}>{buttonText}</Button>
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-[600px]">
        <SheetHeader>
          <SheetTitle>Создание товаров</SheetTitle>
          <SheetDescription>Добавьте товары в ваш список</SheetDescription>
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
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-4">
                <Label htmlFor="images[0]" className="flex items-center gap-1">
                  Медиа
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-4 underline">
                        <Info size="sm" className="text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Указанные медиа станут доступным из каждого созданонго
                          варианта товара
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                {productImages.fields.map((field, index) => (
                  <FormField
                    control={form.control}
                    key={field.id}
                    name={`images.${index}.url`}
                    render={({ field }) => (
                      <FormItem>
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
                              placeholder={`${import.meta.env.VITE_API_URL}/url-to-image.png`}
                            />
                          </FormControl>
                          <Button
                            size="icon"
                            type="button"
                            variant="outline"
                            onClick={() => productImages.remove(index)}
                            className="shrink-0"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
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
                        Укажите параметры для различных вариантов товаров, такие
                        как: цвет, размер
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
                        <div className="flex gap-2">
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                          <Button
                            size="icon"
                            type="button"
                            variant="outline"
                            onClick={() => productParams.remove(index)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`params.${index}.values`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Значения для параметра #{index + 1}
                        </FormLabel>
                        <MultiSelect
                          options={[]}
                          placeholder="Выбрать значения"
                          value={field.value}
                          onValueChange={field.onChange}
                          onBlur={field.onBlur}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
              <Button
                className="w-full"
                type="button"
                variant="outline"
                onClick={() => productParams.append(DEFAULT_PARAM)}
              >
                <Plus className="mr-2 h-4 w-4" /> Добавить параметр
              </Button>
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
              Добавить товары
            </Button>
          </div>
        </Form>
      </SheetContent>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="flex max-h-[80vh] w-[800px] max-w-[90vw] flex-col">
          <DialogHeader>
            <DialogTitle>Будут созданы товары</DialogTitle>
          </DialogHeader>
          <div className="flex-grow overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Товар</TableHead>
                  {form.watch("params").map((param, i) => (
                    <TableHead key={i}>{param.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {generateVariants().map((variant, index) => (
                  <TableRow key={index}>
                    <TableCell>{variant.id}</TableCell>
                    {form.watch("params").map((param, paramIndex) => (
                      <TableCell key={paramIndex}>
                        {variant[param.name]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <DialogFooter>
            <Button onClick={handleCreateProduct}>Сохранить</Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Отменить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  );
}
