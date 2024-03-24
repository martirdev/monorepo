"use client";
import { trpc } from "@/lib/trpc";
import { memo, useMemo } from "react";
import { ClientSheet } from "./client-sheet";
import { CLIENT_FORM_INIT_VALUES } from "./consts";

type ClientSheetWithRequestPropsType = {
  id: string;
  mode: Undefinable<string>;
};

export const ClientSheetWithRequest = memo<ClientSheetWithRequestPropsType>(
  function ClientSheetWithRequest({ id, mode }) {
    const { data } = trpc.getCustomer.useQuery({
      id,
    });

    const model = useMemo(() => {
      if (!data) {
        return;
      }

      const initValues: typeof CLIENT_FORM_INIT_VALUES = {
        firstName: data.firstName,
        secondName: data.secondName,
        thirdName: data.thirdName || "",
        contact: data.contact,
      };
      return initValues;
    }, [data]);

    return <ClientSheet id={id} mode={mode} initValues={model} />;
  }
);
