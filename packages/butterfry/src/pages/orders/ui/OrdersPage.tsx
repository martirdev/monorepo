import { Button } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { OrdersCreateButton } from "./OrdersCreateButton";
import { OrdersFilters } from "./OrdersFilters";
import { OrdersTable } from "./OrdersTable";

export const OrdersPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <OrdersCreateButton>
            <Button size="sm">Создать</Button>
          </OrdersCreateButton>
        }
      >
        Заказы
      </ConsoleTitle>
      <OrdersFilters />
      <OrdersTable />
    </div>
  );
};
