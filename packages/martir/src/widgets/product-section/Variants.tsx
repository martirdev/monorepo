import { useMemo } from "react";
import { Variant } from "./Variant";
import { Params, Tree } from "./types";
import { sortSizeValues } from "./utils";

type VariantsProps = {
  products: {
    id: string;
    count: number | null;
    productToParams: {
      params: {
        value: string;
        name: string;
      };
    }[];
  }[];
  productParam: Params;
};

export function Variants({ products, productParam }: VariantsProps) {
  const variantsMap = useMemo(
    () =>
      products.reduce<Record<string, Set<string>>>((acc, product) => {
        product.productToParams.forEach(({ params }) => {
          (acc[params.name] ??= new Set()).add(params.value);
        });
        return acc;
      }, {}),
    [products]
  );

  const tree = useMemo(() => {
    const rawTree: Tree = { leaf: {} };
    products.forEach((product) => {
      let node = rawTree;

      product.productToParams.forEach(({ params }) => {
        if (!node.leaf) {
          node.leaf = {};
        }
        if (!node.leaf[params.name]) {
          node.leaf[params.name] = {};
        }
        if (!node.leaf[params.name][params.value]) {
          node.leaf[params.name][params.value] = {};
        }
        node = node.leaf[params.name][params.value];
      });

      node.product = product;
    });
    return rawTree;
  }, [products]);

  return (
    <>
      {variantsMap["color"].size && (
        <Variant
          name="color"
          variants={variantsMap["color"]}
          productParam={productParam}
          productsTree={tree}
        />
      )}
      {variantsMap["size"].size && (
        <Variant
          name="size"
          variants={variantsMap["size"]}
          productParam={productParam}
          sortSizeValues={sortSizeValues}
          productsTree={tree}
        />
      )}
    </>
  );
}
