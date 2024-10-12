import * as PopoverPrimitive from "@radix-ui/react-popover";
import { Primitive } from "@radix-ui/react-primitive";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { Check, ChevronsUpDown, X } from "lucide-react";
import {
  ComponentPropsWithoutRef,
  createContext,
  ElementRef,
  FC,
  forwardRef,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip";

export interface MultiSelectOptionItem {
  label?: ReactNode;
  value: string;
}

interface MultiSelectContextValue {
  disabled?: boolean;

  filter?: ((keyword: string, current: string) => boolean) | boolean;

  itemCache: Map<string, MultiSelectOptionItem>;

  maxCount?: number;

  onDeselect(value: string, item: MultiSelectOptionItem): void;

  onSearch?(keyword: string | undefined): void;

  onSelect(value: string, item: MultiSelectOptionItem): void;

  open: boolean;

  value: string[];
}

const MultiSelectContext = createContext<MultiSelectContextValue | undefined>(
  undefined,
);

const useMultiSelect = () => {
  const context = useContext(MultiSelectContext);

  if (!context) {
    throw new Error("useMultiSelect must be used within MultiSelectProvider");
  }

  return context;
};

type MultiSelectProps = {
  onDeselect?(value: string, item: MultiSelectOptionItem): void;
  onSearch?(keyword: string | undefined): void;
  onSelect?(value: string, item: MultiSelectOptionItem): void;
  onValueChange?(value: string[], items: MultiSelectOptionItem[]): void;
  defaultValue?: string[];
  disabled?: boolean;
  filter?: ((keyword: string, current: string) => boolean) | boolean;
  maxCount?: number;
  value?: string[];
} & ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

const MultiSelectBase: FC<MultiSelectProps> = ({
  defaultOpen,
  defaultValue,
  disabled,
  filter,
  maxCount,
  onDeselect: onDeselectProp,
  onOpenChange,
  onSearch,
  onSelect: onSelectProp,
  onValueChange: onValueChangeProp,
  open: openProp,
  value: valueProp,
  ...popoverProps
}) => {
  const itemCache = useRef(new Map<string, MultiSelectOptionItem>()).current;

  const handleValueChange = useCallback(
    (state: string[]) => {
      if (onValueChangeProp) {
        const items = state.map((value) => itemCache.get(value)!);

        onValueChangeProp(state, items);
      }
    },
    [onValueChangeProp],
  );

  const [value, setValue] = useControllableState({
    defaultProp: defaultValue,
    onChange: handleValueChange,
    prop: valueProp,
  });

  const [open, setOpen] = useControllableState({
    defaultProp: defaultOpen,
    onChange: onOpenChange,
    prop: openProp,
  });

  const handleSelect = useCallback(
    (value: string, item: MultiSelectOptionItem) => {
      setValue((prev) => {
        if (prev?.includes(value)) {
          return prev;
        }

        onSelectProp?.(value, item);

        return prev ? [...prev, value] : [value];
      });
    },
    [onSelectProp, setValue],
  );

  const handleDeselect = useCallback(
    (value: string, item: MultiSelectOptionItem) => {
      setValue((prev) => {
        if (!prev || !prev.includes(value)) {
          return prev;
        }

        onDeselectProp?.(value, item);

        return prev.filter((v) => v !== value);
      });
    },
    [onDeselectProp, setValue],
  );

  const contextValue = useMemo(() => {
    return {
      disabled,
      filter,
      itemCache,
      maxCount,
      onDeselect: handleDeselect,
      onSearch,
      onSelect: handleSelect,
      open: open || false,
      value: value || [],
    };
  }, [
    value,
    open,
    onSearch,
    filter,
    disabled,
    maxCount,
    handleSelect,
    handleDeselect,
  ]);

  return (
    <MultiSelectContext.Provider value={contextValue}>
      <PopoverPrimitive.Root
        {...popoverProps}
        open={open}
        onOpenChange={setOpen}
      />
    </MultiSelectContext.Provider>
  );
};

MultiSelectBase.displayName = "MultiSelect";

type MultiSelectTriggerElement = ElementRef<typeof Primitive.button>;

interface MultiSelectTriggerProps
  extends ComponentPropsWithoutRef<typeof Primitive.button> {}

const MultiSelectTrigger = forwardRef<
  MultiSelectTriggerElement,
  MultiSelectTriggerProps
>(({ children, className, ...props }, forwardedRef) => {
  const { disabled } = useMultiSelect();

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <PopoverPrimitive.Trigger ref={forwardedRef as any} asChild>
      <button
        aria-disabled={disabled}
        data-disabled={disabled}
        {...props}
        className={cn(
          "flex h-full min-h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background focus:outline-none focus:ring-1 focus:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 [&>span]:line-clamp-1",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-text",
          className,
        )}
        tabIndex={0}
        onClick={props.onClick}
        onTouchStart={props.onTouchStart}
      >
        {children}
        <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" aria-hidden />
      </button>
    </PopoverPrimitive.Trigger>
  );
});

MultiSelectTrigger.displayName = "MultiSelectTrigger";

interface MultiSelectValueProps
  extends ComponentPropsWithoutRef<typeof Primitive.div> {
  maxDisplay?: number;
  maxItemLength?: number;
  placeholder?: string;
}

const MultiSelectValue = forwardRef<
  ElementRef<typeof Primitive.div>,
  MultiSelectValueProps
>(
  (
    { className, maxDisplay, maxItemLength, placeholder, ...props },
    forwardRef,
  ) => {
    const { itemCache, onDeselect, value } = useMultiSelect();
    const [firstRendered, setFirstRendered] = useState(false);

    const renderRemain =
      maxDisplay && value.length > maxDisplay ? value.length - maxDisplay : 0;
    const renderItems = renderRemain ? value.slice(0, maxDisplay) : value;

    useLayoutEffect(() => {
      setFirstRendered(true);
    }, []);

    if (!value.length || !firstRendered) {
      return (
        <span className="pointer-events-none text-muted-foreground">
          {placeholder}
        </span>
      );
    }

    return (
      <TooltipProvider delayDuration={300}>
        <div
          className={cn(
            "flex flex-1 flex-wrap items-center gap-1.5 overflow-x-hidden",
            className,
          )}
          {...props}
          ref={forwardRef}
        >
          {renderItems.map((value) => {
            const item = itemCache.get(value);

            const content = item?.label || value;

            const child =
              maxItemLength &&
              typeof content === "string" &&
              content.length > maxItemLength
                ? `${content.slice(0, maxItemLength)}...`
                : content;

            const el = (
              <Badge
                className="group/multi-select-badge cursor-pointer rounded-full pr-1.5"
                key={value}
                variant="outline"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onDeselect(value, item!);
                }}
              >
                <span>{child}</span>
                <X className="ml-1 h-3 w-3 text-muted-foreground group-hover/multi-select-badge:text-foreground" />
              </Badge>
            );

            if (child !== content) {
              return (
                <Tooltip key={value}>
                  <TooltipTrigger className="inline-flex">{el}</TooltipTrigger>
                  <TooltipContent
                    align="start"
                    className="z-[51]"
                    side="bottom"
                  >
                    {content}
                  </TooltipContent>
                </Tooltip>
              );
            }

            return el;
          })}
          {renderRemain ? (
            <span className="py-.5 text-xs leading-4 text-muted-foreground">
              +{renderRemain}
            </span>
          ) : null}
        </div>
      </TooltipProvider>
    );
  },
);

MultiSelectValue.displayName = "MultiSelectValue";

const MultiSelectSearch = forwardRef<
  ElementRef<typeof CommandInput>,
  ComponentPropsWithoutRef<typeof CommandInput>
>((props, ref) => {
  const { onSearch } = useMultiSelect();

  const handleSearch = useCallback(
    (data: string) => {
      props.onValueChange?.(data);
      onSearch?.(data);
    },
    [onSearch, props.onValueChange],
  );

  return <CommandInput ref={ref} {...props} onValueChange={handleSearch} />;
});

MultiSelectSearch.displayName = "MultiSelectSearch";

const MultiSelectList = forwardRef<
  ElementRef<typeof CommandList>,
  ComponentPropsWithoutRef<typeof CommandList>
>(({ className, ...props }, ref) => {
  return (
    <CommandList
      className={cn("max-h-[unset] px-0 py-1", className)}
      ref={ref}
      {...props}
    />
  );
});

MultiSelectList.displayName = "MultiSelectList";

interface MultiSelectContentProps
  extends ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {}

const MultiSelectContent = forwardRef<
  ElementRef<typeof PopoverPrimitive.Content>,
  MultiSelectContentProps
>(({ children, className, ...props }, ref) => {
  const context = useMultiSelect();

  const fragmentRef = useRef<DocumentFragment>();

  if (!fragmentRef.current && typeof window !== "undefined") {
    fragmentRef.current = document.createDocumentFragment();
  }

  if (!context.open) {
    return fragmentRef.current
      ? createPortal(<Command>{children}</Command>, fragmentRef.current)
      : null;
  }

  return (
    <PopoverPrimitive.Portal forceMount>
      <PopoverPrimitive.Content
        className={cn(
          "z-50 w-full rounded-md border bg-popover p-0 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        )}
        style={
          {
            "--radix-select-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-select-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-select-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-select-trigger-height":
              "var(--radix-popper-anchor-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any
        }
        align="start"
        collisionPadding={10}
        ref={ref}
        sideOffset={4}
        {...props}
      >
        <Command
          className={cn(
            "max-h-96 w-full min-w-[var(--radix-select-trigger-width)] px-1",
            className,
          )}
          shouldFilter={!context.onSearch}
        >
          {children}
        </Command>
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
});

MultiSelectContent.displayName = "MultiSelectContent";

type MultiSelectItemProps = {
  onDeselect?: (value: string, item: MultiSelectOptionItem) => void;
  onSelect?: (value: string, item: MultiSelectOptionItem) => void;
} & ComponentPropsWithoutRef<typeof CommandItem> &
  Partial<MultiSelectOptionItem>;

const MultiSelectItem = forwardRef<
  ElementRef<typeof CommandItem>,
  MultiSelectItemProps
>(
  (
    {
      children,
      className,
      disabled: disabledProp,
      label,
      onDeselect: onDeselectProp,
      onSelect: onSelectProp,
      value,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      itemCache,
      maxCount,
      onDeselect,
      onSelect,
      value: contextValue,
    } = useMultiSelect();

    const item = useMemo(() => {
      return value
        ? {
            label:
              label || (typeof children === "string" ? children : undefined),
            value,
          }
        : undefined;
    }, [value, label, children]);

    const selected = Boolean(value && contextValue.includes(value));

    useEffect(() => {
      if (value) {
        itemCache.set(value, item!);
      }
    }, [selected, value, item]);

    const disabled = Boolean(
      disabledProp ||
        (!selected && maxCount && contextValue.length >= maxCount),
    );

    const handleClick = () => {
      if (selected) {
        onDeselectProp?.(value!, item!);
        onDeselect(value!, item!);
      } else {
        itemCache.set(value!, item!);
        onSelectProp?.(value!, item!);
        onSelect(value!, item!);
      }
    };

    return (
      <CommandItem
        {...props}
        className={cn(
          disabled && "cursor-not-allowed text-muted-foreground",
          className,
        )}
        disabled={disabled}
        ref={forwardedRef}
        value={value}
        onSelect={!disabled && value ? handleClick : undefined}
      >
        <span className="mr-2 overflow-hidden text-ellipsis whitespace-nowrap">
          {children || label || value}
        </span>
        {selected ? <Check className="ml-auto h-4 w-4 shrink-0" /> : null}
      </CommandItem>
    );
  },
);

MultiSelectItem.displayName = "MultiSelectItem";

const MultiSelectGroup = forwardRef<
  ElementRef<typeof CommandGroup>,
  ComponentPropsWithoutRef<typeof CommandGroup>
>((props, forwardRef) => {
  return <CommandGroup {...props} ref={forwardRef} />;
});

MultiSelectGroup.displayName = "MultiSelectGroup";

const MultiSelectSeparator = forwardRef<
  ElementRef<typeof CommandSeparator>,
  ComponentPropsWithoutRef<typeof CommandSeparator>
>((props, forwardRef) => {
  return <CommandSeparator {...props} ref={forwardRef} />;
});

MultiSelectSeparator.displayName = "MultiSelectSeparator";

const MultiSelectEmpty = forwardRef<
  ElementRef<typeof CommandEmpty>,
  ComponentPropsWithoutRef<typeof CommandEmpty>
>(({ children = "No Content", ...props }, forwardRef) => {
  return (
    <CommandEmpty {...props} ref={forwardRef}>
      {children}
    </CommandEmpty>
  );
});

MultiSelectEmpty.displayName = "MultiSelectEmpty";

export interface MultiSelectOptionSeparator {
  type: "separator";
}

export interface MultiSelectOptionGroup {
  children: MultiSelectOption[];
  heading?: ReactNode;
  value?: string;
}

export type MultiSelectOption =
  | MultiSelectOptionGroup
  | MultiSelectOptionSeparator
  | Pick<
      MultiSelectItemProps,
      "disabled" | "label" | "onDeselect" | "onSelect" | "value"
    >;

const renderMultiSelectOptions = (list: MultiSelectOption[]) => {
  return list.map((option, index) => {
    if ("type" in option) {
      if (option.type === "separator") {
        return <MultiSelectSeparator key={index} />;
      }

      return null;
    }

    if ("children" in option) {
      return (
        <MultiSelectGroup
          heading={option.heading}
          key={option.value || index}
          value={option.value}
        >
          {renderMultiSelectOptions(option.children)}
        </MultiSelectGroup>
      );
    }

    return (
      <MultiSelectItem key={option.value} {...option}>
        {option.label}
      </MultiSelectItem>
    );
  });
};

export {
  MultiSelectBase,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectItem,
  MultiSelectList,
  MultiSelectSearch,
  MultiSelectSeparator,
  MultiSelectTrigger,
  MultiSelectValue,
  renderMultiSelectOptions,
};

type MultiSelectPropsType = {
  options: MultiSelectOptionItem[];
  onBlur?: () => void;
  onCreateValue?: (value: string) => void;
  className?: string;
  id?: string;
  maxDisplay?: number;
  placeholder?: string;
  searchPlaceholder?: string;
} & MultiSelectProps;

export function MultiSelect({
  className,
  id,
  maxDisplay,
  onBlur,
  onCreateValue,
  options: rawOptions = [],
  placeholder,
  searchPlaceholder,
  ...props
}: MultiSelectPropsType) {
  const searchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [createdValues, setCreatedValues] = useState<string[]>([]);

  const handleCreateValue = useCallback(
    function (value: string) {
      searchRef.current?.focus();
      setQuery("");
      setCreatedValues((prev) => [...prev, value]);
      onCreateValue?.(value);
    },
    [onCreateValue],
  );

  const options = useMemo(() => {
    const createdOptions = createdValues.map((item) => ({
      label: item,
      value: item,
    }));
    return rawOptions.concat(createdOptions);
  }, [createdValues, rawOptions, query]);

  return (
    <MultiSelectBase {...props}>
      <MultiSelectTrigger className={className} id={id} onBlur={onBlur}>
        <MultiSelectValue maxDisplay={maxDisplay} placeholder={placeholder} />
      </MultiSelectTrigger>
      <MultiSelectContent>
        <MultiSelectSearch
          placeholder={searchPlaceholder}
          ref={searchRef}
          value={query}
          onValueChange={setQuery}
        />
        <MultiSelectList>
          {query && (
            <MultiSelectGroup forceMount>
              <MultiSelectItem
                value={query}
                onSelect={handleCreateValue}
                forceMount
              >
                Добавить: {query}
              </MultiSelectItem>
            </MultiSelectGroup>
          )}
          <MultiSelectEmpty>Ничего не найдено</MultiSelectEmpty>
          <MultiSelectGroup>
            {options.map(({ label, value }) => (
              <MultiSelectItem key={value} value={value}>
                {label}
              </MultiSelectItem>
            ))}
          </MultiSelectGroup>
        </MultiSelectList>
      </MultiSelectContent>
    </MultiSelectBase>
  );
}
