import {DownOutlined} from '@ant-design/icons';
import Ruler from '@heroicons/react/outline/CalculatorIcon';
import {Dropdown} from 'antd';
import {ary} from 'lodash';
import {memo, useCallback, useState} from 'react';

import {SizeGuide} from '_entities/size-guide';
import {useModal} from '_utils/hooks';
import {currency} from '_utils/intl/numbers';

import {DEFAULT_SIZE, LABELS, SIZES} from './consts';
import {PriceTagType} from './types';

const PriceTag = memo<PriceTagType>(function PriceTag({product}) {
  const {isOpened, closeModal, openModal} = useModal();
  const [selectedSize, setSelectedSize] = useState(DEFAULT_SIZE);

  // Сделать отдельную фичу add to cart button, а price tag вынести как виджет
  // После того как Аня доделает корзину
  const handleAddToCart = useCallback(
    (size?: string) => {
      console.log('ADD TO CART 1 ITEM WITH SIZE: ', size || selectedSize);
    },
    [selectedSize]
  );

  const handleSelectSize = useCallback(
    (value: {key: string}) => {
      setSelectedSize(value.key);
      handleAddToCart(value.key);
    },
    [setSelectedSize, handleAddToCart]
  );

  return (
    <div className="w-full bg-common-darkest-gray p-10">
      <div className="mb-9 flex flex-col gap-2">
        <div className="text-paragraph-2">{product.name}</div>
        <div className="text-subtitle">{currency.format(Number(product.price))}</div>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className="flex cursor-pointer items-center gap-2 text-small text-common-light-gray underline hover:no-underline"
          onClick={openModal}
        >
          <span>{LABELS.SIZE_SELECTION_GUIDE}</span>
          <Ruler className="h-4 w-4" />
        </div>
        <Dropdown.Button
          menu={{items: SIZES, onClick: handleSelectSize}}
          type="primary"
          onClick={ary(handleAddToCart, 0)}
          icon={<DownOutlined rev={undefined} />}
          className="dropdown-button-block"
        >
          {LABELS.ADD_TO_CART} ({selectedSize})
        </Dropdown.Button>
      </div>
      <SizeGuide isOpened={isOpened} closeModal={closeModal} />
    </div>
  );
});

export {PriceTag};
