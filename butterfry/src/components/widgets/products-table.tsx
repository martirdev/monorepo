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
import { currency, unit } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { memo } from "react";

const ITEMS_PER_PAGE = 20;
const CREATE_BUTTON = (
  <Link href={{ query: { mode: "create" } }}>
    <Button size="sm">Создать товар</Button>
  </Link>
);

type ProductsTablePropsType = {};

const ProductsTable = memo<ProductsTablePropsType>(function ProductsTable({}) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? 0);
  const { data, isLoading } = trpc.getProducts.useQuery({
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
              <TableHead className="w-[80px]" />
              <TableHead>Название</TableHead>
              <TableHead className="hidden md:table-cell">Категория</TableHead>
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
                  <TableCell className="font-medium">
                    <Skeleton className="w-32 h-5" />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
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
              data?.products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Image
                      alt="Изображение товара"
                      className="aspect-square rounded-md object-cover"
                      height="40"
                      src="/placeholder.svg"
                      width="40"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    {product.versions[0].name}
                  </TableCell>
                  <TableCell className="hidden md:table-cell"></TableCell>
                  <TableCell className="hidden md:table-cell text-right">
                    {currency(product.versions[0].price)}
                  </TableCell>
                  <TableCell className="text-right">
                    {unit(product.count)}
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
                        <DropdownMenuItem>Изменить остаток</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Убрать в архив
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
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

export { ProductsTable };
