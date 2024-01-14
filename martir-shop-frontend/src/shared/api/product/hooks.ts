import useSWR from 'swr';

import {getProductById} from './request';

const swrOptions = {
  revalidateOnFocus: false
};
// Get product by id
export const useGetProduct = (id: string) => {
  return useSWR(
    {name: 'GET_CONTENT_BLOCK', id},
    async ({id: product_id}) => await getProductById({product_id}),
    swrOptions
  );
};
