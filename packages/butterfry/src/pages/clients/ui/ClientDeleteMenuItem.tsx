import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { GET_CLIENTS_KEY } from "@/shared/api/clients";
import { client, queryClient } from "@/shared/api/hono";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

type ClientDeleteMenuItemProps = {
  clientId: string;
};

export function ClientDeleteMenuItem({ clientId }: ClientDeleteMenuItemProps) {
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      const response = await client.admin.clients.delete.$delete({
        json: [id],
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes(GET_CLIENTS_KEY),
      });
      toast.success("Клиент успешно удален");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <DropdownMenuItem onClick={() => mutate(clientId)}>
      Удалить
    </DropdownMenuItem>
  );
}
