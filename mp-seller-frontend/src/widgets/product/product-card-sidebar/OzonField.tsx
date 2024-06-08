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
    const descriptionCategoryId = Form.useWatch(['ozon', 'description_category_id'], form);
    const mpKeyId = Form.useWatch(['ozon', 'mpKeyId'], form);
    const category = Form.useWatch(['ozon', 'category'], form);

    const {data = [], isLoading} = trpc.getSettingValues.useQuery(
        {
            attributeId: item.id,
            descriptionCategoryId: descriptionCategoryId,
            mpKeyId: mpKeyId,
            typeId: category,
            limit: 100
        },
        {
            enabled: !!item.dict
        }
    );
    const options =
        item.name === 'Бренд'
            ? [{label: 'Нет бренда', value: 'Нет бренда', dictId: undefined}]
            : data.map(item => ({value: item.value, label: item.value, dictId: item.id}));

    return (
        <>
            <Form.Item
                label={item.type === 'Boolean' ? undefined : item.name}
                name={['ozon', 'attributes', item.id.toString(), 'value']}
                required={item.is_required}
                tooltip={item.description}
            >
                {isLoading && !!item.dict && <LoadingOutlined className="rotate" />}
                {(!isLoading || !item.dict) && (
                    <>
                        {item.type === 'String' && !!options.length && (
                            <Select
                                options={options}
                                optionFilterProp="label"
                                onChange={(_value, option) => {
                                    if (Array.isArray(option)) {
                                        return;
                                    }
                                    form.setFieldValue(
                                        ['ozon', 'attributes', item.id.toString(), 'dictionary_value_id'],
                                        option.dictId
                                    );
                                }}
                                showSearch
                            />
                        )}
                        {item.type === 'multiline' && <Select mode="tags" />}
                        {item.type === 'Decimal' && <Input inputMode="decimal" />}
                        {item.type === 'Integer' && <Input inputMode="numeric" />}
                        {item.type === 'Boolean' && <Checkbox>{item.name}</Checkbox>}
                        {item.type === 'String' && !options.length && <Input />}
                        {item.type === 'URL' && <Input name="url" />}
                    </>
                )}
            </Form.Item>
            {!!options.length && item.name !== 'Бренд' && (
                <Form.Item name={['ozon', 'attributes', item.id.toString(), 'dictionary_value_id']} hidden />
            )}
        </>
    );
});

export default OzonField;
