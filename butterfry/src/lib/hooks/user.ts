import { useUserContext } from "@/components/features/context/user-context";
import { useProject } from "./params";
import { assign } from "lodash/fp";
import { useMemo } from "react";

export const useUserByProject = () => {
  const project = useProject();
  const user = useUserContext();

  return useMemo(() => {
    const currentProject = user?.projects?.find(
      (userProject) => userProject.projectId === project
    );

    return assign({ project: currentProject }, user);
  }, [project, user]);
};
