import { useForm } from "@tanstack/react-form";

import { Input } from "@/shared/ui/input";
import { MultiSelect } from "@/shared/ui/multi-select";

import { ProductsFiltersForm } from "./types";

const STOCK_OPTIONS = [
  {
    label: "Имеется",
    value: "IN_STOCK",
  },
  {
    label: "Закончился",
    value: "OUT_OF_STOCK",
  },
  {
    label: "В архиве",
    value: "ARCHIVE",
  },
];

export const ProductsFilters = () => {
  const form = useForm<ProductsFiltersForm>({
    defaultValues: {
      name: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="flex flex-wrap gap-2">
      <form.Field name="name">
        {(field) => (
          <Input
            className="w-[250px]"
            id={field.name}
            name={field.name}
            placeholder="Красная футболка"
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>
      {/* TODO: #157 add category to products */}
      {/* <Combobox
        className="w-[150px]"
        emptyText="Категории не найдены"
        options={[]}
        placeholder="Категории"
        searchPlaceholder="Свиттеры"
      /> */}
      <MultiSelect
        className="w-[180px]"
        maxDisplay={1}
        options={STOCK_OPTIONS}
        placeholder="Наличие"
        searchPlaceholder="Любое"
      />
    </div>
  );
};
