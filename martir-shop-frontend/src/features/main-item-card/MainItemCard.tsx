import {memo} from 'react';

import {ToCartButton} from '_entities/to-cart-button';
import {ToLikedButton} from '_entities/to-liked-button';
import {currency} from '_utils/intl/numbers';

type MainItemCardPropsType = {
  productId: string;
  price: number;
  image: string;
  title: string;
};

const MainItemCard = memo<MainItemCardPropsType>(function MainItemCard({productId, price, image, title}) {
  return (
    <div>
      <div className="group relative aspect-square w-full overflow-hidden bg-common-dark-gray">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <div>{title}</div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-1">
          <div className="text-paragraph-2">{currency.format(price)}</div>
          <div className="flex gap-2">
            <ToLikedButton entity={productId} size="middle" />
            <ToCartButton entity={productId} className="flex-1" size="middle" />
          </div>
        </div>
      </div>
    </div>
  );
});

export {MainItemCard};
