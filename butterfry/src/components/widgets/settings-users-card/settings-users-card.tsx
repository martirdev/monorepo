"use client";
import { PermissionTooltip } from "@/components/features/permission-tooltip";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { useUserByProject } from "@/lib/hooks/user";
import { dateFormater } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { CopyIcon, SymbolIcon } from "@radix-ui/react-icons";
import { head } from "lodash";
import { memo, useCallback } from "react";
import { toast } from "sonner";
import { AddUserButton } from "./add-user-button";
import { RolesSelect } from "./roles-select";

const makeInviteLink = (inviteId: string | undefined) => {
  if (typeof window === "undefined" || !inviteId) {
    return "";
  }

  return `${window.location.origin}?invite=${inviteId}`;
};

type SettingsTablePropsType = {};

const SettingsUsersCard = memo<SettingsTablePropsType>(
  function SettingsTable({}) {
    const currentUser = useUserByProject();

    const { data, refetch } = trpc.getProjectUsers.useQuery({
      project: currentUser.project?.projectId ?? "",
    });

    const { mutate, isLoading } = trpc.createInvite.useMutation({
      onSuccess: () => {
        refetch();
        toast("Пригласительная ссылка изменена", {
          description: "Предыдущие ссылки деактивированы",
        });
      },
    });

    const inviteId = makeInviteLink(head(data?.project?.invitations)?.id);

    const copyInvite = useCallback(async () => {
      if (!inviteId) {
        return;
      }
      await navigator.clipboard.writeText(inviteId);
      toast("Ссылка скопирована");
    }, [inviteId]);

    const createInvite = () => {
      mutate({
        project: currentUser.project?.projectId ?? "",
      });
    };

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

          <div className="space-y-2">
            <Label htmlFor="invite">Пригласительная ссылка</Label>
            <div className="flex gap-2">
              <Input id="invite" value={inviteId} readOnly />
              <Button
                variant="outline"
                className="px-3"
                onClick={copyInvite}
                disabled={isLoading}
              >
                <CopyIcon className="w-4 h-4" />
              </Button>
              <Button
                variant="secondary"
                className="px-3"
                onClick={createInvite}
                disabled={isLoading}
              >
                <SymbolIcon
                  className={cn("w-4 h-4", {
                    "animate-spin": isLoading,
                  })}
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {data?.users.map(({ user, assignedAt, role }) => (
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
                <div>
                  <PermissionTooltip
                    permissions={["OWNER", "EDITOR"]}
                    disabled={user.id === currentUser.id}
                  >
                    <RolesSelect user={user} role={role[0]} refetch={refetch} />
                  </PermissionTooltip>
                </div>
              </div>
            ))}
          </div>
          <AddUserButton refetch={refetch} />
        </div>
      </div>
    );
  }
);

export { SettingsUsersCard };
