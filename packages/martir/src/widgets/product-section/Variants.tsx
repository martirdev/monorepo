import { i18n } from "@/shared/lib/localization";
import { Button } from "@/shared/ui/components/button";
import { Link } from "@tanstack/react-router";
import { useMemo } from "react";

type Params = Record<string, string>;

type VariantsProps = {
  products: Record<string, { params: Params }>;
  productParam: Params;
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

  return (
    <>
      {variantsList.map(([name, variants]) => (
        <div key={name} className="space-y-4">
          <div className="space-y-1">
            <p className="font-medium capitalize">{i18n(name)}</p>
          </div>
          <div className="flex gap-2">
            {variants.map((variant) => {
              const newParams = { ...productParam, [name]: variant };

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
                    from="/product/$productId"
                    search={newParams}
                    className="capitalize"
                  >
                    {i18n(variant)}
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
