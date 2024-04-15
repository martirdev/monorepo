"use client";

import { Button } from "@/components/shared/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/shared/dialog";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { trpc } from "@/lib/trpc";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { toast } from "sonner";

const CREATE_PROJECT_FORM_INIT_VALUES = {
  name: "",
};

type Props = {
  onSuccess: (data: { id: string; name: string }) => void;
};

const ProjectForm = function ProjectForm({ onSuccess }: Props) {
  const { mutate, isLoading } = trpc.setProject.useMutation({
    onSuccess: (data) => {
      onSuccess?.(data);
      toast("Проект создан", {
        description: "Можете создать свой первый товар и заказ",
      });
    },
  });

  const form = useForm({
    defaultValues: CREATE_PROJECT_FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      mutate({
        name: value.name,
      });
    },
    validatorAdapter: zodValidator,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Создать проект</DialogTitle>
        <DialogDescription>
          Добавьте новый проект для управления заказами и товарами.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4 py-2 pb-4">
        <form.Field name="name">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Название проекта</Label>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={field.handleChange}
                placeholder="Butterfry"
                autoFocus
              />
            </div>
          )}
        </form.Field>
      </div>
      <DialogFooter>
        <Button variant="outline" disabled={isLoading}>
          Отменить
        </Button>
        <Button onClick={form.handleSubmit} disabled={isLoading}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Продолжить
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export { ProjectForm };
