import useSWRInfinite from 'swr/infinite';

import {getProductList} from './requests';

// Get list of tickets
const getParams = async (params: {offset: number}) => {
  console.log(params);
  return await getProductList();
};
const getKey = (pageIndex: number, previousPageData: Array<unknown>) => {
  if (previousPageData && !previousPageData.length) return null;
  return {name: 'GET_PRODUCT_LIST', offset: pageIndex};
};

const swrOptions = {
  revalidateFirstPage: false,
  revalidateOnFocus: false
};

export const useGetProductList = () => {
  return useSWRInfinite(getKey, getParams, swrOptions);
};
