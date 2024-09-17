import { useForm } from "@tanstack/react-form";
import { Plus, Trash2 } from "lucide-react";
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

interface Param {
  name: string;
  values: string[];
}

interface ProductForm {
  description: string;
  name: string;
  params: Param[];
  price: string;
}

const DEFAULT_PARAM = {
  name: "",
  values: [],
};
const DEFAULT_PARAMS_OPTIONS: MultiSelectOptionItem[] = [];

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
      description: "",
      name: "",
      params: [DEFAULT_PARAM],
      price: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  const handleSaveChanges = () => {
    setIsModalOpen(true);
  };

  // Что-то тут совсем не эффективное
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
    return combinations.map((combination, index) => {
      const variant: Record<string, string> = { id: `${name} ${index + 1}` };
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
      <SheetContent className="max-w-[800px]">
        <SheetHeader>
          <SheetTitle>Создание товаров</SheetTitle>
          <SheetDescription>Добавьте товары в ваш список</SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-4">
            <form.Field name="name">
              {(field) => (
                <div>
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
                <div>
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
            <form.Field name="price">
              {(field) => (
                <div>
                  <Label htmlFor={field.name}>Цена</Label>
                  <Input
                    id={field.name}
                    step="0.01"
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <form.Field mode="array" name="params">
            {(field) => (
              <>
                <div className="space-y-6">
                  {field.state.value.map((_, i) => (
                    <div className="space-y-4" key={i}>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-bold">
                          Параметр #{i + 1}
                        </div>
                        <Button
                          size="icon"
                          type="button"
                          variant="ghost"
                          onClick={() => field.removeValue(i)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Удалить параметр</span>
                        </Button>
                      </div>
                      <form.Field name={`params[${i}].name`}>
                        {(nameField) => (
                          <div>
                            <Label htmlFor={nameField.name}>Название</Label>
                            <Input
                              id={nameField.name}
                              value={nameField.state.value}
                              onBlur={nameField.handleBlur}
                              onChange={(e) =>
                                nameField.handleChange(e.target.value)
                              }
                            />
                          </div>
                        )}
                      </form.Field>
                      <form.Field name={`params[${i}].values`}>
                        {(valuesField) => (
                          <div>
                            <Label htmlFor={valuesField.name}>Значения</Label>
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
                  {form.getFieldValue("params").map((param, index) => (
                    <TableHead key={index}>{param.name}</TableHead>
                  ))}
                  <TableHead>Цена</TableHead>
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
                    <TableCell>{form.getFieldValue("price")}</TableCell>
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
