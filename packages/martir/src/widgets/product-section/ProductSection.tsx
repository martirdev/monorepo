import { Counter } from "@/features/counter";
import { PreviewImage } from "@/features/preview-image";
import { productRoute } from "@/pages/product";
import { useLocalStorage } from "@/shared/hooks/use-local-storage";
import { toast } from "@/shared/hooks/use-toast";
import { Button } from "@/shared/ui/components/button";
import { Container } from "@/shared/ui/layouts/container";
import { useForm } from "@tanstack/react-form";
import { Link } from "@tanstack/react-router";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useMemo } from "react";
import { z } from "zod";
import tshirtImg from "./tshirt.png";

const products: Record<
  string,
  { params: Record<string, string>; count: number }
> = {
  t001_Black_XS: { params: { size: "XS", color: "Black" }, count: 4 },
  t001_Black_S: { params: { size: "S", color: "Black" }, count: 3 },
  t001_Black_M: { params: { size: "M", color: "Black" }, count: 5 },
  t001_Black_L: { params: { size: "L", color: "Black" }, count: 1 },
  t001_Black_XL: { params: { size: "XL", color: "Black" }, count: 2 },
  t001_White_XS: { params: { size: "XS", color: "White" }, count: 5 },
  t001_White_S: { params: { size: "S", color: "White" }, count: 5 },
  t001_White_M: { params: { size: "M", color: "White" }, count: 5 },
  t001_White_L: { params: { size: "L", color: "White" }, count: 5 },
  t001_White_XL: { params: { size: "XL", color: "White" }, count: 5 },
  t001_Peach_XS: { params: { size: "XS", color: "Peach" }, count: 5 },
  t001_Peach_S: { params: { size: "S", color: "Peach" }, count: 5 },
  t001_Peach_M: { params: { size: "M", color: "Peach" }, count: 5 },
  t001_Peach_L: { params: { size: "L", color: "Peach" }, count: 5 },
  t001_Peach_XL: { params: { size: "XL", color: "Peach" }, count: 5 },
};

type ProductNode = {
  id?: string;
  children: Record<string, ProductNode>;
};

// Функция для преобразования плоской структуры products в дерево
function createProductTree<T extends {}>(
  products: Record<string, { params: T }>,
  excludeKeys: (keyof T)[]
): ProductNode {
  const root: ProductNode = { children: {} };

  Object.entries(products).forEach(([id, product]) => {
    let currentNode = root;
    Object.entries(product.params).forEach(([key, rawValue]) => {
      const value = rawValue as string;
      if (!excludeKeys.includes(key as keyof T)) {
        if (!currentNode.children[value]) {
          currentNode.children[value] = { children: {} };
        }
        currentNode = currentNode.children[value];
      }
    });
    currentNode.id = id;
  });

  return root;
}

// Функция для получения следующего узла в дереве
function getNextNode(
  tree: ProductNode,
  params: Record<string, string>
): ProductNode | null {
  let currentNode = tree;
  for (const param of Object.values(params)) {
    if (currentNode.children[param]) {
      currentNode = currentNode.children[param];
    } else {
      return null;
    }
  }

  return currentNode;
}

const variants = {
  color: ["Black", "White", "Peach"],
  size: ["XS", "S", "M", "L", "XL"],
};

const VARIANTS_NAME: Record<string, string> = {
  color: "Цвет",
  size: "Размер",
};

const variantsList = Object.entries(variants);

const DEFAULT_CART_VALUE = {};

export function ProductSection() {
  const { productId } = productRoute.useParams();
  const { count, params } = products[productId];
  const [cart, setCart] = useLocalStorage("cart", DEFAULT_CART_VALUE);

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

  const productTree = useMemo(
    () => createProductTree(products, []),
    [products]
  );

  return (
    <Container className="flex flex-col lg:flex-row py-10 gap-10">
      <div className="flex-1 rounded-lg overflow-hidden flex justify-center bg-[#e7e7e7]">
        <PreviewImage src={tshirtImg} alt="Хлопковая футболка" />
      </div>
      <div className="flex-1 max-w-[600px]">
        <div className="space-y-2">
          <h1 className="h4 md:h2">
            Хлопковая оверсайз футболка с&nbsp;вышитым&nbsp;логотипом
          </h1>
          <p className="h2 md:h1 font-black">6 000 ₽</p>
        </div>
        <div className="mt-6 space-y-8">
          {variantsList.map(([name, variants]) => (
            <div key={name} className="space-y-4">
              <div className="space-y-1">
                <p className="font-medium">{VARIANTS_NAME[name]}</p>
              </div>
              <div className="flex gap-2">
                {variants.map((variant) => {
                  const newParams = { ...params, [name]: variant };
                  const nextNode = getNextNode(productTree, newParams);
                  const newProductId = nextNode?.id;

                  return (
                    <Button
                      key={variant}
                      variant={
                        params[name] === variant ? "default" : "secondary"
                      }
                      asChild
                    >
                      <Link
                        to="/product/$productId"
                        params={{ productId: newProductId || "" }}
                      >
                        {variant}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
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
