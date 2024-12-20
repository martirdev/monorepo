import { i18n } from "@/shared/lib/localization";
import { Button } from "@/shared/ui/components/button";
import { Link } from "@tanstack/react-router";
import { Params, Tree } from "./types";
import { useMemo } from "react";

type VariantsProps = {
  name: string;
  variants: Set<string>;
  productParam: Params;
  productsTree: Tree;
  sortSizeValues?: (a: string, b: string) => number;
};

function getId(tree: Tree, params: Params) {
  let current = tree;

  // TODO make map, and start from keys from tree
  for (const [key, value] of Object.entries(params)) {
    if (!current.leaf?.[key]?.[value]) return undefined;
    current = current.leaf[key][value];
  }

  return current.product;
}

export function Variant({
  name,
  variants,
  productParam,
  productsTree,
  sortSizeValues,
}: VariantsProps) {
  const sortedValues = useMemo(() => {
    const items = Array.from(variants);

    return sortSizeValues ? items.sort(sortSizeValues) : items;
  }, [variants]);

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <p className="font-medium capitalize">{i18n(name)}</p>
      </div>
      <div className="flex gap-2">
        {sortedValues.map((variant) => {
          const newParams = { ...productParam, [name]: variant };
          const { id, count } = getId(productsTree, newParams) ?? {};

          return (
            <Button
              key={variant}
              variant={productParam[name] === variant ? "default" : "secondary"}
              disabled={!count}
              asChild
            >
              <Link
                to="/product/$productId"
                from="/product/$productId"
                search={id ? { id } : undefined}
                className="capitalize"
                resetScroll={false}
              >
                {i18n(variant)}
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
