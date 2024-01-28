import axios from "axios";
import { OZON_CATEGORIES } from "./ozon-categories";
import { LoadCategorySettings } from "./ozon-types";

export const loadOzonCategories = () => OZON_CATEGORIES;

export const loadOzonSettingsByCategory = async (
  token: string,
  description_category_id: string,
  type_id: string
) =>
  axios.post<LoadCategorySettings>(
    `https://api-seller.ozon.ru/v1/description-category/attribute`,
    {
      language: "RU",
      type_id,
      description_category_id,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
