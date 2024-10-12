import { Client } from "@/pages/clients/ui/types";

export type Order = {
  client: Client;
  id: string;
  status: "CREATED";
  time: string;
  total: number;
};

export type OrdersFilterForm = {
  id: string;
};

export type OrderStatuses =
  | "CANCELED"
  | "COMPLETED"
  | "CREATED"
  | "IN_DELIVERY"
  | "IN_PROCESS"
  | "NEED_INFO"
  | "READY_TO_DELIVERY"
  | "REFUND";

export type CreateOrderForm = {
  address: string;
  customerId: string;
  products: { amount: number; productId: string }[];
  status: OrderStatuses;
};
