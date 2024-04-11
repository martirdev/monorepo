"use client";
import { ListTotal } from "@/components/features/list-total";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { EmptyTableState } from "@/components/shared/empty-table-state";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  ShortPagination,
} from "@/components/shared/pagination";
import { Skeleton } from "@/components/shared/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import { TextLink } from "@/components/shared/text-link";
import { useProject } from "@/lib/hooks/params";
import { convertCredentialsToShort, unit } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { memo } from "react";

const ITEMS_PER_PAGE = 20;
const CREATE_BUTTON = (
  <Link href={{ query: { mode: "create" } }}>
    <Button size="sm">Создать клиента</Button>
  </Link>
);

type ClientsTablePropsType = {};

const ClientsTable = memo<ClientsTablePropsType>(function ClientsTable({}) {
  const searchParams = useSearchParams();
  const project = useProject();

  const page = Number(searchParams.get("page") ?? 0);
  const { data, isLoading } = trpc.getCustomers.useQuery({
    take: ITEMS_PER_PAGE,
    skip: ITEMS_PER_PAGE * page,
    project,
  });

  const totalPages = Math.floor((data?.total ?? 0) / ITEMS_PER_PAGE) + 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ФИО</TableHead>
              <TableHead>Контакты</TableHead>
              <TableHead>Заказы</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading && !data?.customers.length && (
              <TableRow className="hover:bg-inherit">
                <TableCell colSpan={5}>
                  <div className="min-h-[200px] flex items-center justify-center">
                    <EmptyTableState
                      title="Клиентов еще нет"
                      description="Добавьте их сразу или можно будет создать при создании заказе"
                      action={CREATE_BUTTON}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              !!data?.customers.length &&
              data?.customers.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="font-medium">
                    <TextLink href={{ query: { mode: "edit", id: client.id } }}>
                      {convertCredentialsToShort(client)}
                    </TextLink>
                  </TableCell>
                  <TableCell>{client.contact}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {unit(client._count.orders)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex gap-2 items-center">
        <ListTotal
          total={data?.total ?? 0}
          perPage={ITEMS_PER_PAGE}
          page={page}
          isLoading={isLoading}
          entity="клиентов"
        />
        <ShortPagination
          prevHref={{ query: { page: page - 1 } }}
          nextHref={{ query: { page: page + 1 } }}
          className="ml-auto"
          isLoading={isLoading}
          pages={totalPages}
          page={page}
        />
      </div>
    </div>
  );
});

export { ClientsTable };
