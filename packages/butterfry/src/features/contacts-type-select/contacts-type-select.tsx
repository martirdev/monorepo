import { FC } from "react";

import { Select, SelectCommonProps } from "@/shared/ui/select";

const CONTACTS_TYPES = [
  { value: "vk", label: "VK" },
  { value: "ok", label: "Однокласники" },
  { value: "telegram", label: "Telegram" },
  { value: "instagram", label: "Instagram" },
  { value: "email", label: "Email" },
  { value: "youtube", label: "YouTube" },
  { value: "phone", label: "Телефон" },
];

export const ContactsTypeSelect: FC<Omit<SelectCommonProps, "items">> = (
  props,
) => {
  return <Select items={CONTACTS_TYPES} {...props} />;
};
