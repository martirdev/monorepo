import { Button } from "@/components/shared/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { Badge } from "../shared/badge";
import { OrderSheet } from "../widgets/order-sheet";
import Link from "next/link";
import { Suspense } from "react";
import { currency, dateFormater } from "@/lib/locale";

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
      <div className="border shadow-sm rounded-lg overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>№</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Время</TableHead>
              <TableHead className="text-right">Итог</TableHead>
              <TableHead>Статус</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">3210</TableCell>
              <TableCell>Olivia Martin</TableCell>
              <TableCell>
                {dateFormater("20240223T12:30").format("YYYY.MM.DD HH:mm")}
              </TableCell>
              <TableCell className="text-right">{currency(12342.0)}</TableCell>
              <TableCell>
                <Badge variant="outline">Завершен</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Suspense>
        <OrderSheet />
      </Suspense>
    </div>
  );
}
