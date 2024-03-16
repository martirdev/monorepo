"use client";
import { ORDER_STATUSES } from "@/components/shared/consts";
import { Select } from "@/components/shared/select";
import { ComponentProps, memo } from "react";

export type Statuses = (typeof ORDER_STATUSES)[number]["value"];

type OrderStatusSelectPropsType = Omit<
  ComponentProps<typeof Select>,
  "onValueChange"
> & {
  onValueChange?: (value: Statuses) => void;
};

const OrderStatusSelect = memo<OrderStatusSelectPropsType>(
  function OrderStatusSelect({ ...props }) {
    return <Select {...props} options={ORDER_STATUSES} />;
  }
);

export { OrderStatusSelect };
