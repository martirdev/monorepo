import { Counter } from "@/features/counter";
import { PreviewImage } from "@/features/preview-image";
import { productRoute } from "@/pages/product";
import { useGetProducts } from "@/shared/hooks/mock-api";
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

const DEFAULT_CART_VALUE = {};

export function ProductSection() {
  const { productId } = productRoute.useParams();
  const { loading, data: products = {} } = useGetProducts();
  const [cart, setCart] = useLocalStorage("cart", DEFAULT_CART_VALUE);

  const { name = "", count = 0, params = {} } = products[productId] ?? {};
  const countInCart = cart[productId] || 0;

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
        [productId]: (prev[productId] || 0) + value.count,
      }));
    },
  });

  return (
    <Container className="flex flex-col lg:flex-row py-10 gap-10">
      <div className="flex-1 rounded-lg overflow-hidden flex justify-center bg-[#e7e7e7] lg:aspect-square lg:self-start">
        <PreviewImage src={tshirtImg} alt={name} />
      </div>
      <div className="flex-1 max-w-[600px]">
        <div className="space-y-2">
          {loading ? (
            <SkeletonTitle />
          ) : (
            <>
              <h1 className="h4 md:h2">{name}</h1>
              <p className="h2 md:h1 font-black">6 000 ₽</p>
            </>
          )}
        </div>
        <div className="mt-6 space-y-8">
          {loading ? (
            <SkeletonVariants />
          ) : (
            <>
              <Variants products={products ?? {}} productParam={params} />
              <form.Field
                name="count"
                validators={{
                  onChange: z
                    .number()
                    .int("Должно быть целочисленным")
                    .positive("Должно быть больше 0")
                    .max(
                      count - countInCart || 1,
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
            {cart[productId] && (
              <Button variant="outline">В корзине {countInCart} шт.</Button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
