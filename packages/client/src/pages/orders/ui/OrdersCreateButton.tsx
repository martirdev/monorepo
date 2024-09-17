import { useForm } from "@tanstack/react-form";
import { Plus, TrashIcon } from "lucide-react";

import { Button, ButtonProps } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Select } from "@/shared/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

import { ORDER_FORM_INIT_VALUES } from "./consts";
import { CreateOrderForm } from "./types";

type OrdersCreateButtonPropsType = {
  buttonText: string;
  trigger?: ButtonProps;
};

export function OrdersCreateButton({
  buttonText,
  trigger,
}: OrdersCreateButtonPropsType) {
  const form = useForm<CreateOrderForm>({
    defaultValues: ORDER_FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Button {...trigger}>{buttonText}</Button>
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-[800px]">
        <SheetHeader>
          <SheetTitle>Создание заказа</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-4">
            <form.Field name="customerId">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Покупатель</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="address">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Адрес</Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field mode="array" name="products">
              {(paramsFields) => (
                <div className="space-y-2">
                  <Label>Корзина</Label>
                  <div className="space-y-2">
                    {paramsFields.state.value.map((_field, i) => (
                      <div className="flex gap-2" key={i}>
                        <div className="flex-1">
                          <form.Field name={`products[${i}].productId`}>
                            {(field) => (
                              <div className="space-y-2">
                                <Label htmlFor={field.name}>Товар</Label>
                                <Select items={[]} />
                                {!!field.state.meta.errors.length && (
                                  <div className="text-xs text-destructive">
                                    {field.state.meta.errors.join("; ")}
                                  </div>
                                )}
                              </div>
                            )}
                          </form.Field>
                        </div>
                        <div className="w-[100px]">
                          <form.Field name={`products[${i}].amount`}>
                            {(field) => (
                              <div className="space-y-2">
                                <Label>Количество</Label>
                                <Input
                                  id={field.name}
                                  name={field.name}
                                  type="number"
                                  value={field.state.value}
                                  onBlur={field.handleBlur}
                                  onChange={(e) =>
                                    field.handleChange(e.target.valueAsNumber)
                                  }
                                />
                                {!!field.state.meta.errors.length && (
                                  <div className="text-xs text-destructive">
                                    {field.state.meta.errors.join("; ")}
                                  </div>
                                )}
                              </div>
                            )}
                          </form.Field>
                        </div>
                        <div className="mt-8">
                          <Button
                            size="icon"
                            variant="secondary"
                            onClick={() => paramsFields.removeValue(i)}
                          >
                            <TrashIcon size="18" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full"
                    type="button"
                    variant="outline"
                    onClick={() =>
                      paramsFields.pushValue({
                        amount: undefined!,
                        productId: undefined!,
                      })
                    }
                  >
                    <Plus className="mr-2 h-4 w-4" /> Добавить товар
                  </Button>
                </div>
              )}
            </form.Field>
          </div>
          <Button className="w-full" type="button" onClick={form.handleSubmit}>
            Создать заказ
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
