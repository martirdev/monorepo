"use client";
import { ServiceRoles } from "@/components/shared/consts";
import { useUserByProject } from "@/lib/hooks/user";
import { dateFormater } from "@/lib/locale";
import { trpc } from "@/lib/trpc";
import { memo, useMemo } from "react";
import { AddUserButton } from "./add-user-button";
import { RolesSelect } from "./roles-select";

type SettingsTablePropsType = {};

const SettingsUsersCard = memo<SettingsTablePropsType>(
  function SettingsTable({}) {
    const currentUser = useUserByProject();
    const hasAdminRole = useMemo(
      () => currentUser.project?.role.includes(ServiceRoles.Owner),
      [currentUser.project?.role]
    );

    const { data, refetch } = trpc.getProjectUsers.useQuery({
      project: currentUser.project?.projectId ?? "",
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
            {data?.map(({ user, assignedAt, role }) => (
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
                {hasAdminRole && user.id !== currentUser.id && (
                  <div>
                    <RolesSelect user={user} role={role[0]} refetch={refetch} />
                  </div>
                )}
              </div>
            ))}
          </div>
          {hasAdminRole && <AddUserButton refetch={refetch} />}
        </div>
      </div>
    );
  }
);

export { SettingsUsersCard };
