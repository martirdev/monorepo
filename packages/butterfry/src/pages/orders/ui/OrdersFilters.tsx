import { useForm } from "@tanstack/react-form";

import { Input } from "@/shared/ui/input";

import { OrdersFilterForm } from "../types";

export const OrdersFilters = () => {
  const form = useForm<OrdersFilterForm>({
    defaultValues: {
      id: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="flex flex-wrap gap-2">
      <form.Field name="id">
        {(field) => (
          <Input
            className="w-[250px]"
            placeholder="ID"
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>
    </div>
  );
};
