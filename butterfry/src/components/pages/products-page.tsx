import { Button } from "@/components/shared/button";
import { ProductSheet } from "@/components/widgets/product-sheet";
import { ProductsTable } from "@/components/widgets/products-table";
import Link from "next/link";
import { Suspense } from "react";
import { PermissionTooltip } from "../features/permission-tooltip";

export function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg md:text-2xl">Товары</h1>
        <div className="ml-auto">
          <PermissionTooltip permissions={["EDITOR", "OWNER"]}>
            <Button size="sm" asChild>
              <Link href={{ query: { mode: "create" } }}>Добавить товар</Link>
            </Button>
          </PermissionTooltip>
        </div>
      </div>
      <div>
        <ProductsTable />
      </div>
      <Suspense>
        <ProductSheet />
      </Suspense>
    </div>
  );
}
