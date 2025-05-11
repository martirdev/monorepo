import { keyBy } from "lodash/fp";

export const ORDER_STATUSES = [
  { label: "Создан", value: "CREATED" as const },
  { label: "В обработке", value: "IN_PROCESS" as const },
  { label: "Требуется информация", value: "NEED_INFO" as const },
  { label: "Готов к отправке", value: "READY_TO_DELIVERY" as const },
  { label: "Доставляется", value: "IN_DELIVERY" as const },
  { label: "Завершен", value: "COMPLETED" as const },
  { label: "Отменен", value: "CANCELED" as const },
  { label: "Возврат", value: "REFUND" as const },
];

export const ORDER_STATUSES_DICT = keyBy(({ value }) => value, ORDER_STATUSES);
