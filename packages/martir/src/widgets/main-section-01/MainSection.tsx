import { Link } from "@tanstack/react-router";
import img from "./tshirt.png";
import { useProduct } from "@/shared/api/products";
import { useMemo } from "react";

const MASTER_PRODUCT = "ab2f2ae9-7111-4cad-a2dc-392f0d7e1293";

export function MainSection() {
  const { data } = useProduct(MASTER_PRODUCT);

  const productsCountByColor = useMemo(
    () =>
      data?.products?.products.reduce<Record<string, number>>(
        (acc, product) => {
          const colorParam = product.productToParams.find(
            (param) => param.params.name === "color"
          );

          const prevCount = acc[colorParam?.params.value ?? ""] || 0;
          acc[colorParam?.params.value ?? ""] =
            prevCount + (product.count || 0);

          return acc;
        },
        {}
      ) || {},
    [data?.products?.products]
  );

  return (
    <div className="px-4 xl:px-2 py-10 flex flex-col lg:flex-row gap-2 min-h-[70vh]">
      <Link
        to="/product/$productId"
        params={{ productId: MASTER_PRODUCT }}
        search={{ color: "black", size: "M" }}
        className="rounded-lg overflow-hidden relative"
      >
        <div className="flex-1  h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} />
        </div>
        {!productsCountByColor["black"] && (
          <div className="absolute bottom-1/2 w-full text-center bg-red-800 text-white text-2xl tracking-widest uppercase font-thin px-4 py-2">
            Распродано
          </div>
        )}
      </Link>
      <Link
        to="/product/$productId"
        params={{ productId: MASTER_PRODUCT }}
        search={{ color: "white", size: "M" }}
        className="rounded-lg overflow-hidden relative  "
      >
        <div className="flex-1 h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} alt="" />
        </div>
        {!productsCountByColor["white"] && (
          <div className="absolute bottom-1/2 w-full text-center bg-red-800 text-white text-2xl tracking-widest uppercase font-thin px-4 py-2">
            Распродано
          </div>
        )}
      </Link>
      <Link
        to="/product/$productId"
        params={{ productId: MASTER_PRODUCT }}
        search={{ color: "peach", size: "M" }}
        className="rounded-lg overflow-hidden relative"
      >
        <div className="flex-1 h-full flex items-center justify-center bg-[#e7e7e7]">
          <img src={img} alt="" />
        </div>
        {!productsCountByColor["peach"] && (
          <div className="absolute bottom-1/2 w-full text-center bg-red-800 text-white text-2xl tracking-widest uppercase font-thin px-4 py-2">
            Распродано
          </div>
        )}
      </Link>
    </div>
  );
}
