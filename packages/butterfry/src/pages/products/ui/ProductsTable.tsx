import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown, Snail } from "lucide-react";
import { Fragment, useState } from "react";

import { BlankSlate } from "@/features/blank-slate";
import { useProducts } from "@/shared/api/products";
import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { CategoryName } from "@/features/category-name";
import { Product, Variant } from "../types";
import { ProductsCreateButton } from "./ProductsCreateButton";
import { ProductsTableActionCell } from "./ProductsTableActionCell";
import { ProductVariantSheet } from "./ProductVariantSheet";
import { currency } from "@/shared/lib/intlnumbers";

export const columns: ColumnDef<Product | Variant>[] = [
  // {
  //   cell: ({ row }) => {
  //     return (
  //       <Checkbox
  //         aria-label="Выбрать товар"
  //         checked={
  //           row.getIsSelected() ||
  //           row.getIsAllSubRowsSelected() ||
  //           (row.getIsSomeSelected() && "indeterminate")
  //         }
  //         onCheckedChange={ary(1, row.toggleSelected)}
  //         className="block"
  //       />
  //     );
  //   },
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
  //   id: "select",
  //   size: 50,
  // },
  {
    accessorKey: "name",
    cell: ({ row }) => {
      const variantProduct = row.original as Variant;
      return (
        <div>
          {row.getCanExpand() ? (
            <div
              className="flex cursor-pointer items-center gap-1"
              onClick={row.getToggleExpandedHandler()}
            >
              <div className="truncate whitespace-nowrap font-bold">
                {row.original.name}
              </div>
              <ChevronDown
                size="16"
                className={!row.getIsExpanded() ? "-rotate-90" : undefined}
              />
            </div>
          ) : (
            <ProductVariantSheet
              defaultValues={{
                ...variantProduct,
                category: variantProduct.categoryId,
                description: variantProduct.description || "",
                package: variantProduct.package || {},
                meta: variantProduct.meta || "",
                images:
                  variantProduct.images.map((item) => ({
                    imageId: item.image.id,
                    url: item.image.url,
                    type: "default" as const,
                  })) || [],
                params: variantProduct.params.map((item) => ({
                  name: item.paramValue.param.name,
                  values: [item.paramValue.value],
                })),
              }}
            >
              <div className="relative w-full">
                <span className="cursor-pointer truncate whitespace-nowrap font-bold">
                  {row.original.name}
                </span>
                {"params" in row.original && (
                  <div className="absolute cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-3 text-muted-foreground">
                    {row.original.params.map((item, index) => (
                      <Fragment key={index}>
                        <b>{item.paramValue.param.name}</b>:{" "}
                        {item.paramValue.value}
                        {index !== row.original.params.length - 1 && ";"}
                      </Fragment>
                    ))}
                  </div>
                )}
              </div>
            </ProductVariantSheet>
          )}
        </div>
      );
    },
    header: "Название",
    size: undefined,
  },
  {
    accessorKey: "category",
    cell: ({ row }) => {
      return (
        <div className="w-[150px] truncate whitespace-nowrap">
          {"categoryId" in row.original && (
            <CategoryName id={row.original.categoryId} />
          )}
        </div>
      );
    },
    header: () => <div>Категория</div>,
    size: 150,
  },
  {
    accessorKey: "price",
    cell: ({ row }) => {
      return (
        "lastPrice" in row.original &&
        row.original.lastPrice && (
          <div className="whitespace-nowrap text-right">
            {currency.format(row.original.lastPrice.price || 0)}
          </div>
        )
      );
    },
    header: () => <div className="whitespace-nowrap text-right">Цена</div>,
    size: 100,
  },
  {
    accessorKey: "reserved",
    cell: ({ row }) => {
      const stock = "stock" in row.original ? row.original.stock : undefined;
      return (
        <div className="whitespace-nowrap text-right">
          {stock?.reservedQuantity}
        </div>
      );
    },
    header: () => <div className="whitespace-nowrap text-right">В заказах</div>,
    size: 100,
  },
  {
    accessorKey: "stocked",
    cell: ({ row }) => {
      const stock = "stock" in row.original ? row.original.stock : undefined;
      return (
        <div className="whitespace-nowrap text-right">
          {stock?.stockedQuantity}
        </div>
      );
    },
    header: () => <div className="whitespace-nowrap text-right">На складе</div>,
    size: 100,
  },
  {
    cell: ({ row }) => {
      const stock = "stock" in row.original ? row.original.stock : undefined;
      return (
        <ProductsTableActionCell
          id={row.original.id}
          depth={row.depth}
          stockId={stock?.id}
          sku={stock?.sku}
        />
      );
    },
    id: "actions",
    size: 50,
  },
];

export function ProductsTable() {
  const { data } = useProducts();
  const [rowSelection, setRowSelection] = useState({});
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    columns,
    data: data?.products ?? [],
    onExpandedChange: setExpanded,
    getSubRows: (row) =>
      "productVariants" in row ? row.productVariants : undefined,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    paginateExpandedRows: false,
    state: {
      expanded,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="overflow-auto rounded-md border">
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
