"use client";
import { CustomersSelect } from "@/components/features/selects/CustomersSelect";
import { OrderStatusSelect } from "@/components/features/selects/OrderStatusSelect";
import { ProductsSelect } from "@/components/features/selects/ProductsSelect";
import { Button } from "@/components/shared/button";
import { Input } from "@/components/shared/input";
import { Label } from "@/components/shared/label";
import { Select } from "@/components/shared/select";
import { trpc } from "@/lib/trpc";
import { PlusIcon, ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { useSearchParams } from "next/navigation";
import { memo, useCallback, useMemo } from "react";
import { toast } from "sonner";
import { v4 } from "uuid";
import { z } from "zod";
import { CreateClientLink } from "../create-client-link";
import { ORDER_FORM_INIT_VALUES, TITLES_BY_MODE } from "./consts";
import { useProject } from "@/lib/hooks/params";
import { PermissionTooltip } from "@/components/features/permission-tooltip";

type OrderFormPropsType = {
  id: Undefinable<string>;
  mode: Undefinable<string>;
  initValues?: typeof ORDER_FORM_INIT_VALUES;
  version?: string;
  versions?: { id: string }[];
};

const OrderForm = memo<OrderFormPropsType>(function OrderForm({
  id,
  mode,
  initValues,
  version,
  versions,
}) {
  const searchparams = useSearchParams();
  const project = useProject();

  const { mutate, isLoading } = trpc.setOrder.useMutation({
    onSuccess: (data) => {
      const params = new URLSearchParams(searchparams);
      if (mode === "edit") {
        params.set("version", data.id);
      } else {
        params.set("id", data.id);
        params.delete("version");
      }
      window.history.pushState(null, "", `?${params.toString()}`);
      toast("Заказ создан", {
        description: "Теперь вы можете управлять его статусом",
      });
    },
    onError: (data) => {
      toast(`Ошибка "${data.data?.code}"`, {
        description: data.message,
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
    defaultValues: initValues || ORDER_FORM_INIT_VALUES,
    onSubmit: async ({ value }) => {
      if (mode === "edit" && !id) {
        throw new Error("ID обязателен для режима редактирования");
      }

      mutate({
        id: mode === "edit" ? id! : v4(),
        address: value.address,
        customer: value.customerId,
        status: value.status,
        project,
        products: value.products.map(({ productId, amount }) => ({
          id: productId,
          amount: amount,
        })),
      });
    },
    validatorAdapter: zodValidator,
  });

  const onClientCreate = useCallback(
    (id: string) => {
      form.setFieldValue("customerId", id);
    },
    [form]
  );

  const versionOptions = useMemo(
    () =>
      (versions ?? []).map((version, index) => ({
        value: version.id,
        label: `Ревизия: ${index + 1}`,
      })),
    [versions]
  );

  return (
    <div className="p-4 space-y-4 bg-white rounded-md">
      <div className="font-bold">
        {TITLES_BY_MODE[mode ?? ""] ?? TITLES_BY_MODE.not_exist}
      </div>
      {!!versionOptions?.length && !!version && (
        <div className="space-y-2">
          <Select
            options={versionOptions}
            onValueChange={changeVersion}
            value={version}
          />
        </div>
      )}
      {mode !== "create" && mode !== "copy" && (
        <form.Field name="status">
          {(field) => (
            <div className="space-y-2">
              <Label htmlFor={field.name}>Статус</Label>
              <OrderStatusSelect
                value={field.state.value}
                onValueChange={field.handleChange}
              />
            </div>
          )}
        </form.Field>
      )}
      <form.Field name="customerId">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Покупатель</Label>
            <div className="space-y-1">
              <CustomersSelect
                onSelect={({ value }) => field.handleChange(value)}
                value={field.state.value}
                disabled={mode !== "create"}
              />
              {mode === "create" && (
                <CreateClientLink onSave={onClientCreate} />
              )}
            </div>
          </div>
        )}
      </form.Field>
      <form.Field name="address">
        {(field) => (
          <div className="space-y-2">
            <Label htmlFor={field.name}>Адрес</Label>
            <Input
              id={field.name}
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={field.handleChange}
            />
          </div>
        )}
      </form.Field>
      <form.Field name="products" mode="array">
        {(paramsFields) => (
          <div className="space-y-2">
            <Label>Корзина</Label>
            <div className="space-y-2">
              {paramsFields.state.value.map((_field, i) => (
                <div key={i} className="flex gap-2">
                  <div className="flex-1">
                    <form.Field
                      name={`products[${i}].productId`}
                      validators={{
                        onChange: z.string({
                          required_error: "Товар обязательный параметр",
                        }),
                      }}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label htmlFor={field.name}>Товар</Label>
                          <ProductsSelect
                            value={field.state.value}
                            onSelect={({ value }) => field.handleChange(value)}
                          />
                          {!!field.state.meta.errors.length && (
                            <div className="text-xs text-destructive">
                              {field.state.meta.errors.join("; ")}
                            </div>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>
                  <div className="flex-1">
                    <form.Field
                      name={`products[${i}].amount`}
                      validators={{
                        onChange: z
                          .number({
                            invalid_type_error: "Количество должно быть числом",
                            required_error: "Количесто обязательно",
                          })
                          .positive("Количество должно быть больше 0"),
                      }}
                    >
                      {(field) => (
                        <div className="space-y-2">
                          <Label>Количество</Label>
                          <Input
                            type="number"
                            id={field.name}
                            name={field.name}
                            value={field.state.value}
                            onBlur={field.handleBlur}
                            onChangeNumber={field.handleChange}
                          />
                          {!!field.state.meta.errors.length && (
                            <div className="text-xs text-destructive">
                              {field.state.meta.errors.join("; ")}
                            </div>
                          )}
                        </div>
                      )}
                    </form.Field>
                  </div>
                  <div className="mt-8">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={() => paramsFields.removeValue(i)}
                    >
                      <TrashIcon />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button
              size="icon"
              variant="secondary"
              onClick={() =>
                paramsFields.pushValue({
                  productId: undefined!,
                  amount: undefined!,
                })
              }
            >
              <PlusIcon />
            </Button>
          </div>
        )}
      </form.Field>
      <PermissionTooltip permissions={["EDITOR", "OWNER"]}>
        <Button disabled={isLoading} onClick={form.handleSubmit}>
          {isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
          Сохранить
        </Button>
      </PermissionTooltip>
    </div>
  );
});

export { OrderForm };
