import {LoadingOutlined} from '@ant-design/icons';
import {Checkbox, Form, FormInstance, Input, Select} from 'antd';
import {memo} from 'react';

import {trpc} from '_shared/api/trpc';

import {FieldType} from './OzonInfo';

type OzonFieldPropsType = {
    item: any;
    form: FormInstance<FieldType>;
};

const OzonField = memo<OzonFieldPropsType>(function OzonField({item, form}) {
    const descriptionCategoryId = Form.useWatch(['ozon', 'descriptionCategoryId'], form);
    const place = Form.useWatch(['ozon', 'place'], form);
    const category = Form.useWatch(['ozon', 'category'], form);

    const {data = [], isLoading} = trpc.getSettingValues.useQuery(
        {
            attributeId: item.id,
            descriptionCategoryId: descriptionCategoryId,
            mpKeyId: place,
            typeId: category,
            limit: 100
        },
        {
            enabled: !!item.dict
        }
    );
    const options = data.map(item => ({value: item.id, label: item.value}));

    return (
        <Form.Item
            label={item.type === 'Boolean' ? undefined : item.name}
            name={['ozon', 'attribute', item.id]}
            required={item.is_required}
            tooltip={item.description}
        >
            {isLoading && !!item.dict && <LoadingOutlined className="rotate" />}
            {(!isLoading || !item.dict) && (
                <>
                    {item.type === 'String' && !!options.length && (
                        <Select options={options} showSearch optionFilterProp="label" />
                    )}
                    {item.type === 'multiline' && <Select mode="tags" />}
                    {item.type === 'Decimal' && <Input inputMode="decimal" />}
                    {item.type === 'Integer' && <Input inputMode="numeric" />}
                    {item.type === 'Boolean' && <Checkbox>{item.name}</Checkbox>}
                    {((item.type === 'String' && !options.length) || item.type === 'URL') && <Input />}
                </>
            )}
        </Form.Item>
    );
});

export default OzonField;
