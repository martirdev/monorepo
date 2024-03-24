import { Button } from "@/components/shared/button";
import { ClientSheet } from "@/components/widgets/client-sheet";
import { ClientsTable } from "@/components/widgets/clients-table";
import Link from "next/link";
import { Suspense } from "react";

export function ClientsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg md:text-2xl">Клиенты</h1>
        <div className="ml-auto">
          <Link href={{ query: { mode: "create" } }}>
            <Button size="sm">Создать клиента</Button>
          </Link>
        </div>
      </div>
      <div>
        <ClientsTable />
      </div>
      <Suspense>
        <ClientSheet />
      </Suspense>
    </div>
  );
}
