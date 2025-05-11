"use client";
import { useMemo } from "react";
import { Variant } from "./Variant";
import { Params, Tree } from "./types";
import { sortSizeValues } from "./utils";

type VariantsProps = {
  products: {
    id: string;
    stock: {
      stockedQuantity: number | undefined;
    };
    params: {
      productVariantId: string;
      productParamValueId: string;
      paramValue: {
        value: string;
        id: string;
        paramId: string;
        param: {
          id: string;
          name: string;
        };
      };
    }[];
  }[];
  productParam: Params;
};

export function Variants({ products, productParam }: VariantsProps) {
  const variantsMap = useMemo(
    () =>
      products.reduce<Record<string, Set<string>>>((acc, product) => {
        product.params.forEach((param) => {
          (acc[param.paramValue.param.name] ??= new Set()).add(
            param.paramValue.value
          );
        });
        return acc;
      }, {}),
    [products]
  );

  const tree = useMemo(() => {
    const rawTree: Tree = { leaf: {} };
    products.forEach((product) => {
      let node = rawTree;

      product.params.forEach((param) => {
        if (!node.leaf) {
          node.leaf = {};
        }
        if (!node.leaf[param.paramValue.param.name]) {
          node.leaf[param.paramValue.param.name] = {};
        }
        if (!node.leaf[param.paramValue.param.name][param.paramValue.value]) {
          node.leaf[param.paramValue.param.name][param.paramValue.value] = {};
        }
        node = node.leaf[param.paramValue.param.name][param.paramValue.value];
      });

      node.product = product;
    });
    return rawTree;
  }, [products]);

  return (
    <>
      {variantsMap["color"] && (
        <Variant
          name="color"
          variants={variantsMap["color"]}
          productParam={productParam}
          productsTree={tree}
        />
      )}
      {variantsMap["size"] && (
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
