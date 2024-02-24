type UserInfoResponse = {
  id: string;
  login: string;
  client_id: string;
  display_name: string;
  real_name: string;
  first_name: string;
  last_name: string;
  sex: string;
  default_avatar_id: string;
  is_avatar_empty: boolean;
  psuid: string;
};

export const yandexUserInfo = (token: string) =>
  fetch("https://login.yandex.ru/info", {
    headers: {
      Authorization: `OAuth ${token}`,
    },
  }).then((res) => res.json() as Promise<UserInfoResponse>);
