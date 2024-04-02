import { SettingsTable } from "../widgets/settings-users-card/SettingsUsersCard";

export function SettingsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg md:text-2xl">Настройки</h1>
      </div>
      <div className="flex gap-4 flex-wrap">
        <SettingsTable />
      </div>
    </div>
  );
}
