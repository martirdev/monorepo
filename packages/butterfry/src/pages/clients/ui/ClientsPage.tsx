import { ButtonProps } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { ClientsCreateButton } from "./ClientsCreateButton";
import { ClientsFilters } from "./ClientsFilters";
import { ClientsTable } from "./ClientsTable";

const TRIGGER_ARGS: ButtonProps = { size: "sm" };

export const ClientsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <ClientsCreateButton buttonText="Создать" trigger={TRIGGER_ARGS} />
        }
      >
        Клиенты
      </ConsoleTitle>
      <ClientsFilters />
      <ClientsTable />
    </div>
  );
};
