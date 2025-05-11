import { getCategoriesKey } from "@/shared/api/categories";
import { client, queryClient } from "@/shared/api/hono";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { MoreHorizontal } from "lucide-react";
import { toast } from "sonner";
import { CategoriesCreateButton } from "./CategoriesCreateButton";
import { useState } from "react";

type CategoriesTableActionCellProps = {
  id: string;
  category: {
    name: string;
    parentId?: string;
  };
};

export const CategoriesTableActionCell = ({
  id,
  category,
}: CategoriesTableActionCellProps) => {
  const [openedModal, setOpenedModal] = useState<string | null>(null);

  const { mutate } = useMutation({
    mutationFn: async (id: string) => {
      const response = await client.admin.categories.delete.$delete({
        json: [id],
      });
      queryClient.invalidateQueries({ queryKey: getCategoriesKey() });
      return response.json();
    },
    onSuccess: (data) => {
      toast.success(`Категория ${data.deletedCategories[0].name} удалена`);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const copyId = () => {
    navigator.clipboard.writeText(id);
    toast.message("ID скопирован");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="h-8 w-8 p-0" variant="ghost">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Действия</DropdownMenuLabel>
          <DropdownMenuItem onClick={copyId}>Скопировать ID</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpenedModal("edit")}>
            Изменить
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => mutate(id)}>
            Удалить
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CategoriesCreateButton
        defaultValue={{ ...category, id, isActive: true }}
        open={openedModal === "edit"}
        onClose={() => setOpenedModal(null)}
        onSuccess={() => setOpenedModal(null)}
      />
    </>
  );
};
