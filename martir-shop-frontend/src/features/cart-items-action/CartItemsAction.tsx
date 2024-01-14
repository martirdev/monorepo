import {ShoppingCartIcon} from '@heroicons/react/solid';
import {memo} from 'react';
import {Link} from 'react-router-dom';

import {useCartList} from '_utils/hooks';

const CartItemsAction = memo(function CartItemsAction() {
  const [cart] = useCartList();

  return (
    <Link to="/cart">
      <div className="relative flex h-6 w-6 cursor-pointer items-center justify-center fill-common-gray duration-200 ease-in-out hover:fill-common-light-gray">
        <ShoppingCartIcon fill="inherit" />
        {!!cart.length && (
          <div className="bg text absolute left-full top-full flex h-4 w-4 -translate-x-1/3 -translate-y-1/3 items-center justify-center rounded-lg bg-danger-normal text-small">
            {cart.length}
          </div>
        )}
      </div>
    </Link>
  );
});

export {CartItemsAction};
