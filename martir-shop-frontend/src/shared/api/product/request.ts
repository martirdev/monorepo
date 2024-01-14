import {AxiosResponse} from 'axios';

import {wait} from '_utils/wait';

// import {apiInstance} from '../api';
import {PRODUCTS} from './mock';
import {GetProductRequestType, GetProductResponceType} from './types';

//Я ОЧЕНЬ ЛЮБЛЮ КОММЕТАРИИ, МНЕ ПОТОМ ЛЕНЬ ЭТО БУДЕТ ПЕРЕПИСЫВАТЬ

export const getProductById = async (
  request: GetProductRequestType
): Promise<AxiosResponse<GetProductResponceType>['data']> => {
  // const res = await apiInstance.get<GetProductRequestType, AxiosResponse<GetProductResponceType>>(
  //   `/content-service/content-block`,
  //   {
  //     params: request
  //   }
  // );
  const res = PRODUCTS[Number(request.product_id) - 1];
  return wait(res, 1500);
};
