import { ButtonProps } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { ProductsCreateButton } from "./ProductsCreateButton";
import { ProductsFilters } from "./ProductsFilters";
import { ProductsTable } from "./ProductsTable";

const TRIGGER_ARGS: ButtonProps = { size: "sm" };

export const ProductsPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <ProductsCreateButton buttonText="Создать" trigger={TRIGGER_ARGS} />
        }
      >
        Товары
      </ConsoleTitle>
      <ProductsFilters />
      <ProductsTable />
    </div>
  );
};
