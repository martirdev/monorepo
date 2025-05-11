import { Button } from "@/shared/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";

import { InventoryCreateButton } from "./InventoryCreateButton";
import { ProductDeleteMenuItem } from "./ProductDeleteMenuItem";
import { PriceCreateButton } from "./PriceCreateButton";

type ProductsTableActionCellProps = {
  id: string;
  depth: number;
  stockId?: string;
  sku?: string;
};

export const ProductsTableActionCell = ({
  id,
  stockId,
  depth,
  sku,
}: ProductsTableActionCellProps) => {
  const [modal, setOpenedModal] = useState<string | null>(null);

  const isVariant = depth !== 0;

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
          <DropdownMenuItem onClick={copyId}>Скопировать ID</DropdownMenuItem>
          {!isVariant && <ProductDeleteMenuItem productId={id} />}
          {isVariant && (
            <DropdownMenuItem onClick={() => setOpenedModal("price")}>
              Изменить цену
            </DropdownMenuItem>
          )}
          {isVariant && (
            <DropdownMenuItem onClick={() => setOpenedModal("stock")}>
              Изменить количество на складе
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <InventoryCreateButton
        open={modal === "stock"}
        defaultValue={{
          id: stockId,
          productVariantId: id,
          sku: sku || "",
        }}
        onClose={() => setOpenedModal(null)}
        onSuccess={() => setOpenedModal(null)}
        blockProductVariant
      />
      <PriceCreateButton
        open={modal === "price"}
        defaultValue={{
          productVariantId: id,
        }}
        onClose={() => setOpenedModal(null)}
        onSuccess={() => setOpenedModal(null)}
      />
    </>
  );
};
