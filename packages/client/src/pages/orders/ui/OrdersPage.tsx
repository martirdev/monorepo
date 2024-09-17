import { ButtonProps } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { OrdersCreateButton } from "./OrdersCreateButton";
import { OrdersFilters } from "./OrdersFilters";
import { OrdersTable } from "./OrdersTable";

const TRIGGER_ARGS: ButtonProps = { size: "sm" };

export const OrdersPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <OrdersCreateButton buttonText="Создать" trigger={TRIGGER_ARGS} />
        }
      >
        Заказы
      </ConsoleTitle>
      <OrdersFilters />
      <OrdersTable />
    </div>
  );
};
