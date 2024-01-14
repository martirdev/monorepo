import {Skeleton} from 'antd';
import {memo} from 'react';

import {useCalculateOrder} from '_shared/api/order';
import {Button} from '_shared/button';
import {currency} from '_utils/intl/numbers';

import {LABELS} from './consts';

const CartSummary = memo(function CartSummary() {
  const {isLoading, data} = useCalculateOrder();

  return (
    <div className="flex flex-col gap-16 bg-common-darkest-gray p-10">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-2 text-paragraph">
          <span className="min-w-[100px]">{LABELS.ITEMS}</span>
          <span>{isLoading ? <Skeleton.Input size="small" active /> : currency.format(data.products)}</span>
        </div>
        <div className="flex justify-between gap-2 text-paragraph">
          <span className="min-w-[100px]">{LABELS.DISCOUNT}</span>
          <span>{isLoading ? <Skeleton.Input size="small" active /> : currency.format(data.discount)}</span>
        </div>
        <div className="flex justify-between gap-2 text-paragraph">
          <span className="min-w-[100px]">{LABELS.DELIVERY}</span>
          <span>{LABELS.FREE}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2 text-paragraph">
          <span className="min-w-[100px]">{LABELS.PAYMENT_TYPE}</span>
          <span>{}</span>
        </div>
        <div className="flex gap-2 text-paragraph">
          <span className="min-w-[100px]">{LABELS.DELIVERY_TYPE}</span>
          <span>{}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between text-page-title">
          <span>{LABELS.SUMMARY}</span>
          <span>{isLoading ? <Skeleton.Input size="large" active /> : currency.format(data.total)}</span>
        </div>
        <Button size="large" block>
          {LABELS.CREATE_ORDER}
        </Button>
      </div>
    </div>
  );
});

export {CartSummary};
