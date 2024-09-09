import { Combobox } from "@/shared/ui/combobox";
import { Input } from "@/shared/ui/input";

export const ProductsFilters = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Input className="w-[250px]" placeholder="Красная футболка" />
      {/* TODO: #158 create multiselect component */}
      {/* TODO: #157 add category to products */}
      {/* <Combobox
        className="w-[150px]"
        emptyText="Категории не найдены"
        options={[]}
        placeholder="Категории"
        searchPlaceholder="Свиттеры"
      /> */}
      <Combobox
        className="w-[150px]"
        emptyText="Не верно указано"
        options={[]}
        placeholder="Наличие"
        searchPlaceholder="Любое"
      />
    </div>
  );
};
