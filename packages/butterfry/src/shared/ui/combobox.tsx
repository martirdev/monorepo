import { ReloadIcon } from "@radix-ui/react-icons";
import { CommandList } from "cmdk";
import { ChevronsUpDown, CircleXIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

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
import { FormControl } from "./form";

export type ComboboxPropsType = {
  id?: string;
  options: Option[];
  className?: string;
  emptyText?: string;
  isLoading?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  isClearable?: boolean;
  disabled?: boolean;
  value?: Option["value"];
  onSearch?: (str: string) => void;
  onChange?: (value: null | Option) => void;
};

export function Combobox({
  className,
  emptyText,
  isLoading,
  options = [],
  placeholder = "",
  searchPlaceholder = "",
  value,
  isClearable,
  disabled,
  onSearch,
  onChange,
}: ComboboxPropsType) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | string>(
    value || null,
  );

  const optionsMap = useMemo(
    () => Object.fromEntries(options.map((item) => [item.value, item])),
    [options],
  );

  const handleSelect = useCallback(
    (currentValue: string) => {
      const newSelectedItem =
        currentValue === selectedItem?.toString() ? null : currentValue;
      setSelectedItem(newSelectedItem);
      setOpen(false);
      onChange?.(newSelectedItem === null ? null : optionsMap[newSelectedItem]);
    },
    [selectedItem, onChange, optionsMap],
  );

  const clearSelect = useCallback(
    (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      e.preventDefault();
      setSelectedItem(null);
      onChange?.(null);
    },
    [setSelectedItem],
  );

  useEffect(() => {
    setSelectedItem(value || null);
  }, [value, options]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} asChild>
        <FormControl>
          <Button
            className={cn(
              "w-full justify-between gap-2 font-normal",
              className,
            )}
            variant="outline"
          >
            {selectedItem === null && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            {selectedItem !== null && (
              <div>
                {optionsMap[selectedItem]?.description ? (
                  <div className="text-left">
                    <p className="text-sm leading-4">
                      {optionsMap[selectedItem]?.label ?? value}
                    </p>
                    <p className="text-xs leading-3 text-muted-foreground">
                      {optionsMap[selectedItem].description}
                    </p>
                  </div>
                ) : (
                  <p>{optionsMap[selectedItem]?.label ?? value}</p>
                )}
              </div>
            )}
            <div className="flex shrink-0 gap-2">
              {isClearable && value && (
                <CircleXIcon
                  className="h-4 w-4 opacity-50 duration-200 ease-in-out hover:opacity-100"
                  onClick={clearSelect}
                />
              )}
              {isLoading && (
                <ReloadIcon className="h-4 w-4 animate-spin opacity-50" />
              )}
              {!isLoading && <ChevronsUpDown className="h-4 w-4 opacity-50" />}
            </div>
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[400px] p-0">
        <Command
          filter={(value, search) => {
            if (
              optionsMap[value] &&
              optionsMap[value].label
                .toLowerCase()
                .includes(search.toLowerCase())
            )
              return 1;
            return 0;
          }}
        >
          <CommandInput
            placeholder={searchPlaceholder}
            onValueChange={onSearch}
          />
          <CommandList>
            <CommandEmpty>{emptyText}</CommandEmpty>
            {!!options.length && (
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    className={cn("block", {
                      "bg-zinc-200 aria-selected:bg-zinc-300 aria-selected:text-accent-foreground":
                        selectedItem === option.value,
                    })}
                    key={option.value}
                    value={option.value}
                    onSelect={handleSelect}
                  >
                    <div className="flex gap-1 text-accent-foreground">
                      {option.icon && (
                        <span className="w-5 text-center">{option.icon}</span>
                      )}
                      <span className="text-md line-clamp-2 leading-5">
                        {option.label}
                      </span>
                    </div>
                    {option.description && (
                      <div className="text-xs text-muted-foreground">
                        {option.description}
                      </div>
                    )}
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
