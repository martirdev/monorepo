import { ReloadIcon } from "@radix-ui/react-icons";
import { CommandList } from "cmdk";
import { ChevronsUpDown } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/shared/lib/utils";
import { Option } from "@/shared/types/utility";
import { Button } from "@/shared/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/shared/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/ui/popover";

export type ComboboxPropsType = {
  options: Option[];
  onChange?: (value: null | Option) => void;
  className?: string;
  emptyText?: string;
  isLoading?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  value?: Option["value"];
};

export function Combobox({
  className,
  emptyText,
  isLoading,
  onChange,
  options = [],
  placeholder = "",
  searchPlaceholder = "",
  value,
}: ComboboxPropsType) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | number>(
    value ? options.findIndex((item) => item.value === value) : null,
  );

  const handleSelect = useCallback(
    (currentValue: string) => {
      const newSelectedItem =
        currentValue === selectedItem?.toString() ? null : Number(currentValue);
      setSelectedItem(newSelectedItem);
      setOpen(false);
      onChange?.(newSelectedItem === null ? null : options[newSelectedItem]);
    },
    [selectedItem, onChange, options],
  );

  useEffect(() => {
    const index = options.findIndex((option) => option.value === value);
    setSelectedItem(index);
  }, [value, options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div>
          <Button
            className={cn(
              "w-full justify-between gap-2 font-normal",
              className,
            )}
            variant="outline"
          >
            <span>
              {(selectedItem !== null && options[selectedItem]?.label) ??
                value ??
                placeholder}
            </span>
            <div className="shrink-0">
              {isLoading && <ReloadIcon className="h-4 w-4 animate-spin" />}
              {!isLoading && <ChevronsUpDown className="h-4 w-4 opacity-50" />}
            </div>
          </Button>
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[250px] p-0">
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {!!options.length && (
              <CommandGroup>
                {options.map((option, index) => (
                  <CommandItem
                    className={cn("flex gap-1", {
                      "bg-zinc-200 text-accent-foreground aria-selected:bg-zinc-300 aria-selected:text-accent-foreground":
                        selectedItem === index,
                    })}
                    key={option.value}
                    value={index.toString()}
                    onSelect={handleSelect}
                  >
                    <span className="w-5 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
