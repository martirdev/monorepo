import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { client, queryClient } from "@/shared/api/hono";
import { DropdownMenuItem } from "@/shared/ui/dropdown-menu";

type ProductDeleteMenuItemProps = {
  productId: string;
};

export function ProductDeleteMenuItem({
  productId,
}: ProductDeleteMenuItemProps) {
  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      const response = await client.admin.products.delete.$delete({
        json: {
          id,
        },
      });
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: ({ queryKey }) => queryKey.includes("get-products"),
      });
      toast.success("Товар успешно удален");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return (
    <DropdownMenuItem onClick={() => mutate(productId)}>
      Удалить товар
    </DropdownMenuItem>
  );
}
