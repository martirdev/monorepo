import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { Client } from "../types";
import { ClientDeleteMenuItem } from "./ClientDeleteMenuItem";
import { ClientsCreateButton } from "./ClientsCreateButton";

type ClientsTableActionCellProps = {
  id: string;
  client: Client;
};

export const ClientsTableActionCell = ({
  id,
  client,
}: ClientsTableActionCellProps) => {
  const [modal, setOpenedModal] = useState<string | null>(null);

  const copyId = () => {
    navigator.clipboard.writeText(id);
    toast.message("ID скопирован");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-8 w-8 p-0" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem onClick={copyId}>
            Скопировать ID клиента
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenedModal("client")}>
            Изменить
          </DropdownMenuItem>
          <ClientDeleteMenuItem clientId={id} />
          <DropdownMenuSeparator />
          <DropdownMenuItem>Показать заказы</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ClientsCreateButton
        open={modal === "client"}
        defaultValue={client}
        onClose={() => setOpenedModal(null)}
        onSuccess={() => setOpenedModal(null)}
      />
    </>
  );
};
