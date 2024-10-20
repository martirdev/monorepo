type Local = "ru";

const local: Local = "ru" as const;

export const i18n = (key: string) => localization[key]?.[local] || key;

export const localization: Record<string, Record<Local, string>> = {
  color: {
    ru: "цвет",
  },
  size: {
    ru: "размер",
  },
  black: {
    ru: "черный",
  },
  white: {
    ru: "белый",
  },
  peach: {
    ru: "персиковый",
  },
};
