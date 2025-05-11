import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Fish } from "lucide-react";
import { useState } from "react";

import { BlankSlate } from "@/features/blank-slate";
import { useClients } from "@/shared/api/clients";
import { makeShortName } from "@/shared/lib/nameFormats";
import { Button } from "@/shared/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";

import { Client } from "../types";
import { ClientsCreateButton } from "./ClientsCreateButton";
import { ClientsTableActionCell } from "./ClientsTableActionCell";

export const columns: ColumnDef<Client>[] = [
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
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="capitalizez whitespace-nowrap font-bold">
        {makeShortName(
          row.original.firstName,
          row.original.secondName,
          row.original.thirdName,
        )}
      </div>
    ),
    header: "Клиент",
  },
  {
    accessorKey: "contact",
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        {row.original.contacts?.[0].contact}{" "}
        {row.original.contacts.length > 1 &&
          `и еще ${row.original.contacts.length - 1}`}
      </div>
    ),
    header: "Контакты",
  },
  {
    cell: ({ row }) => (
      <ClientsTableActionCell id={row.original.id} client={row.original} />
    ),
    id: "actions",
    size: 50,
  },
];

export function ClientsTable() {
  const { data } = useClients();
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    columns,
    data: data?.clients ?? [],
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
                    description="Добавьте их сейчас или перед созданием заказа"
                    icon={Fish}
                    title="Клиенты не найдены"
                    primaryAction={
                      <ClientsCreateButton>
                        <Button>Добавить клиента</Button>
                      </ClientsCreateButton>
                    }
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
          {table.getFilteredRowModel().rows.length} клиентов выбранно.
        </div>
      </div>
    </div>
  );
}
