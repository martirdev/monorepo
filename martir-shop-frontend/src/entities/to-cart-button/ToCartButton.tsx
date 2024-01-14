import {ShoppingCartOutlined} from '@ant-design/icons';
import {ButtonProps as AntButtonProps} from 'antd';
import {xor} from 'lodash';
import {memo, useCallback} from 'react';

import {Button} from '_shared/button';
import {useCartList} from '_utils/hooks';

import {LABELS} from './consts';

type ToCartButtonPropsType = AntButtonProps & {
  entity: string;
};

const ToCartButton = memo<ToCartButtonPropsType>(function ToCartButton({entity, ...props}) {
  const [_cart, setCart] = useCartList();
  const addEntityToCart = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      setCart(prev => xor(prev, [entity]));
    },
    [entity, setCart]
  );

  // TODO изменить отображение если товар уже в корзине
  // const cartSet = useMemo(() => new Set(cart), [cart]);

  return (
    <Button
      {...props}
      onClick={addEntityToCart}
      icon={<ShoppingCartOutlined rev={undefined} />}
      size={props.size || 'large'}
      type="primary"
    >
      {LABELS.TO_CART}
    </Button>
  );
});

export {ToCartButton};
