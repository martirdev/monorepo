import { Button } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { ClientsCreateButton } from "./ClientsCreateButton";
import { ClientsTable } from "./ClientsTable";

export const ClientsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <ClientsCreateButton>
            <Button size="sm">Добавить</Button>
          </ClientsCreateButton>
        }
      >
        Клиенты
      </ConsoleTitle>
      <ClientsTable />
    </div>
  );
};
