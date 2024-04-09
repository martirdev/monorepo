import { currency, unit } from "@/lib/locale";
import { PropsWithChildren } from "react";

type ProductItemPropsType = PropsWithChildren<{
  image: string;
  name: string;
  properties: { key: string; value: string }[];
  price: number;
  quantity: number;
}>;

export const ProductItem = ({
  image,
  name,
  properties = [],
  price,
  quantity,
}: ProductItemPropsType) => {
  return (
    <div className="flex gap-6">
      <div>
        <img
          className="w-16 md:w-20 lg:w-28 rounded-2xl bg-slate-50"
          alt={name}
          src={image}
        />
      </div>
      <div className="flex flex-col gap-3 flex-1">
        <h4 className="font-semibold text-lg">{name}</h4>
        <div className="flex flex-col gap-1 text-sm">
          {properties.map((property) => (
            <p>
              <span className="mr-1 text-sm text-gray-400">
                {property.key}:
              </span>
              <span>{property.value}</span>
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-lg">{currency(price)}</p>
        <p className="text-sm text-gray-400 text-right">
          Кол-во: {unit(quantity)}
        </p>
      </div>
    </div>
  );
};
