import { Counter } from "@/features/counter";
import { PreviewImage } from "@/features/preview-image";
import { productRoute } from "@/pages/product";
import { useProduct } from "@/shared/api/products";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { toast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/ui/components/button";
import { Container } from "@/shared/ui/layouts/container";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";
import { SkeletonTitle } from "./SkeletonTitle";
import { SkeletonVariants } from "./SkeletonVartiants";
import tshirtImg from "./tshirt.png";
import { Variants } from "./Variants";
import { useMemo } from "react";
import { financial } from "@/shared/lib/localization";

const DEFAULT_CART_VALUE = {};

type Product = {
  name: string;
  count: number;
  price: number;
  params: Record<string, string>;
};

export function ProductSection() {
  const { productId } = productRoute.useParams();
  const {
    product: { id },
  } = productRoute.useLoaderData();

  const { data, isLoading } = useProduct(productId);
  const [cart, setCart] = useLocalStorage("cart", DEFAULT_CART_VALUE);

  const productMap = useMemo(
    () =>
      data?.products?.products.reduce<Record<string, Product>>((acc, item) => {
        const params = item.productToParams.reduce<Record<string, string>>(
          (acc, item) => {
            acc[item.params.name] = item.params.value;
            return acc;
          },
          {}
        );

        acc[item.id] = {
          name: item.name,
          price: Number(item.price || 0),
          count: item.count || 0,
          params: params,
        };
        return acc;
      }, {}) ?? {},
    [data?.products?.products]
  );

  const { name, price, count, params } = productMap[id] ?? {};
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
    <Container className="flex flex-col lg:flex-row py-10 gap-10">
      <div className="flex-1 rounded-lg overflow-hidden flex justify-center bg-[#e7e7e7] lg:aspect-square lg:self-start">
        <PreviewImage src={tshirtImg} alt={name} />
      </div>
      <div className="flex-1 max-w-[600px] md:max-w-full">
        <div className="space-y-2">
          {isLoading ? (
            <SkeletonTitle />
          ) : (
            <>
              <h1 className="h4 md:h2">{name}</h1>
              <p className="h2 md:h1 font-black">{financial(price)}</p>
            </>
          )}
        </div>
        <div className="mt-6 space-y-8">
          {isLoading ? (
            <SkeletonVariants />
          ) : (
            <>
              <Variants products={productMap} productParam={params} />
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
                      <div className="text-sm text-gray-600">
                        Осталось {count - countInCart} шт.
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex gap-2">
                        <Counter
                          id={field.name}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={field.handleChange}
                        />
                      </div>
                      {field.state.meta.isTouched &&
                      field.state.meta.errors.length ? (
                        <em className="text-xs text-red-600">
                          {field.state.meta.errors[0]}
                        </em>
                      ) : null}
                    </div>
                  </div>
                )}
              </form.Field>
            </>
          )}
          <div className="flex gap-2">
            <Button onClick={form.handleSubmit} disabled={countInCart >= count}>
              Добавить в корзину
            </Button>
            {cart[id] && (
              <Button variant="outline">В корзине {countInCart} шт.</Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
