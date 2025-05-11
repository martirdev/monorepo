import { Button } from "@/shared/ui/button";
import { ConsoleTitle } from "@/shared/ui/console-title";

import { CategoriesCreateButton } from "./CategoriesCreateButton";
import { CategoriesTable } from "./CategoriesTable";

export const CategoriesPage = () => {
  return (
    <div className="flex flex-col gap-6">
      <ConsoleTitle
        primaryAction={
          <CategoriesCreateButton>
            <Button size="sm">Создать</Button>
          </CategoriesCreateButton>
        }
      >
        Категории товаров
      </ConsoleTitle>
      <CategoriesTable />
    </div>
  );
};
