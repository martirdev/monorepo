import { BlankSlate } from "@/features/blank-slate";
import { CategoryName } from "@/features/category-name";
import { useCategories } from "@/shared/api/categories";
import { Button } from "@/shared/ui/button";
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
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Snail } from "lucide-react";
import { useState } from "react";
import { CategoriesCreateButton } from "./CategoriesCreateButton";
import { CategoriesTableActionCell } from "./CategoriesTableActionCell";

export type Category = {
  id: string;
  name: string;
  parentCategoryId: string | null;
};

export const columns: ColumnDef<Category>[] = [
  // {
  //   accessorKey: "select",
  //   cell: ({ row }) => (
  //     <Checkbox
  //       aria-label="Выбрать категорию"
  //       checked={row.getIsSelected()}
  //       onCheckedChange={ary(1, row.toggleSelected)}
  //       className="block"
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
  //       className="block"
  //     />
  //   ),
  //   size: 50,
  // },
  {
    accessorKey: "categoryName",
    cell: ({ row }) => {
      return (
        <div className="truncate whitespace-nowrap font-bold">
          {row.original.name}
        </div>
      );
    },
    header: () => <div className="whitespace-nowrap">Название</div>,
    size: 400,
  },
  {
    accessorKey: "parentId",
    cell: ({ row }) => {
      return (
        <div className="truncate whitespace-nowrap font-bold">
          <CategoryName id={row.original.parentCategoryId} />
        </div>
      );
    },
    header: () => (
      <div className="whitespace-nowrap">Родительская категория</div>
    ),
    size: 400,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <CategoriesTableActionCell
        id={row.original.id}
        category={{
          name: row.original.name,
          parentId: row.original.parentCategoryId || undefined,
        }}
      />
    ),
    size: 50,
  },
];

export function CategoriesTable() {
  const { data } = useCategories();
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data: data?.categories ?? [],
    getCoreRowModel: getCoreRowModel(),
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
                  key={row.original.id}
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
                      <CategoriesCreateButton>
                        <Button>Добавить категорию</Button>
                      </CategoriesCreateButton>
                    }
                    className="mx-auto py-10"
                    description="Измените фильтры или создайте новую категорию"
                    icon={Snail}
                    title="Категории не найдены"
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
          {table.getFilteredRowModel().rows.length} категории выбранно.
        </div>
      </div>
    </div>
  );
}
