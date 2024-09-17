import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { format } from "date-fns";
import { ary } from "lodash/fp";
import { Squirrel } from "lucide-react";
import { useState } from "react";

import { BlankSlate } from "@/features/blank-slate";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { ORDER_STATUSES_DICT } from "./consts";
import { Order } from "./types";

export const columns: ColumnDef<Order>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={ary(1, row.toggleSelected)}
      />
    ),
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        aria-label="Выбрать все"
        onCheckedChange={ary(1, table.toggleAllPageRowsSelected)}
      />
    ),
    id: "id",
    size: 50,
  },
  {
    accessorKey: "id",
    cell: ({ row }) => (
      <div className="font-bold capitalize">{row.getValue("id")}</div>
    ),
    header: "№",
  },
  {
    accessorKey: "client",
    cell: ({ row }) => (
      <div className="whitespace-nowrap">{row.getValue("client")}</div>
    ),
    header: "Клиент",
  },
  {
    accessorKey: "total",
    cell: ({ row }) => (
      <div className="text-right font-medium">{row.getValue("total")}</div>
    ),
    header: () => <div className="text-right">Итог</div>,
  },
  {
    accessorKey: "updatedAt",
    cell: ({ row }) => (
      <div>{format(row.getValue("updatedAt"), "HH:mm dd.MM.yyyy")}</div>
    ),
    header: "Обновлен",
  },
  {
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <div>{format(row.getValue("createdAt"), "HH:mm dd.MM.yyyy")}</div>
    ),
    header: "Создан",
  },
  {
    accessorKey: "status",
    cell: ({ row }) => (
      <Badge>
        {
          ORDER_STATUSES_DICT[
            row.getValue<"CREATED" | undefined>("status") || ""
          ]?.label
        }
      </Badge>
    ),
    header: () => <div>Статус</div>,
    size: 100,
  },
];

const DATA = [
  {
    client: "Пушкарев Максим Иванович",
    createdAt: new Date(),
    id: "1",
    status: "CREATED",
    total: 10000,
    updatedAt: new Date(),
  },
];

export function OrdersTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data: DATA,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
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
