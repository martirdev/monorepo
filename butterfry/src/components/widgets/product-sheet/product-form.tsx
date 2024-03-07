"use client";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { Select } from "@/components/shared/select";
import {
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/shared/sheet";
import { Textarea } from "@/components/shared/textarea";
import { trpc } from "@/lib/trpc";
import { PlusIcon, ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useSearchParams } from "next/navigation";
import { memo, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import { z } from "zod";
import { FORM_INIT_VALUES, TITLES_BY_MODE } from "./consts";

type ProductFormPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof FORM_INIT_VALUES;
  version?: string;
  versions?: { id: string }[];
};

const ProductForm = memo<ProductFormPropsType>(function ProductForm({
  id,
  mode,
  initValues,
  version,
  versions,
}) {
  const searchparams = useSearchParams();

  const mutation = trpc.setProduct.useMutation({
    onSuccess: (data) => {
      const params = new URLSearchParams(searchparams);
      params.set("id", data.id || id || "");
      params.set("mode", "edit");
      params.delete("version");
      window.history.pushState(null, "", `?${params.toString()}`);
      toast("Товар добавлен", {
        description: "Теперь вы можете управлять его остатком",
      });
    },
  });

  const changeVersion = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchparams);
      params.set("version", id);
      window.history.pushState(null, "", `?${params.toString()}`);
    },
    [searchparams]
  );

  const form = useForm({
    defaultValues: initValues || FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      if (mode === "edit" && !id) {
        throw new Error("ID обязателен для режима редактирования");
      }

      mutation.mutate({
        id: mode === "edit" ? id! : v4(),
        name: value.name,
        description: value.description,
        price: value.price,
        params: value.params.filter((param) => param.value && param.name),
        images: value.images
          .filter((image) => !!image.url)
          .map((image) => image.url),
      });
    },
    validatorAdapter: zodValidator,
  });

  const versionOptions = useMemo(
    () =>
      (versions ?? []).map((version, index) => ({
        value: version.id,
        label: `Ревизия: ${index + 1}`,
      })),
    [versions]
  );

  return (
    <form.Provider>
      <SheetHeader>
        <SheetTitle>
          {TITLES_BY_MODE[mode ?? ""] ?? TITLES_BY_MODE.not_exist}
        </SheetTitle>
      </SheetHeader>
      <div className="py-4 space-y-4">
        {!!versionOptions?.length && !!version && (
          <div className="space-y-2">
            <Select
              options={versionOptions}
              onValueChange={changeVersion}
              value={version}
            />
          </div>
        )}
        <form.Field name="images" mode="array">
          {(imagesFields) => {
            return (
              <div className="space-y-2">
                <Label htmlFor={imagesFields.name}>Изображения</Label>
                <div className="space-y-2">
                  {imagesFields.state.value.map((_field, i) => (
                    <imagesFields.Field
                      index={i}
                      name="url"
                      key={i}
                      validators={{
                        onChange: z
                          .string()
                          .regex(/(https?:\/\/.+)|(^\s*$)/gm, {
                            message: "Неверный формат ссылки",
                          }),
                      }}
                    >
                      {(field) => {
                        return (
                          <div className="space-y-2">
                            <div className="flex gap-2">
                              <img
                                src={field.state.value ?? "/placeholder.svg"}
                                alt={field.state.value ?? "Изображение товара"}
                                className="aspect-square rounded-md object-cover block"
                                onError={({ currentTarget }) => {
                                  currentTarget.onerror = null;
                                  currentTarget.src = "/placeholder.svg";
                                }}
                                width={40}
                                height={40}
                              />
                              <Input
                                id={field.name}
                                name={field.name}
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) =>
                                  field.handleChange(e.target.value)
                                }
                                autoFocus
                              />
                              <Button
                                variant="secondary"
                                size="icon"
                                onClick={() => {
                                  imagesFields.removeValue(i);
                                }}
                              >
                                <TrashIcon />
                              </Button>
                            </div>
                            {!!field.state.meta.errors.length && (
                              <div className="text-sm text-destructive">
                                {field.state.meta.errors.join("; ")}
                              </div>
                            )}
                          </div>
                        );
                      }}
                    </imagesFields.Field>
                  ))}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => imagesFields.pushValue({ url: "" })}
                >
                  <PlusIcon />
                </Button>
              </div>
            );
          }}
        </form.Field>
        <form.Field name="name">
          {(field) => {
            return (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Название</Label>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  autoFocus
                />
              </div>
            );
          }}
        </form.Field>
        <form.Field name="description">
          {(field) => {
            return (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Описание</Label>
                <Textarea
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            );
          }}
        </form.Field>
        <form.Field
          name="price"
          validators={{
            onChange: z
              .number({
                invalid_type_error: "Стоймость должна быть числом",
                required_error: "Стоймость обязательная",
              })
              .positive("Стоймость должна быть больше 0"),
          }}
        >
          {(field) => {
            return (
              <div className="space-y-2">
                <Label htmlFor={field.name}>Стоймость</Label>
                <Input
                  type="number"
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.valueAsNumber)}
                />
                {!!field.state.meta.errors.length && (
                  <div className="text-sm text-destructive">
                    {field.state.meta.errors.join("; ")}
                  </div>
                )}
              </div>
            );
          }}
        </form.Field>
        <form.Field name="params" mode="array">
          {(paramsFields) => {
            return (
              <div className="space-y-2">
                <Label>Дополнительные параметры</Label>
                <div className="space-y-2">
                  {paramsFields.state.value.map((_field, i) => {
                    return (
                      <div key={i} className="flex gap-2">
                        <div className="flex-1">
                          <paramsFields.Field name="name" index={i}>
                            {(field) => {
                              return (
                                <div>
                                  <Label htmlFor={field.name}>Название</Label>
                                  <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                      field.handleChange(e.target.value)
                                    }
                                  />
                                </div>
                              );
                            }}
                          </paramsFields.Field>
                        </div>
                        <div className="flex-1">
                          <paramsFields.Field name="value" index={i}>
                            {(field) => {
                              return (
                                <div>
                                  <Label>Значение</Label>
                                  <Input
                                    id={field.name}
                                    name={field.name}
                                    value={field.state.value}
                                    onBlur={field.handleBlur}
                                    onChange={(e) =>
                                      field.handleChange(e.target.value)
                                    }
                                  />
                                </div>
                              );
                            }}
                          </paramsFields.Field>
                        </div>
                        <div className="self-end">
                          <Button
                            variant="secondary"
                            size="icon"
                            onClick={() => {
                              paramsFields.removeValue(i);
                            }}
                          >
                            <TrashIcon />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() =>
                    paramsFields.pushValue({
                      name: "",
                      value: "",
                    })
                  }
                >
                  <PlusIcon />
                </Button>
              </div>
            );
          }}
        </form.Field>
      </div>
      <SheetFooter>
        <Button disabled={mutation.isLoading} onClick={form.handleSubmit}>
          {mutation.isLoading && (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Сохранить
        </Button>
      </SheetFooter>
    </form.Provider>
  );
});

export { ProductForm };