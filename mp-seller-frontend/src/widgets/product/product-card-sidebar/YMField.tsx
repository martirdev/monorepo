import {Checkbox, Form, FormInstance, Input, Select} from 'antd';
import {memo, useMemo} from 'react';

import {FieldType} from './YMinfo';

type YMFieldPropsType = {
    item: any;
    form: FormInstance<FieldType>;
};

const YMField = memo<YMFieldPropsType>(function YMField({item}) {
    const selectMode = useMemo(() => {
        if (item.multivalue && item.allowCustomValues) {
            return 'tags';
        }
        if (item.multivalue) {
            return 'multiple';
        }
        return undefined;
    }, [item.multivalue, item.allowCustomValues]);

    return (
        <Form.Item
            label={item.type === 'BOOLEAN' ? undefined : item.name}
            name={['ym', 'attribute', item.id.toString()]}
            required={item.is_required}
            tooltip={item.description}
        >
            {item.type === 'ENUM' && (
                <Select options={item.options} optionFilterProp="label" mode={selectMode} showSearch />
            )}
            {item.type === 'NUMERIC' && <Input inputMode="numeric" />}
            {item.type === 'BOOLEAN' && <Checkbox>{item.name}</Checkbox>}
            {(item.type === 'TEXT' || item.type === 'URL') && <Input />}
        </Form.Item>
    );
});

export default YMField;
