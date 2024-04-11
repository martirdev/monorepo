"use client";
import { Button } from "@/components/shared/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shared/dropdown-menu";
import { EmptyTableState } from "@/components/shared/empty-table-state";
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
import { currency, unit } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { DotsHorizontalIcon, ReloadIcon } from "@radix-ui/react-icons";
import { last } from "lodash";
import { sum } from "lodash/fp";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { ChangeProductCountMenuItem } from "./change-product-count-menu-item";
import { ShortPagination } from "@/components/shared/pagination";
import { ListTotal } from "@/components/features/list-total";

const ITEMS_PER_PAGE = 20;
const CREATE_BUTTON = (
  <Link href={{ query: { mode: "create" } }}>
    <Button size="sm">Создать товар</Button>
  </Link>
);

type ProductsTablePropsType = {};

const ProductsTable = memo<ProductsTablePropsType>(function ProductsTable({}) {
  const searchParams = useSearchParams();
  const project = useProject();

  const page = Number(searchParams.get("page") ?? 0);
  const { data, isLoading, refetch } = trpc.getProducts.useQuery({
    take: ITEMS_PER_PAGE,
    skip: ITEMS_PER_PAGE * page,
    project,
  });

  const totalPages = Math.floor((data?.total ?? 0) / ITEMS_PER_PAGE) + 1;
  const from = page * ITEMS_PER_PAGE + 1;
  const to = Math.min(page * ITEMS_PER_PAGE + ITEMS_PER_PAGE, data?.total ?? 0);

  return (
    <div className="flex flex-col gap-4">
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px] min-w-[80px]" />
              <TableHead>Название</TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Цена
              </TableHead>
              <TableHead className="text-right">Количество</TableHead>
              <TableHead className="w-8" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              Array.from({ length: 3 }).map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Skeleton className="aspect-square rounded-md object-cover w-10 h-10" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    <Skeleton className="w-20 h-5 ml-auto" />
                  </TableCell>
                  <TableCell className="text-right">
                    <Skeleton className="w-20 h-5 ml-auto" />
                  </TableCell>
                  <TableCell />
                </TableRow>
              ))}
            {!isLoading && !data?.products.length && (
              <TableRow className="hover:bg-inherit">
                <TableCell colSpan={5}>
                  <div className="min-h-[200px] flex items-center justify-center">
                    <EmptyTableState
                      title="Товары еще не созданы"
                      description="Для начала управления вашими продуктами, добавьте их через форму создания"
                      action={CREATE_BUTTON}
                    />
                  </div>
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              !!data?.products.length &&
              data?.products.map(({ versions = [], ...product }) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Link href={{ query: { mode: "edit", id: product.id } }}>
                      <img
                        src={
                          last(versions)?.images[0]?.url ?? "/placeholder.svg"
                        }
                        alt="Изображение товара"
                        className="aspect-square rounded-md object-cover block"
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null;
                          currentTarget.src = "/placeholder.svg";
                        }}
                        width={40}
                        height={40}
                      />
                    </Link>
                  </TableCell>
                  <TableCell className="font-medium whitespace-nowrap">
                    <TextLink
                      href={{ query: { mode: "edit", id: product.id } }}
                    >
                      {last(versions)?.name}
                    </TextLink>
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {currency(last(versions)?.price ?? "")}
                  </TableCell>
                  <TableCell className="text-right">
                    {unit(
                      sum(product.productCountHistory.map(({ value }) => value))
                    )}
                  </TableCell>
                  <TableCell className="w-8">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Открыть меню</span>
                          <DotsHorizontalIcon className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-[230px]">
                        <DropdownMenuLabel>Действия</DropdownMenuLabel>
                        <Link
                          href={{ query: { mode: "edit", id: product.id } }}
                        >
                          <DropdownMenuItem>Редактировать</DropdownMenuItem>
                        </Link>
                        <Link
                          href={{ query: { mode: "copy", id: product.id } }}
                        >
                          <DropdownMenuItem>Копировать</DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <ChangeProductCountMenuItem
                          id={product.id}
                          name="Пополнить"
                          multiplier={1}
                          onSubmit={refetch}
                        />
                        <ChangeProductCountMenuItem
                          id={product.id}
                          name="Списать"
                          multiplier={-1}
                          onSubmit={refetch}
                        />
                        {/* TODO: MARTIR-47 Добавить архив продуктов */}
                        {/* <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Убрать в архив
                        </DropdownMenuItem> */}
                      </DropdownMenuContent>
                    </DropdownMenu>
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
          entity="товаров"
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

export { ProductsTable };
