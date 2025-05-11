import { FC, useMemo } from "react";

import { useClients } from "@/shared/api/clients";
import { Combobox, ComboboxPropsType } from "@/shared/ui/combobox";
import { makeShortName } from "@/shared/lib/nameFormats";

type ClientSelectProps = Omit<ComboboxPropsType, "options">;

export const ClientsSelect: FC<ClientSelectProps> = (props) => {
  const { data, isPending } = useClients();

  const options = useMemo(() => {
    return (
      data?.clients.map((client) => ({
        label: makeShortName(
          client.firstName,
          client.secondName,
          client.thirdName,
        ),
        description: (
          <span>
            <b>id</b>: {client.id}
          </span>
        ),
        value: client.id,
      })) || []
    );
  }, [data]);

  return <Combobox isLoading={isPending} options={options} {...props} />;
};
