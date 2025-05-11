import { FC, useMemo } from "react";

import { useCategories } from "@/shared/api/categories";
import { Combobox, ComboboxPropsType } from "@/shared/ui/combobox";

export const ProductCategorySelect: FC<Omit<ComboboxPropsType, "options">> = (
  props,
) => {
  const { data, isPending } = useCategories();

  const options = useMemo(() => {
    return (
      data?.categories.map((category) => ({
        label: category.name,
        value: category.id,
      })) || []
    );
  }, [data]);

  return <Combobox options={options} isLoading={isPending} {...props} />;
};
