import axios from "axios";
import { cookies } from "next/headers";

export type UserResponse = {
  id: string;
  name: string;
  surname: string;
  avatar?: string;
  projects?: {
    userId: string;
    projectId: string;
    assignedAt: string;
    role: string[];
  }[];
};

export const getUser = async () => {
  const authSession = cookies().get("auth_session")?.value;
  const res = await getUserRequest(authSession);

  if (res.status !== 200) {
    throw new Error("Сервис авторизации недоступен");
  }

  return res.data || null;
};

export const getUserRequest = (authSession?: string) => {
  return axios.get<UserResponse>(`${process.env.BACKEND_API}/me`, {
    headers: {
      Authorization: `Bearer ${authSession}`,
    },
  });
};
