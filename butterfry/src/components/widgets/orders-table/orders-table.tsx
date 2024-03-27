"use client";
import { Badge } from "@/components/shared/badge";
import { Button } from "@/components/shared/button";
import { ORDER_STATUSES_DICT } from "@/components/shared/consts";
import { EmptyTableState } from "@/components/shared/empty-table-state";
import { Link } from "@/components/shared/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
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
import { currency, dateFormater, unit } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { last } from "lodash";
import { useSearchParams } from "next/navigation";
import { memo } from "react";

const ITEMS_PER_PAGE = 20;
const CREATE_BUTTON = (
  <Link href={{ query: { mode: "create" } }}>
    <Button size="sm">Сформировать заказ</Button>
  </Link>
);

const transformId = (id: string) => `${id.slice(0, 5)}...${id.slice(-5)}`;

type OrdersTablePropsType = {};

const OrdersTable = memo<OrdersTablePropsType>(function OrdersTable({}) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? 0);
  const { data, isLoading } = trpc.getOrders.useQuery({
    take: ITEMS_PER_PAGE,
    skip: ITEMS_PER_PAGE * page,
  });

  const totalPages = Math.floor((data?.total ?? 0) / ITEMS_PER_PAGE) + 1;

  return (
    <div className="flex flex-col gap-4">
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>№</TableHead>
              <TableHead>Клиент</TableHead>
              <TableHead>Время</TableHead>
              <TableHead className="text-right">Итог</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Комментарии</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="w-5 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="w-20 h-5 ml-auto" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-5" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-20 h-5" />
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading && !data?.orders.length && (
              <TableRow className="hover:bg-inherit">
                <TableCell colSpan={5}>
                  <div className="min-h-[200px] flex items-center justify-center">
                    <EmptyTableState
                      title="Заказов нет"
                      description="Для начала управления вашими заказами, добавьте их через форму создания"
                      action={CREATE_BUTTON}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              !!data?.orders.length &&
              data?.orders.map(({ orderVersions = [], ...order }) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    <Link href={{ query: { mode: "edit", id: order.id } }}>
                      {transformId(order.id)}
                    </Link>
                  </TableCell>
                  <TableCell>
                    {order.customer.secondName} {order.customer.firstName}
                  </TableCell>
                  <TableCell>
                    {dateFormater(order.createdAt).format("YYYY.MM.DD HH:mm")}
                  </TableCell>
                  <TableCell className="text-right">
                    {currency(last(orderVersions)?.total ?? 0)}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {
                        ORDER_STATUSES_DICT[last(orderVersions)?.status ?? ""]
                          .label
                      }
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">
                      {unit(order._count.comments)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={{ query: { page: page - 1 } }} />
          </PaginationItem>
          {isLoading &&
            Array.from({ length: 3 }).map((_, index) => (
              <PaginationItem key={index}>
                <Skeleton className="w-10 h-10" />
              </PaginationItem>
            ))}
          {!isLoading &&
            Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href={{ query: { page: index } }}
                  isActive={page === index}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
          <PaginationItem>
            <PaginationNext href={{ query: { page: page + 1 } }} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
});

export { OrdersTable };
