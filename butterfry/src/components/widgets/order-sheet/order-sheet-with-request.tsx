"use client";
import { trpc } from "@/lib/trpc";
import { last } from "lodash/fp";
import { memo, useMemo } from "react";
import { OrderSheet } from "./order-sheet";

type OrderSheetWithRequestPropsType = {
  id: string;
  mode: Undefinable<string>;
  version: Undefinable<string>;
};

export const OrderSheetWithRequest = memo<OrderSheetWithRequestPropsType>(
  function OrderSheetWithRequest({ id, mode, version }) {
    const { data } = trpc.getOrder.useQuery({
      id,
    });

    const model = useMemo(() => {
      const selectedVersion = version
        ? data?.orderVersions.find(({ id }) => id === version)
        : last(data?.orderVersions);

      if (!selectedVersion) {
        return;
      }

      return {
        id: selectedVersion.id,
        address: selectedVersion.address,
        customerId: data?.customerId ?? "",
        status: selectedVersion.status,
        products: selectedVersion.products,
      };
    }, [data?.customerId, data?.orderVersions, version]);

    const selectedVersion = useMemo(() => {
      if (version) {
        return version;
      }
      return last(data?.orderVersions)?.id;
    }, [data?.orderVersions, version]);

    return (
      <OrderSheet
        id={id}
        mode={mode}
        initValues={model}
        version={selectedVersion}
        versions={data?.orderVersions}
      />
    );
  }
);
