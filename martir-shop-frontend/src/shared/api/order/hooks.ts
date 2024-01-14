import useSWR from 'swr';

import {calculateOrder} from './request';
import {CalculateOrderRequestType} from './types';

export const useCalculateOrder = (props: CalculateOrderRequestType) => {
  return useSWR(
    {...props, name: 'CALCULATE_ORDER'},
    async (props: CalculateOrderRequestType) => await calculateOrder(props)
  );
};
