"use client";
import { trpc } from "@/lib/trpc";
import { last } from "lodash/fp";
import { memo, useMemo } from "react";
import { ProductSheet } from "./product-sheet";

type ProductSheetWithRequestPropsType = {
  id: string;
  mode: Undefinable<string>;
  version: Undefinable<string>;
};

export const ProductSheetWithRequest = memo<ProductSheetWithRequestPropsType>(
  function ProductSheetWithRequest({ id, mode, version }) {
    const { data } = trpc.getProduct.useQuery({
      id,
    });

    const model = useMemo(() => {
      const selectedVersion = version
        ? data?.versions.find(({ id }) => id === version)
        : last(data?.versions);

      if (!selectedVersion) {
        return;
      }

      return {
        name: selectedVersion.name,
        description: selectedVersion.description,
        price: selectedVersion.price,
      };
    }, [data?.versions, version]);

    const selectedVersion = useMemo(() => {
      if (version) {
        return version;
      }
      return last(data?.versions)?.id;
    }, [data?.versions, version]);

    return (
      <ProductSheet
        id={id}
        mode={mode}
        initValues={model}
        version={selectedVersion}
        versions={data?.versions}
      />
    );
  }
);
