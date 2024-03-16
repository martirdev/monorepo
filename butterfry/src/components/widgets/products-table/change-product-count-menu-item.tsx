"use client";
import { Button } from "@/components/shared/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/shared/dialog";
import { DropdownMenuItem } from "@/components/shared/dropdown-menu";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { trpc } from "@/lib/trpc";
import { preventDefault } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { memo, useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

type ChangeProductCountMenuItemPropsType = {
  id: string;
  name: string;
  multiplier: number;
  onSubmit?: () => void;
};

const ChangeProductCountMenuItem = memo<ChangeProductCountMenuItemPropsType>(
  function ChangeProductCountMenuItem({ id, name, multiplier, onSubmit }) {
    const [open, setOpen] = useState(false);

    const { mutate, isLoading } = trpc.setProductCountHistory.useMutation({
      onSuccess: () => {
        setOpen(false);
        toast("Остатки изменены", {
          description: "Количество товара на складе было обновленно",
        });
        onSubmit?.();
      },
    });

    const form = useForm({
      defaultValues: {
        value: undefined! as number,
      },
      onSubmit: async ({ value }) => {
        mutate({ value: value.value * multiplier, id });
      },
      validatorAdapter: zodValidator,
    });

    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="w-full">
          <DropdownMenuItem onSelect={preventDefault}>{name}</DropdownMenuItem>
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="w-[400px]" onOpenAutoFocus={preventDefault}>
            <DialogHeader>
              <DialogTitle>{name} товар на складе</DialogTitle>
            </DialogHeader>
            <div>
              <form.Field
                name="value"
                validators={{
                  onChange: z
                    .number({
                      invalid_type_error: "Количество должно быть числом",
                      required_error: "Количесто обязательно",
                    })
                    .positive("Количество должно быть больше 0"),
                }}
              >
                {(field) => (
                  <div>
                    <Label htmlFor={field.name} className="shrink-0">
                      Количество
                    </Label>
                    <div className="flex gap-2 items-center">
                      <Input
                        type="number"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.target.valueAsNumber)
                        }
                      />
                      <span>шт.</span>
                    </div>
                    {!!field.state.meta.errors.length && (
                      <div className="text-xs text-destructive">
                        {field.state.meta.errors.join("; ")}
                      </div>
                    )}
                  </div>
                )}
              </form.Field>
            </div>
            <DialogFooter>
              <Button disabled={isLoading} onClick={form.handleSubmit}>
                {isLoading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                {name}
              </Button>
              <DialogClose asChild>
                <Button variant="secondary" disabled={isLoading}>
                  Отменить
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  }
);

export { ChangeProductCountMenuItem };
