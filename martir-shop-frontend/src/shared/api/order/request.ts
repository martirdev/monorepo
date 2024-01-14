import {wait} from '_utils/wait';

import {CalculateOrderRequestType} from './types';

export const calculateOrder = async (_request: CalculateOrderRequestType) => {
  return await wait(
    {
      total: 14200,
      products: 14500,
      delivery: 0,
      payment: 0,
      discount: -300
    },
    2000
  );
};
