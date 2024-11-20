import { useForm } from "@tanstack/react-form";
import { useCallback } from "react";

import { useProduct } from "@/shared/api/products";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/shared/ui/sheet";
import { Textarea } from "@/shared/ui/textarea";
import { productsRoute } from "./page";

interface ProductForm {
  description: string;
  name: string;
  price: string;
}

type ProductEditSidebarPropsType = {};

export function ProductEditSidebar({}: ProductEditSidebarPropsType) {
  const search = productsRoute.useSearch();
  const navigate = productsRoute.useNavigate();
  const { data } = useProduct(search.id);

  const form = useForm<ProductForm>({
    defaultValues: {
      description: data?.product?.description || "",
      name: data?.product?.name || "",
      price: data?.product?.price || "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
      close();
    },
  });

  const close = useCallback(() => {
    const { id, ...otherSearch } = search;
    navigate({ to: "/console/$organization/products", search: otherSearch });
  }, [search, navigate]);

  return (
    <Sheet open={!!search.id} onOpenChange={close}>
      <SheetContent className="max-w-[800px]">
        <SheetHeader>
          <SheetTitle>Просмотр товара</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="masterProduct">Мастер товар</Label>
              <Input
                id="masterProduct"
                value={data?.product?.masterProductId}
                readOnly
              />
            </div>
            <form.Field name="name">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Название</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="description">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Описание</Label>
                  <Textarea
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="price">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Цена</Label>
                  <Input
                    id={field.name}
                    step="0.01"
                    type="number"
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <Button className="w-full" type="button" onClick={form.handleSubmit}>
            Изменить
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
