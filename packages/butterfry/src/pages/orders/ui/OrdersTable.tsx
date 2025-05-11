import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format, formatRelative } from "date-fns";
import { ru } from "date-fns/locale";
import { Squirrel } from "lucide-react";
import { useState } from "react";

import { BlankSlate } from "@/features/blank-slate";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { useOrders } from "@/shared/api/orders";
import { currency } from "@/shared/lib/intlnumbers";
import { makeShortName } from "@/shared/lib/nameFormats";
import { ORDER_STATUSES_DICT } from "../consts";
import { Order } from "../types";

export const columns: ColumnDef<Order>[] = [
  // {
  //   cell: ({ row }) => (
  //     <Checkbox
  //       aria-label="Select row"
  //       checked={row.getIsSelected()}
  //       onCheckedChange={ary(1, row.toggleSelected)}
  //     />
  //   ),
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       aria-label="Выбрать все"
  //       onCheckedChange={ary(1, table.toggleAllPageRowsSelected)}
  //     />
  //   ),
  //   id: "id",
  //   size: 50,
  // },
  {
    accessorKey: "id",
    cell: ({ row }) => (
      <div className="whitespace-nowrap font-bold capitalize">
        {row.getValue("id")}
      </div>
    ),
    header: "№",
  },
  {
    accessorKey: "client",
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        {makeShortName(
          row.original.client.firstName,
          row.original.client.secondName,
          row.original.client.thirdName,
        )}
      </div>
    ),
    header: "Клиент",
  },
  {
    accessorKey: "total",
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {currency.format(row.original.totalAmount)}
      </div>
    ),
    header: () => <div className="text-right">Итог</div>,
  },
  {
    accessorKey: "updatedAt",
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        {row.original.updatedAt === row.original.createdAt
          ? ""
          : formatRelative(row.original.updatedAt, new Date(), { locale: ru })}
      </div>
    ),
    header: "Обновлен",
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        {format(row.original.createdAt, "HH:mm dd.MM.yyyy")}
      </div>
    ),
    header: "Создан",
  },
  {
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge>
        {row.original.orderStatuses.length
          ? undefined
          : ORDER_STATUSES_DICT.CREATED.label}
      </Badge>
    ),
    header: () => <div>Статус</div>,
    size: 100,
  },
];

export function OrdersTable() {
  const { data } = useOrders();
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data: data?.orders ?? [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    style={{
                      width: header.id === "name" ? "auto" : header.getSize(),
                    }}
                    key={header.id}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  data-state={row.getIsSelected() && "selected"}
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  className="h-24 text-center"
                  colSpan={columns.length}
                >
                  <BlankSlate
                    className="mx-auto py-10"
                    description="Создайте и передайте его клиенту"
                    icon={Squirrel}
                    title="Заказов нет"
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} из{" "}
          {table.getFilteredRowModel().rows.length} заказов выбранно.
        </div>
        <div className="space-x-2">
          <Button
            disabled={!table.getCanPreviousPage()}
            size="sm"
            variant="outline"
            onClick={table.previousPage}
          >
            Предыдущая
          </Button>
          <Button
            disabled={!table.getCanNextPage()}
            size="sm"
            variant="outline"
            onClick={table.nextPage}
          >
            Следующая
          </Button>
        </div>
      </div>
    </div>
  );
}
