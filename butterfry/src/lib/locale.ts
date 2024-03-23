import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

export const currency = (number: number | string) => {
  const value = Intl.NumberFormat("ru", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(number));

  return `${value} ₽`;
};

export const unit = (number: number | string) => {
  const value = Intl.NumberFormat("ru", { maximumFractionDigits: 0 }).format(
    Number(number)
  );
  return `${value} шт.`;
};

dayjs.locale("ru");
dayjs.extend(relativeTime);
export const dateFormater = dayjs;
