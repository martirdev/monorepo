"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/shared/alert";
import { TextLink } from "@/components/shared/text-link";
import { Share1Icon } from "@radix-ui/react-icons";
import { memo } from "react";

type ClientOrderAlertPropsType = {
  id: string;
};

const ClientOrderAlert = memo<ClientOrderAlertPropsType>(
  function ClientOrderAlert({ id }) {
    return (
      <Alert>
        <Share1Icon className="h-4 w-4" />
        <AlertTitle>Заказ для клиента!</AlertTitle>
        <AlertDescription>
          <span className="mr-2">
            Поделитесь ссылкой с клиентом, что-бы он мог отслеживать статус
            вашего заказа
          </span>
          <TextLink target="_blank" href={`/order/${id}`}>
            #{id}
          </TextLink>
        </AlertDescription>
      </Alert>
    );
  }
);

export { ClientOrderAlert };
