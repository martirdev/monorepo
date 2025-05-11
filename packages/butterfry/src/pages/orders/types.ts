import { Client } from "@/pages/clients/types";
import { z } from "zod";
import { createOrderScheme } from "./utils";

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

export type CreateOrderForm = z.infer<typeof createOrderScheme>;
