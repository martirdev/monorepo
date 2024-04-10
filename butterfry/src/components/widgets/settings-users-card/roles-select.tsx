"use client";
import { ConfirmDialog, RefType } from "@/components/features/confirm";
import { Select } from "@/components/shared/select";
import { useProject } from "@/lib/hooks/params";
import { convertCredentialsToShort } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { memo, useRef, useState } from "react";
import { toast } from "sonner";

const ROLES = [
  { value: "OWNER" as const, label: "Владелец" },
  { value: "EDITOR" as const, label: "Редактор" },
  { value: "VIEWER" as const, label: "Наблюдатель" },
];

type RolesSelectPropsType = {
  user: {
    name: string;
    surname: string;
    id: string;
  };
  role: (typeof ROLES)[number]["value"] | undefined;
  refetch: () => void;
};

const RolesSelect = memo<RolesSelectPropsType>(function RolesSelect({
  user,
  role,
  refetch,
}) {
  const project = useProject();
  const ref = useRef<RefType>(null);
  const [selectedRole, setSelectedRole] = useState(role);

  const { mutate, isLoading } = trpc.setUserRole.useMutation({
    onSuccess: () => {
      toast("Роль изменена", {
        description: "Сообщите пользователю об этом",
      });
      ref.current?.close();
      refetch();
    },
  });

  const selectRole = (value: (typeof ROLES)[number]["value"]) => {
    setSelectedRole(value);
    ref.current?.open();
  };

  const changeRole = () => {
    if (!selectedRole) {
      return;
    }
    mutate({
      projectId: project,
      userId: user.id,
      role: selectedRole,
    });
  };

  return (
    <>
      <Select options={ROLES} value={role} onValueChange={selectRole} />
      <ConfirmDialog
        title="Изменить роль"
        description={`Вы уверены, что хотите изменить роль пользователю: ${convertCredentialsToShort(
          {
            firstName: user.name,
            secondName: user.surname,
          }
        )}`}
        ref={ref}
        submit={changeRole}
        isSubmiting={isLoading}
      />
    </>
  );
});

export { RolesSelect };
