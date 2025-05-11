import { FC, Fragment, useMemo, useState } from "react";

import { Combobox, ComboboxPropsType } from "@/shared/ui/combobox";
import { useProductsVariants } from "@/shared/api/products";
import { Option } from "@/shared/types/utility";

type ProductVariantsSelectProps = {
  hideVariantsWithStock?: boolean;
} & Omit<ComboboxPropsType, "options">;

export const ProductVariantsSelect: FC<ProductVariantsSelectProps> = ({
  hideVariantsWithStock,
  ...props
}) => {
  const [search, setSearch] = useState("");
  const { data, isPending } = useProductsVariants(search);

  const options = useMemo(() => {
    return (data?.variants ?? []).reduce<Option[]>((acc, variant) => {
      const canAdd = !hideVariantsWithStock || !variant.stock;

      if (canAdd) {
        acc.push({
          label: variant.name,
          value: variant.id,
          description: (
            <>
              {variant.params.map((item, index) => (
                <Fragment key={index}>
                  <b>{item.paramValue.param.name}</b>: {item.paramValue.value}
                  {index !== variant.params.length - 1 && ";"}
                </Fragment>
              ))}
            </>
          ),
        });
      }

      return acc;
    }, []);
  }, [data, hideVariantsWithStock]);

  return (
    <Combobox
      options={options}
      isLoading={isPending}
      onSearch={setSearch}
      emptyText="Товары не найдены"
      {...props}
    />
  );
};
