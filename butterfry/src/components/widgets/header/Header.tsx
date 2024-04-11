import { ProjectSelect } from "@/components/features/selects/project-select";
import { HeaderActions } from "./HeaderActions";
import { HeaderMenu } from "./HeaderMenu";

export function Header() {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-50 px-6">
      <HeaderMenu className="lg:hidden" />
      <div>
        <ProjectSelect />
      </div>
      <HeaderActions className="ml-auto shrink-0" />
    </header>
  );
}
