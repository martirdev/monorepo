import { Button } from "@/components/shared/button";
import { OrderSheet } from "@/components/widgets/order-sheet";
import { OrdersTable } from "@/components/widgets/orders-table";
import Link from "next/link";
import { Suspense } from "react";

export function OrdersPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg md:text-2xl">Заказы</h1>
        <div className="ml-auto">
          <Link href={{ query: { mode: "create" } }}>
            <Button size="sm">Создать заказ</Button>
          </Link>
        </div>
      </div>
      <div>
        <OrdersTable />
      </div>
      <Suspense>
        <OrderSheet />
      </Suspense>
    </div>
  );
}
