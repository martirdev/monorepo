import { keyBy } from "lodash/fp";

export const ORDER_STATUSES = [
  { value: "CREATED" as const, label: "Создан" },
  { value: "IN_PROCESS" as const, label: "В обработке" },
  { value: "NEED_INFO" as const, label: "Требуется информация" },
  { value: "READY_TO_DELIVERY" as const, label: "Готов к отправке" },
  { value: "IN_DELIVERY" as const, label: "Доставляется" },
  { value: "COMPLETED" as const, label: "Завершен" },
  { value: "CANCELED" as const, label: "Отменен" },
  { value: "REFUND" as const, label: "Возврат" },
];

export const ORDER_STATUSES_DICT = keyBy(({ value }) => value, ORDER_STATUSES);

export const REFETCH_CUSTOMERS_EVENT = new Event("refetch_customers");
