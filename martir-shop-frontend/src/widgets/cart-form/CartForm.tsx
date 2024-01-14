import {Form, FormInstance} from 'antd';
import {memo} from 'react';

import {useCartList} from '_utils/hooks';

import {ContactInfo} from './ContactInfo';
import {Delivery} from './Delivery';
import {Payment} from './Payment';
import {Products} from './Products';

type CartFormPropsType = {
  form: FormInstance;
};

const CartForm = memo<CartFormPropsType>(function CartForm({form}) {
  const [cartList] = useCartList();

  return (
    <Form layout="vertical" form={form}>
      <div className="flex flex-1 flex-col gap-16">
        <Products productIdArr={cartList} />
        <Delivery form={form} />
        <Payment />
        <ContactInfo />
      </div>
    </Form>
  );
});

export {CartForm};
