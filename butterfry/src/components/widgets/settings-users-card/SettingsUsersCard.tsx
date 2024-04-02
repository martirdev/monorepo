"use client";
import { useUserContext } from "@/components/features/context/user-context";
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
import { dateFormater } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { preventDefault } from "@/lib/utils";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { memo, useState } from "react";
import { toast } from "sonner";

const ROLES = {};

type SettingsTablePropsType = {};

const SettingsTable = memo<SettingsTablePropsType>(function SettingsTable({}) {
  const project = useProject();
  const [open, setOpen] = useState(false);

  const { data, refetch } = trpc.getProjectUsers.useQuery({
    project,
  });

  const { mutate, isLoading } = trpc.addUserToProject.useMutation({
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
    <div className="rounded-xl border bg-card text-card-foreground shadow p-6 max-w-[500px]">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col space-y-1.5">
          <h2 className="font-semibold leading-none tracking-tight">
            Участники
          </h2>
          <p className="text-sm text-muted-foreground">
            Приглашайте в вашу команду участников для совместной работы
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {data?.map(({ user, assignedAt }) => (
            <div
              className="flex items-center justify-between space-x-4"
              key={user.id}
            >
              <div className="flex items-center space-x-4">
                <span className="relative shrink-0 rounded-full">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    src={`${process.env.AVATAR_URL}/${user.avatar}`}
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                    height="32"
                  />
                </span>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium leading-none">
                    {user.surname} {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Добавлен: {dateFormater(assignedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <div>
            <DialogTrigger>
              <Button>Добавить участника</Button>
            </DialogTrigger>
          </div>
          <DialogPortal>
            <DialogContent
              className="w-[400px]"
              onOpenAutoFocus={preventDefault}
            >
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
      </div>
    </div>
  );
});

export { SettingsTable };
