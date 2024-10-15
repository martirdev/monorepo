import { Product, Products } from "@/shared/hooks/mock-api";
import { Button } from "@/shared/ui/components/button";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { createProductTree, getNextNode } from "./utils";

const VARIANTS_NAME: Record<string, string> = {
  color: "Цвет",
  size: "Размер",
};

type VariantsProps = {
  products: Products;
  productParam: Product["params"];
};

export function Variants({ products, productParam }: VariantsProps) {
  const variantsList = useMemo(() => {
    const variants = Object.values(products ?? []).reduce<
      Record<string, Set<string>>
    >((acc, product) => {
      Object.entries(product.params).forEach(([key, value]) => {
        (acc[key] ??= new Set()).add(value);
      });
      return acc;
    }, {});
    return Object.entries(variants).map(
      ([key, value]) => [key, Array.from(value)] as const
    );
  }, [productParam]);

  const productTree = useMemo(
    () => createProductTree(products ?? {}, []),
    [products]
  );

  return (
    <>
      {variantsList.map(([name, variants]) => (
        <div key={name} className="space-y-4">
          <div className="space-y-1">
            <p className="font-medium">{VARIANTS_NAME[name]}</p>
          </div>
          <div className="flex gap-2">
            {variants.map((variant) => {
              const newParams = { ...productParam, [name]: variant };
              const nextNode = getNextNode(productTree, newParams);

              return (
                <Button
                  key={variant}
                  variant={
                    productParam[name] === variant ? "default" : "secondary"
                  }
                  asChild
                >
                  <Link
                    to="/product/$productId"
                    params={{ productId: nextNode?.id || "" }}
                  >
                    {variant}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
