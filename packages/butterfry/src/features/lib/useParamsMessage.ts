import { useEffect } from "react";
import { toast } from "sonner";

import { rootRoute } from "@/pages/layouts/root";

const getMessage = (tag: string) => {
  switch (tag) {
    case "UserCreated":
      return {
        description:
          "Теперь вы можете ознакомиться с сервисом и его возможностями",
        title: "Учетная запись создана",
      };
    case "UserYandexInfoHTTPError":
      return {
        description:
          'Мы несмогли получить информацию от "Yandex", попробуйте позже',
        title: "Ошибка получения информации",
      };
    default:
      return {
        description: "На нашем сервисе обнаружена ошибка, попробуйте позже",
        title: "Ошибка получения информации",
      };
  }
};

export const useParamsMessage = () => {
  const { code: tag } = rootRoute.useSearch();
  const navigate = rootRoute.useNavigate();

  useEffect(() => {
    if (!tag) return;

    const tagOption = getMessage(tag);
    if (!tagOption) return;

    navigate({ search: { code: undefined } });
    toast(tagOption.title, {
      description: tagOption.description,
    });
  }, [tag]);
};
