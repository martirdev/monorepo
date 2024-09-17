import { useForm } from "@tanstack/react-form";

import { Button, ButtonProps } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet";

type ClientForm = {
  contact: string;
  firstName: string;
  secondName: string;
  thirdName: string;
};

type ClientsCreateButtonPropsType = {
  buttonText: string;
  trigger?: ButtonProps;
};

export function ClientsCreateButton({
  buttonText,
  trigger,
}: ClientsCreateButtonPropsType) {
  const form = useForm<ClientForm>({
    defaultValues: {
      contact: "",
      firstName: "",
      secondName: "",
      thirdName: "",
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    },
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          <Button {...trigger}>{buttonText}</Button>
        </div>
      </SheetTrigger>
      <SheetContent className="max-w-[800px]">
        <SheetHeader>
          <SheetTitle>Добавление клиента</SheetTitle>
        </SheetHeader>
        <div className="mt-4 space-y-6">
          <div className="space-y-4">
            <form.Field name="secondName">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Фамилия</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="firstName">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Имя</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="thirdName">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Отчество</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
            <form.Field name="contact">
              {(field) => (
                <div className="space-y-2">
                  <Label htmlFor={field.name}>Контакт для связи</Label>
                  <Input
                    id={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                </div>
              )}
            </form.Field>
          </div>
          <Button className="w-full" type="button" onClick={form.handleSubmit}>
            Добавить клиента
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
