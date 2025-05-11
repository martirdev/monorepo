import { client } from "@/shared/api/hono";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";

const MASTER_PRODUCT = "17e89122-c970-4084-8ab8-22ef2304f411";

export async function MainSection() {
  const data = await client.products.products
    .$post({
      json: { id: MASTER_PRODUCT },
    })
    .then((res) => res.json());

  const firstItem = data.products?.productVariants.find(
    (product, id) =>
      !!product.stock.stockedQuantity ||
      (data?.products?.productVariants.length &&
        id === data.products.productVariants.length - 1)
  );

  return (
    <div className="px-4 xl:px-2 py-10 flex flex-col lg:flex-row gap-2 min-h-[70vh]">
      <Link
        href={{
          pathname: `/products/${MASTER_PRODUCT}`,
          query: firstItem ? { id: firstItem.id } : undefined,
        }}
        className="rounded-lg overflow-hidden relative w-full"
      >
        <div
          className={cn(
            "flex-1 flex items-center justify-center bg-[#e7e7e7] h-[800px]"
          )}
        >
          <Image
            src={firstItem?.images[0]?.image.url || ""}
            alt="Черная футболка Martir"
            width={800}
            height={800}
            className="w-auto h-full"
          />
        </div>
      </Link>
    </div>
  );
}
