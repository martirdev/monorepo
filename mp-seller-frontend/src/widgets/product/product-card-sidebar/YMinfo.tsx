import {Form, FormInstance} from 'antd';
import {memo} from 'react';

import {CategorySelect} from '_features/selects/categories';
import {PlaceSelect} from '_features/selects/places';
import {trpc} from '_shared/api/trpc';

import YMField from './YMField';

export type FieldType = {
    ym: {
        place?: string;
        category?: string;
    };
};

type YMInfoPropsType = {
    form: FormInstance<FieldType>;
};

const YMinfo = memo(function YMinfo({form}: YMInfoPropsType) {
    const category = Form.useWatch(['ym', 'category'], form);
    const place = Form.useWatch(['ym', 'place'], form);

    const {data = []} = trpc.getSettingsByCategory.useQuery(
        {
            categoryId: category?.toString(),
            mpKeyId: place
        },
        {
            enabled: !!category && !!place
        }
    );

    return (
        <>
            <Form.Item<FieldType>
                label="Магазин"
                name={['ym', 'place']}
                rules={[{required: true, message: 'Выберите магазин'}]}
            >
                <PlaceSelect type="ym" onChange={value => form.setFieldValue(['ym', 'place'], value)} />
            </Form.Item>

            <Form.Item<FieldType>
                label="Категория"
                name={['ym', 'category']}
                rules={[{required: true, message: 'Выберите категорию'}]}
            >
                <CategorySelect type="ym" showSearch optionFilterProp="label" />
            </Form.Item>

            {!!data.length && data.map(item => <YMField item={item} form={form} key={item.id} />)}
        </>
    );
});

export default YMinfo;
