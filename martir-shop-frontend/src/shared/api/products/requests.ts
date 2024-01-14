import {MOCK_DATA} from './consts';
import {ListProductResponse} from './types';

export const getProductList = async (): Promise<ListProductResponse> => {
  return Promise.resolve(MOCK_DATA);
};
