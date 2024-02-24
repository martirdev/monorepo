import { Button } from "@/components/shared/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shared/table";
import Image from "next/image";
import Link from "next/link";
import { ProductSheet } from "../widgets/product-sheet";
import { Suspense } from "react";
import { currency, unit } from "@/lib/locale";

export function ProductsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg md:text-2xl">Товары</h1>
        <div className="ml-auto">
          <Link href={{ query: { mode: "create" } }}>
            <Button size="sm">Добавить товар</Button>
          </Link>
        </div>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]" />
              <TableHead>Название</TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Цена
              </TableHead>
              <TableHead className="hidden md:table-cell">Категория</TableHead>
              <TableHead className="text-right">Количество</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="40"
                  src="/placeholder.svg"
                  width="40"
                />
              </TableCell>
              <TableCell className="font-medium">Glimmer Lamps</TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {currency(49.99)}
              </TableCell>
              <TableCell className="hidden md:table-cell">Home Decor</TableCell>
              <TableCell className="text-right">{unit(5)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="40"
                  src="/placeholder.svg"
                  width="40"
                />
              </TableCell>
              <TableCell className="font-medium">Aqua Filters</TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {currency(29.99)}
              </TableCell>
              <TableCell className="hidden md:table-cell">
                Kitchen Appliances
              </TableCell>
              <TableCell className="text-right">{unit(4)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="40"
                  src="/placeholder.svg"
                  width="40"
                />
              </TableCell>
              <TableCell className="font-medium">Eco Planters</TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {currency(19.99)}
              </TableCell>
              <TableCell className="hidden md:table-cell">Gardening</TableCell>
              <TableCell className="text-right">{unit(8)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="40"
                  src="/placeholder.svg"
                  width="40"
                />
              </TableCell>
              <TableCell className="font-medium">Zest Juicers</TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {currency(59.99)}
              </TableCell>
              <TableCell className="hidden md:table-cell">Appliances</TableCell>
              <TableCell className="text-right">{unit(9)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Image
                  alt="Product image"
                  className="aspect-square rounded-md object-cover"
                  height="40"
                  src="/placeholder.svg"
                  width="40"
                />
              </TableCell>
              <TableCell className="font-medium">Flexi Wearables</TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {currency(69.99)}
              </TableCell>
              <TableCell className="hidden md:table-cell">Fitness</TableCell>
              <TableCell className="text-right">{unit(12)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Suspense>
        <ProductSheet />
      </Suspense>
    </div>
  );
}
