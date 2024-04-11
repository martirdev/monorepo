"use client";

import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
  ReloadIcon,
} from "@radix-ui/react-icons";

import { Dialog, DialogTrigger } from "@/components/shared//dialog";
import { Button } from "@/components/shared/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/shared/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shared/popover";
import { trpc } from "@/lib/trpc";
import { cn } from "@/lib/utils";
import { useCallback, useMemo, useState } from "react";
import { ProjectForm } from "./ProjectForm";
import { useParams, useRouter } from "next/navigation";
import { fromPairs } from "lodash/fp";

type PopoverTriggerProps = React.ComponentPropsWithoutRef<
  typeof PopoverTrigger
>;

interface ProjectSelectProps extends PopoverTriggerProps {}

export function ProjectSelect({ className }: ProjectSelectProps) {
  const { project: paramProject } = useParams<{ project?: string }>();
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data: projects, refetch, isLoading } = trpc.getProjects.useQuery();
  const [showNewTeamDialog, setShowNewTeamDialog] = useState(false);

  const projectsMap = useMemo(
    () => fromPairs((projects ?? []).map((project) => [project.id, project])),
    [projects]
  );

  const changeProject = useCallback(
    (value: NonNullable<typeof projects>[number]) => {
      setOpen(false);
      router.push(`/${value.id}`);
    },
    [router, setOpen]
  );

  const createProject = useCallback(
    (data: { id: string }) => {
      setShowNewTeamDialog(false);
      refetch();
      router.push(`/${data.id}`);
    },
    [router, refetch, setShowNewTeamDialog]
  );
  const openCreateProjectModal = useCallback(() => {
    setOpen(false);
    setShowNewTeamDialog(true);
  }, [setOpen, setShowNewTeamDialog]);

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Выберите проект"
            className={cn("w-[200px] justify-between", className)}
          >
            {isLoading && <ReloadIcon className="h-4 w-4 animate-spin" />}
            {!isLoading &&
              (projectsMap[paramProject ?? ""]?.name ?? "Выберите проект")}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Поиск проектов..." />
            <CommandEmpty>Нет проектов</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {(projects ?? []).map((project) => (
                  <CommandItem
                    key={project.id}
                    onSelect={() => {
                      changeProject(project);
                    }}
                    className="text-sm"
                  >
                    {project.name}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        project.id === paramProject
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem onSelect={openCreateProjectModal}>
                    <PlusCircledIcon className="mr-2 h-5 w-5" />
                    Создать проект
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <ProjectForm onSuccess={createProject} />
    </Dialog>
  );
}
