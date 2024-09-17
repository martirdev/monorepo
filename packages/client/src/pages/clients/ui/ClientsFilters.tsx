import { useForm } from "@tanstack/react-form";

import { Input } from "@/shared/ui/input";

import { ClientsFilterForm } from "./types";

export const ClientsFilters = () => {
  const form = useForm<ClientsFilterForm>({
    defaultValues: {
      name: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <div className="flex flex-wrap gap-2">
      <form.Field name="name">
        {(field) => (
          <Input
            className="w-[250px]"
            placeholder="Алексей"
            onChange={(e) => field.handleChange(e.target.value)}
          />
        )}
      </form.Field>
    </div>
  );
};
