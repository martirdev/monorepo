import {Checkbox, Flex, Form, Input} from 'antd';
import {memo} from 'react';

import {GroupWithTitle} from './GroupTitle';
import {LABELS} from './consts';

type ContactInfoPropsType = {};

const ContactInfo = memo<ContactInfoPropsType>(function ContactInfo() {
  return (
    <GroupWithTitle title={LABELS.CONTACT_INFO_TITLE} bodyClassName="max-w-[640px]">
      <div className="flex flex-col gap-6">
        <Flex gap="small">
          <Form.Item label={LABELS.CONTACT_INFO_PHONE} required>
            <Input size="large" placeholder={LABELS.CONTACT_INFO_PHONE_PLACEHOLDER} />
          </Form.Item>
          <Form.Item label={LABELS.CONTACT_INFO_EMAIL} className="flex-1" required>
            <Input size="large" placeholder={LABELS.CONTACT_INFO_EMAIL_PLACEHOLDER} />
          </Form.Item>
        </Flex>
        <Flex gap="small">
          <Form.Item label={LABELS.CONTACT_INFO_SURNAME} required>
            <Input size="large" placeholder={LABELS.CONTACT_INFO_SURNAME_PLACEHOLDER} />
          </Form.Item>
          <Form.Item label={LABELS.CONTACT_INFO_NAME} className="flex-1" required>
            <Input size="large" placeholder={LABELS.CONTACT_INFO_NAME_PLACEHOLDER} />
          </Form.Item>
          <Form.Item label={LABELS.CONTACT_INFO_PATRONYMIC} className="flex-1">
            <Input size="large" placeholder={LABELS.CONTACT_INFO_PATRONYMIC_PLACEHOLDER} />
          </Form.Item>
        </Flex>
        <Form.Item label={LABELS.CONTACT_INFO_COMMENT}>
          <Input.TextArea size="large" autoSize={{minRows: 5}} />
        </Form.Item>
        <Form.Item>
          <Checkbox>{LABELS.CONTACT_INFO_POLICY_CONFIRMATION}</Checkbox>
        </Form.Item>
        <Form.Item>
          <Checkbox>{LABELS.CONTACT_INFO_MARKETING_CONFIRMATION}</Checkbox>
        </Form.Item>
      </div>
    </GroupWithTitle>
  );
});

export {ContactInfo};
