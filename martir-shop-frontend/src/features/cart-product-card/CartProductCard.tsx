import {CloseOutlined} from '@ant-design/icons';
import {Skeleton} from 'antd';
import {memo, useCallback} from 'react';

import {useGetProduct} from '_shared/api/product/hooks';
import {useCartList} from '_utils/hooks';
import {currency} from '_utils/intl/numbers';

type CartProductCardType = {productId: string};

const CartProductCard = memo<CartProductCardType>(function CartProductCard({productId}) {
  const {data, isLoading} = useGetProduct(productId);
  const [_cartList, changeCartList] = useCartList();

  const removeItemFromCart = useCallback(() => {
    changeCartList(prev => prev.filter(product => product !== productId));
  }, [productId, changeCartList]);

  return (
    <div>
      <div className="flex content-start gap-5">
        {isLoading ? (
          <Skeleton.Image className="!h-[150px] !w-[150px]" active />
        ) : (
          <img src={data.image} alt={data.name} className="aspect-square w-[150px]" />
        )}
        <div className="flex flex-1 flex-col gap-2">
          {isLoading ? <Skeleton active /> : <div className="text-paragraph-2">{data.name}</div>}
        </div>
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <Skeleton.Input size="large" active />
          ) : (
            <div className="text-page-title font-normal leading-none">{currency.format(Number(data.price))}</div>
          )}
          {(!isLoading || data?.previousPrice) && (
            <div className="flex justify-end text-paragraph text-common-gray line-through">
              {isLoading ? <Skeleton.Input size="small" active /> : currency.format(Number(data.previousPrice))}
            </div>
          )}
        </div>
        <div>
          {isLoading ? (
            <Skeleton.Button size="large" shape="circle" className="!rounded" active />
          ) : (
            <CloseOutlined
              style={{fontSize: '32px'}}
              rev={undefined}
              className="flex items-start"
              onClick={removeItemFromCart}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export {CartProductCard};
