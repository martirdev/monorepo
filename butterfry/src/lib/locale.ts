import dayjs from "dayjs";
import "dayjs/locale/ru";
import relativeTime from "dayjs/plugin/relativeTime";

export const currency = (number: number | string) => {
  const value = Intl.NumberFormat("ru", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(Number(number));

  return `${value} ₽`;
};

export const unit = (number: number | string) => {
  const value = Intl.NumberFormat("ru", { maximumFractionDigits: 0 }).format(
    Number(number)
  );
  return `${value} шт.`;
};

type Credentials = {
  firstName: string;
  secondName: string;
  thirdName?: string | null;
};
export const convertCredentialsToShort = (credentials: Credentials) => {
  return [
    credentials.secondName,
    `${credentials.firstName.charAt(0)}.`,
    credentials.thirdName ? `${credentials.thirdName.charAt(0)}.` : undefined,
  ]
    .filter(Boolean)
    .join(" ");
};

dayjs.locale("ru");
dayjs.extend(relativeTime);
export const dateFormater = dayjs;

export const transformId = (id: string) =>
  `${id.slice(0, 5)}...${id.slice(-5)}`;
