import { FC, useMemo } from "react";

import { authClient } from "@/shared/lib/auth";
import { Combobox, ComboboxPropsType } from "@/shared/ui/combobox";

export const OrganizationsSelect: FC<Omit<ComboboxPropsType, "options">> = (
  props,
) => {
  const { data, isPending } = authClient.useListOrganizations();

  const options = useMemo(() => {
    return (
      data?.map((org) => ({
        label: org.name,
        value: org.id,
      })) || []
    );
  }, [data]);

  return <Combobox isLoading={isPending} options={options} {...props} />;
};
