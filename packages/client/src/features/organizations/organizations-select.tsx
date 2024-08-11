import { FC, useMemo } from "react";

import { useUser } from "@/features/lib/useUser";
import { Combobox, ComboboxPropsType } from "@/shared/ui/combobox";

export const OrganizationsSelect: FC<Omit<ComboboxPropsType, "options">> = (
  props,
) => {
  const { data, isLoading } = useUser();

  const options = useMemo(() => {
    return (
      data?.organizations?.map((org) => ({
        label: org.name,
        value: org.id,
      })) || []
    );
  }, [data?.organizations]);

  return <Combobox isLoading={isLoading} options={options} {...props} />;
};
