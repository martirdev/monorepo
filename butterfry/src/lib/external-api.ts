import axios from "axios";
import { cookies } from "next/headers";

type UserResponse = { id: string; name: string; surname: string };

export const getUser = async () => {
  const authSession = cookies().get("auth_session")?.value;
  const res = await axios.get<UserResponse>(`${process.env.BACKEND_API}/me`, {
    headers: {
      Authorization: `Bearer ${authSession}`,
    },
  });
  if (res.status !== 200) {
    throw new Error("Сервис авторизации недоступен");
  }

  return res.data || null;
};
