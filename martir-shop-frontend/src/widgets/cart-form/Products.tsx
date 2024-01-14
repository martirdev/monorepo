import {memo} from 'react';

import {CartProductCard} from '_features/cart-product-card';

import {GroupWithTitle} from './GroupTitle';
import {LABELS} from './consts';

type ProductsPropsType = {
  productIdArr: string[];
};

const Products = memo<ProductsPropsType>(function Products({productIdArr}) {
  return (
    <GroupWithTitle title={LABELS.PRODUCTS_TITLE}>
      <div className="flex flex-col gap-6">
        {productIdArr.map((productId, index) => (
          <CartProductCard productId={productId} key={index} />
        ))}
      </div>
    </GroupWithTitle>
  );
});

export {Products};
