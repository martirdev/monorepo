import { BlankSlate } from "@/features/blank-slate";
import { currency } from "@/shared/lib/intlnumbers";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
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
import { ary } from "lodash/fp";
import { MoreHorizontal, Snail } from "lucide-react";
import { useState } from "react";

import { Link } from "@tanstack/react-router";
import { ProductsCreateButton } from "./ProductsCreateButton";

export type Product = {
  id: string;
  name: string;
  price: number;
  count: number;
};

export const columns: ColumnDef<Product>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="Выбрать товар"
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
    id: "select",
    size: 50,
  },
  {
    accessorKey: "name",
    cell: ({ row }) => {
      return (
        <div className="truncate whitespace-nowrap font-bold">
          <Link
            to="/console/$organization/products"
            from="/console/$organization/products"
            search={{ id: row.original.id }}
          >
            {row.original.name}
          </Link>
        </div>
      );
    },
    header: "Название",
    size: undefined,
  },
  {
    accessorKey: "price",
    cell: ({ row }) => (
      <div className="text-right font-medium">
        {currency.format(row.original.price)}
      </div>
    ),
    header: () => <div className="text-right">Цена</div>,
    size: 100,
  },
  {
    accessorKey: "count",
    cell: ({ row }) => <div className="text-right">{row.original.count}</div>,
    header: () => <div className="text-right">Наличие</div>,
    size: 100,
  },
  {
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-8 w-8 p-0" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => navigator.clipboard.writeText(row.original.id)}
          >
            Скопировать ID
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    id: "actions",
    size: 50,
  },
];

export function ProductsTable() {
  const data = { products: [] };
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data: data?.products ?? [],
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
                    {!header.isPlaceholder &&
                      flexRender(
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
                    primaryAction={
                      <ProductsCreateButton buttonText="Добавить товар" />
                    }
                    className="mx-auto py-10"
                    description="Измените фильтры или создайте новый товар"
                    icon={Snail}
                    title="Товары не найдены"
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
          {table.getFilteredRowModel().rows.length} товаров выбранно.
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
