import axios from 'axios';

const API_KEY = '0682865b-bd78-41f1-a6a3-b478ad7cb8e0';

export const geoSuggestStreet = async (search: string) => {
  return axios.get(`https://suggest-maps.yandex.ru/v1/suggest`, {
    params: {
      apikey: API_KEY,
      text: search,
      types: 'street'
    }
  });
};
