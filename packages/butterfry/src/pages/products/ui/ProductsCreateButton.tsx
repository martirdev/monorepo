import { useForm } from "@tanstack/react-form";
import { Info, Plus, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

import { Button, ButtonProps } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { MultiSelect, MultiSelectOptionItem } from "@/shared/ui/multi-select";
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
import { z } from "zod";

const productPackageScheme = z.object({
  weight: z.number().positive().optional(),
  length: z.number().positive().optional(),
  width: z.number().positive().optional(),
  height: z.number().positive().optional(),
});

const productParamScheme = z.object({
  name: z.string(),
  values: z.array(z.string()).min(1),
});

const productSchema = z.object({
  categories: z.array(z.string()),
  description: z.string(),
  images: z.array(z.string()),
  name: z.string(),
  package: productPackageScheme,
  params: z.array(productParamScheme).min(1),
});

type ProductPackage = z.infer<typeof productPackageScheme>;
type ProductParam = z.infer<typeof productParamScheme>;
type ProductForm = z.infer<typeof productSchema>;

const DEFAULT_PACKAGE: ProductPackage = {
  height: undefined!,
  length: undefined!,
  weight: undefined!,
  width: undefined!,
};
const DEFAULT_PARAM: ProductParam = {
  name: "",
  values: [],
};
const DEFAULT_IMAGE = "";
const DEFAULT_PARAMS_OPTIONS: MultiSelectOptionItem[] = [];
const DEFAULT_CATEGORIES_OPTIONS: MultiSelectOptionItem[] = [];

const META_PLACEHOLDER = `{
  "tags": ["tshirt", "cotton"],
  ...
}`;

type ProductsCreateButtonPropsType = {
  buttonText: string;
  trigger?: ButtonProps;
};

export function ProductsCreateButton({
  buttonText,
  trigger,
}: ProductsCreateButtonPropsType) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const form = useForm<ProductForm>({
    defaultValues: {
      categories: [],
      description: "",
      images: [DEFAULT_IMAGE],
      name: "",
      package: DEFAULT_PACKAGE,
      params: [DEFAULT_PARAM],
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const handleSaveChanges = () => {
    setIsModalOpen(true);
  };

  const generateVariants = useCallback((): Record<string, string>[] => {
    const name = form.getFieldValue("name");
    const params = form.getFieldValue("params");
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

  return (
    <Sheet>
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
        <div className="mt-4 space-y-6">
          <div className="space-y-4">
            <Label className="text-md font-bold">Общие</Label>
            <form.Field name="name">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Название</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="description">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Описание</Label>
                  <Textarea
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="categories">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Категории</Label>
                  <MultiSelect
                    id={field.name}
                    options={DEFAULT_CATEGORIES_OPTIONS}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onValueChange={field.handleChange}
                  />
                </div>
              )}
            </form.Field>
            <form.Field mode="array" name="images">
              {(field) => (
                <div className="space-y-4">
                  <Label
                    htmlFor="images[0]"
                    className="flex items-center gap-1"
                  >
                    Медиа
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-4 underline">
                          <Info size="sm" className="text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            Указанные медиа станут доступным из каждого
                            созданонго варианта товара
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  {field.state.value.map((_, i) => (
                    <div className="space-y-2" key={i}>
                      <form.Field name={`images[${i}]`}>
                        {(imageField) => (
                          <div className="flex gap-2">
                            <img
                              src={imageField.state.value}
                              className="aspect-square w-10 shrink-0 rounded-md bg-gray-200 object-cover"
                              onError={({ currentTarget }) =>
                                (currentTarget.src = "")
                              }
                            />
                            <Input
                              id={imageField.name}
                              value={imageField.state.value}
                              onBlur={imageField.handleBlur}
                              onChange={(e) =>
                                imageField.handleChange(e.target.value)
                              }
                              placeholder={`${import.meta.env.VITE_API_URL}/url-to-image.png`}
                            />
                            <Button
                              size="icon"
                              type="button"
                              variant="outline"
                              onClick={() => field.removeValue(i)}
                              className="shrink-0"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        )}
                      </form.Field>
                    </div>
                  ))}
                  <Button
                    className="w-full"
                    type="button"
                    variant="outline"
                    onClick={() => field.pushValue(DEFAULT_IMAGE)}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Добавить Изображение
                  </Button>
                </div>
              )}
            </form.Field>
          </div>
          <div className="space-y-4">
            <Label className="text-md font-bold">Габариты поссылки</Label>
            <form.Field name="package.weight">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>
                    Общий вес{" "}
                    <span className="text-xs text-gray-400">(кг)</span>
                  </Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="package.width">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>
                    Ширина <span className="text-xs text-gray-400">(см)</span>
                  </Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="package.length">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>
                    Длина <span className="text-xs text-gray-400">(см)</span>
                  </Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="package.height">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>
                    Высота <span className="text-xs text-gray-400">(см)</span>
                  </Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    type="number"
                    onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <form.Field mode="array" name="params">
            {(field) => (
              <>
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
                            Укажите параметры для различных вариантов товаров,
                            такие как: цвет, размер
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  {field.state.value.map((_, i) => (
                    <div className="space-y-4" key={i}>
                      <form.Field name={`params[${i}].name`}>
                        {(nameField) => (
                          <div className="space-y-2">
                            <Label htmlFor={nameField.name}>
                              Параметр #{i + 1}
                            </Label>
                            <div className="flex gap-2">
                              <Input
                                id={nameField.name}
                                value={nameField.state.value}
                                onBlur={nameField.handleBlur}
                                onChange={(e) =>
                                  nameField.handleChange(e.target.value)
                                }
                              />
                              <Button
                                size="icon"
                                type="button"
                                variant="outline"
                                onClick={() => field.removeValue(i)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}
                      </form.Field>
                      <form.Field name={`params[${i}].values`}>
                        {(valuesField) => (
                          <div className="space-y-2">
                            <Label htmlFor={valuesField.name}>
                              Значения "Параметр #{i + 1}"
                            </Label>
                            <MultiSelect
                              id={valuesField.name}
                              options={DEFAULT_PARAMS_OPTIONS}
                              placeholder="Выбрать значения"
                              onBlur={valuesField.handleBlur}
                              onValueChange={valuesField.handleChange}
                            />
                          </div>
                        )}
                      </form.Field>
                    </div>
                  ))}
                </div>
                <Button
                  className="w-full"
                  type="button"
                  variant="outline"
                  onClick={() => field.pushValue(DEFAULT_PARAM)}
                >
                  <Plus className="mr-2 h-4 w-4" /> Добавить параметр
                </Button>
              </>
            )}
          </form.Field>
          <div className="space-y-4">
            <Label className="text-md font-bold">
              Дополнительная информация
            </Label>
            <form.Field name="description">
              {(field) => (
                <div className="space-y-2">
                  <Label
                    htmlFor={field.name}
                    className="flex items-center gap-1"
                  >
                    Мета
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="w-4 underline">
                          <Info size="sm" className="text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            JSON для дополнительной информации, необходимой для
                            вашего проекта
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Label>
                  <Textarea
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder={META_PLACEHOLDER}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <Button className="w-full" type="button" onClick={handleSaveChanges}>
            Добавить товары
          </Button>
        </div>
      </SheetContent>
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="flex max-h-[80vh] w-[800px] max-w-[90vw] flex-col">
          <DialogHeader>
            <DialogTitle>Варианты товара</DialogTitle>
            <DialogDescription>
              Отметьте флажками варианты товаров, которые хотите добавить
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Товар</TableHead>
                  {form.getFieldValue("params").map((param, i) => (
                    <TableHead key={i}>{param.name}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {generateVariants().map((variant, index) => (
                  <TableRow key={index}>
                    <TableCell>{variant.id}</TableCell>
                    {form.getFieldValue("params").map((param, paramIndex) => (
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
            <Button onClick={form.handleSubmit}>Сохранить</Button>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Отменить
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Sheet>
  );
}
