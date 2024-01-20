import axios from "axios";
import { LoadPlacesFromYMRequest } from "./types";

export const loadPlacesFromYM = async (token: string) =>
  axios.get<LoadPlacesFromYMRequest>(
    "https://api.partner.market.yandex.ru/campaigns",
    {
      data: { page: 1, pageSize: 100 },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
