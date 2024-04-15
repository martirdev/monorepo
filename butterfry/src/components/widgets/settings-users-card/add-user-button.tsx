"use client";
import { PermissionTooltip } from "@/components/features/permission-tooltip";
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
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { useProject } from "@/lib/hooks/params";
import { trpc } from "@/lib/trpc";
import { preventDefault } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { memo, useState } from "react";
import { toast } from "sonner";

type AddUserButtonPropsType = {
  refetch: () => void;
};

const AddUserButton = memo<AddUserButtonPropsType>(function AddUserButton({
  refetch,
}) {
  const project = useProject();
  const [open, setOpen] = useState(false);

  const { mutate, isLoading } = trpc.addUserToProject.useMutation({
    onSuccess: () => {
      setOpen(false);
      toast("Пользователь добавлен", {
        description: "Сообщите ему об этом",
      });
      refetch();
    },
  });

  const {} = trpc.setUserRole.useMutation({
    onSuccess: () => {
      setOpen(false);
      toast("Пользователь добавлен", {
        description: "Сообщите ему об этом",
      });
      refetch();
    },
  });

  const form = useForm({
    defaultValues: {
      userId: "",
    },
    onSubmit: async ({ value }) => {
      mutate({
        project,
        user: value.userId,
      });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div>
        <DialogTrigger asChild>
          <PermissionTooltip permissions={["OWNER"]}>
            <Button>Добавить участника</Button>
          </PermissionTooltip>
        </DialogTrigger>
      </div>
      <DialogPortal>
        <DialogContent className="w-[400px]" onOpenAutoFocus={preventDefault}>
          <DialogHeader>
            <DialogTitle>Добавить участника в команду</DialogTitle>
          </DialogHeader>
          <div>
            <form.Field name="userId">
              {(field) => (
                <div>
                  <Label htmlFor={field.name} className="shrink-0">
                    ID Пользователя
                  </Label>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <DialogFooter>
            <Button disabled={isLoading} onClick={form.handleSubmit}>
              {isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Добавить
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
});

export { AddUserButton };
