"use client";
import { Counter } from "@/features/counter";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { toast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/ui/components/button";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

const DEFAULT_CART_VALUE = {};

type ProductAddToCartFormProps = {
  count: number;
  id: string;
};

export function ProductAddToCartForm({ count, id }: ProductAddToCartFormProps) {
  const [cart, setCart] = useLocalStorage("cart", DEFAULT_CART_VALUE);
  const countInCart = cart[id] || 0;

  const form = useForm({
    defaultValues: {
      count: 1,
    },
    validatorAdapter: zodValidator(),
    onSubmit: ({ value }) => {
      toast({
        title: "Товар добавлен в корзину",
        description: "Продолжайте покупки",
        duration: 3000,
      });
      setCart((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + value.count,
      }));
    },
  });

  return (
    <>
      <form.Field
        name="count"
        validators={{
          onChange: z
            .number()
            .int("Должно быть целочисленным")
            .positive("Должно быть больше 0")
            .max(
              count - countInCart,
              `Должно быть меньше ${count - countInCart}`
            ),
        }}
      >
        {(field) => (
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="font-medium">Количество</p>
              <div className="text-sm text-gray-600">Осталось {count} шт.</div>
            </div>
            <div className="space-y-1">
              <div className="flex gap-2">
                <Counter
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={field.handleChange}
                  max={count - countInCart}
                  min={1}
                />
              </div>
              {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em className="text-xs text-red-600">
                  {field.state.meta.errors[0]}
                </em>
              ) : null}
            </div>
          </div>
        )}
      </form.Field>
      <div className="flex gap-2">
        <Button onClick={form.handleSubmit} disabled={countInCart >= count}>
          Добавить в корзину
        </Button>
        {cart[id] && (
          <Button variant="outline">В корзине {countInCart} шт.</Button>
        )}
      </div>
    </>
  );
}
