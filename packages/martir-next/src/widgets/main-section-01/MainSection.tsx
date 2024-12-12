import { client } from "@/shared/api/hono";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import Link from "next/link";
import img from "./tshirt.png";

const MASTER_PRODUCT = "ab2f2ae9-7111-4cad-a2dc-392f0d7e1293";

export async function MainSection() {
  const data = await client.products[":id"]
    .$get({
      param: { id: MASTER_PRODUCT },
    })
    .then((res) => res.json());

  const firstItem = data?.products?.products.find(
    (product, id) =>
      !!product.count ||
      (data?.products?.products.length &&
        id === data.products.products.length - 1)
  );

  return (
    <div className="px-4 xl:px-2 py-10 flex flex-col lg:flex-row gap-2 min-h-[70vh]">
      <Link
        href={{
          pathname: `/product/${MASTER_PRODUCT}`,
          query: firstItem ? { id: firstItem.id } : undefined,
        }}
        className="rounded-lg overflow-hidden relative w-full"
      >
        <div
          className={cn(
            "flex-1  h-full flex items-center justify-center bg-[#e7e7e7] ease-in-out duration-500"
          )}
        >
          <Image
            src={img}
            alt="Черная футболка Martir"
            width={800}
            height={800}
          />
        </div>
      </Link>
    </div>
  );
}
