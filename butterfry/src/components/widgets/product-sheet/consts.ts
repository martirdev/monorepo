export const URL_OR_EMPTY_REGEXP = /(https?:\/\/.+)|(^\s*$)/gm;

export const TITLES_BY_MODE: Record<string, string> = {
  create: "Создание товара",
  edit: "Изменение товара",
  copy: "Копирование товара",
  show: "Просмотр товара",
  not_exist: "Режим не существует",
};

export const FORM_INIT_VALUES = {
  name: "",
  description: "",
  price: "" as any as number,
  images: [{ url: "" }] as { url: string }[],
  params: [{ name: "", value: "" }] as { name: string; value: string }[],
};
