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
              <TableHead className="hidden md:table-cell">Цена</TableHead>
              <TableHead className="hidden md:table-cell">Категория</TableHead>
              <TableHead>Количество</TableHead>
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
              <TableCell className="hidden md:table-cell">$49.99</TableCell>
              <TableCell className="hidden md:table-cell">Home Decor</TableCell>
              <TableCell>5</TableCell>
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
              <TableCell className="hidden md:table-cell">$29.99</TableCell>
              <TableCell className="hidden md:table-cell">
                Kitchen Appliances
              </TableCell>
              <TableCell>4</TableCell>
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
              <TableCell className="hidden md:table-cell">$19.99</TableCell>
              <TableCell className="hidden md:table-cell">Gardening</TableCell>
              <TableCell>8</TableCell>
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
              <TableCell className="hidden md:table-cell">$59.99</TableCell>
              <TableCell className="hidden md:table-cell">Appliances</TableCell>
              <TableCell>9</TableCell>
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
              <TableCell className="hidden md:table-cell">$69.99</TableCell>
              <TableCell className="hidden md:table-cell">Fitness</TableCell>
              <TableCell>12</TableCell>
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
