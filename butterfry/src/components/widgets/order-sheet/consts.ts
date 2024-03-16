import type { Statuses } from "@/components/features/selects/OrderStatusSelect";

export const TITLES_BY_MODE: Record<string, string> = {
  create: "Создание заказа",
  edit: "Изменение заказа",
  copy: "Копирование заказа",
  show: "Просмотр заказа",
  not_exist: "Режим не существует",
};

export const FORM_INIT_VALUES = {
  customerId: undefined! as string,
  status: "CREATED" as Statuses,
  address: undefined! as string,
  products: [{ productId: undefined! as string, amount: undefined! as number }],
};
