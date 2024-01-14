import {Form, Radio} from 'antd';
import {memo} from 'react';

import {GroupWithTitle} from './GroupTitle';
import {DELIVERY_TYPE_COURIER, LABELS, PAYMENT_TYPE_OPTIONS} from './consts';

type PaymentPropsType = {};

const Payment = memo<PaymentPropsType>(function Payment() {
  return (
    <GroupWithTitle title={LABELS.PAYMENT_TITLE} bodyClassName="max-w-[640px]">
      <div className="flex flex-col gap-6">
        <Form.Item initialValue={DELIVERY_TYPE_COURIER}>
          <Radio.Group size="large">
            {PAYMENT_TYPE_OPTIONS.map(option => (
              <Radio.Button value={option.value} key={option.value}>
                {option.label}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Form.Item>
      </div>
    </GroupWithTitle>
  );
});

export {Payment};
