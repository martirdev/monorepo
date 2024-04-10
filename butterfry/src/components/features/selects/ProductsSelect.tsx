"use client";
import { Button } from "@/components/shared/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/shared/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/popover";
import { useProject } from "@/lib/hooks/params";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { last } from "lodash/fp";
import { Check, ChevronsUpDown } from "lucide-react";
import { memo, useMemo, useState } from "react";

const PAGE_LIMIT = 20;

type ProductsSelectPropsType = {
  value: string;
  onSelect: (value: { label: string; value: string }) => void;
};

const ProductsSelect = memo<ProductsSelectPropsType>(function ProductsSelect({
  value,
  onSelect,
}) {
  const [open, setOpen] = useState(false);
  const project = useProject();

  const { data, isLoading } = trpc.getProducts.useQuery({
    take: PAGE_LIMIT,
    skip: 0 * PAGE_LIMIT,
    project,
  });

  const options = useMemo(() => {
    return (data?.products ?? []).map((product) => ({
      label: last(product.versions)?.name || `id: ${product.id}`,
      value: last(product.versions)?.id ?? "",
    }));
  }, [data?.products]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          variant="outline"
          aria-expanded={open}
          className="w-full px-3"
        >
          <span className="truncate">
            {value && options.find((option) => option.value === value)?.label}
          </span>
          <div className="flex items-center ml-auto">
            {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0" align="end">
        <Command>
          <CommandInput placeholder="Поиск товаров..." />
          <CommandEmpty>Товар не найден</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.label}
                  onSelect={() => {
                    onSelect(option);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.label ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
});

export { ProductsSelect };
