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
import { REFETCH_CUSTOMERS_EVENT } from "@/components/shared/consts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/popover";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Check, ChevronsUpDown } from "lucide-react";
import { memo, useEffect, useMemo, useState } from "react";

const PAGE_LIMIT = 20;

type CustomersSelectPropsType = {
  value: string;
  onSelect: (value: { label: string; value: string }) => void;
};

const CustomersSelect = memo<CustomersSelectPropsType>(
  function CustomersSelect({ value, onSelect }) {
    const [open, setOpen] = useState(false);

    const { data, isLoading, refetch } = trpc.getCustomers.useQuery({
      take: PAGE_LIMIT,
      skip: 0 * PAGE_LIMIT,
    });

    const options = useMemo(() => {
      return (data?.customers ?? []).map((customer) => ({
        label: `${customer.secondName} ${customer.firstName}`,
        value: customer.id,
      }));
    }, [data?.customers]);

    useEffect(() => {
      const getData = () => refetch();

      addEventListener(REFETCH_CUSTOMERS_EVENT.type, getData);

      return () => {
        removeEventListener(REFETCH_CUSTOMERS_EVENT.type, getData);
      };
    }, [refetch]);

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            variant="outline"
            aria-expanded={open}
            className="w-full px-3"
          >
            {value && options.find((option) => option.value === value)?.label}
            <div className="flex items-center ml-auto">
              {isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="end">
          <Command>
            <CommandInput placeholder="Поиск покупателя..." />
            <CommandEmpty>Покупатель не найден</CommandEmpty>
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
  }
);

export { CustomersSelect };
