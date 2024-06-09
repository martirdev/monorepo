import {Checkbox, Form, FormInstance, Input, Select} from 'antd';
import {memo, useMemo} from 'react';

import {YMFieldsType} from './types';

type YMFieldPropsType = {
    item: any;
    form: FormInstance<YMFieldsType>;
};

const YMField = memo<YMFieldPropsType>(function YMField({item, form}) {
    const selectMode = useMemo(() => {
        if (item.multivalue && item.allowCustomValues) {
            return 'tags';
        }
        if (item.multivalue) {
            return 'multiple';
        }
        return undefined;
    }, [item.multivalue, item.allowCustomValues]);

    console.log(item.options);
    return (
        <>
            <Form.Item
                label={item.type === 'BOOLEAN' ? undefined : item.name}
                name={['ym', 'attributes', item.id.toString(), 'value']}
                required={item.is_required}
                tooltip={item.description}
            >
                {item.type === 'ENUM' && (
                    <Select
                        options={item.options}
                        optionFilterProp="label"
                        mode={selectMode}
                        onChange={(_, option) => {
                            if (Array.isArray(option)) {
                                return;
                            }
                            form.setFieldValue(['ym', 'attributes', item.id.toString(), 'valueId'], option.valueId);
                        }}
                        showSearch
                    />
                )}
                {item.type === 'NUMERIC' && <Input inputMode="numeric" />}
                {item.type === 'BOOLEAN' && <Checkbox>{item.name}</Checkbox>}
                {(item.type === 'TEXT' || item.type === 'URL') && <Input />}
            </Form.Item>
            {!!item.options?.length && <Form.Item name={['ym', 'attributes', item.id.toString(), 'valueId']} hidden />}
        </>
    );
});

export default YMField;
