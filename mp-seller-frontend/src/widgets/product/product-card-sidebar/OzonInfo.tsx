import {Form, FormInstance} from 'antd';
import {memo} from 'react';

import {CategorySelect} from '_features/selects/categories';
import {PlaceSelect} from '_features/selects/places';
import {trpc} from '_shared/api/trpc';

import OzonField from './OzonField';

export type FieldType = {
    ozon: {
        place: string;
        category: number;
        descriptionCategoryId: number;
    };
};

type OzonInfoPropsType = {
    form: FormInstance<FieldType>;
};

const OzonInfo = memo<OzonInfoPropsType>(function OzonInfo({form}) {
    const category = Form.useWatch(['ozon', 'category'], form);
    const descriptionCategoryId = Form.useWatch(['ozon', 'descriptionCategoryId'], form);
    const place = Form.useWatch(['ozon', 'place'], form);

    const {data = []} = trpc.getSettingsByCategory.useQuery({
        categoryId: category?.toString(),
        descriptionCategoryId: descriptionCategoryId,
        mpKeyId: place
    });

    return (
        <>
            <Form.Item<FieldType>
                label="Магазин"
                name={['ozon', 'place']}
                rules={[{required: true, message: 'Выберите магазин'}]}
            >
                <PlaceSelect type="ozon" onChange={value => form.setFieldValue(['ozon', 'place'], value)} />
            </Form.Item>

            <Form.Item<FieldType>
                label="Категория"
                name={['ozon', 'category']}
                rules={[{required: true, message: 'Выберите категорию'}]}
            >
                <CategorySelect
                    type="ozon"
                    onChange={(_value, option) => {
                        if (Array.isArray(option)) {
                            return;
                        }
                        form.setFieldValue(['ozon', 'descriptionCategoryId'], option.category_id);
                    }}
                />
            </Form.Item>

            <Form.Item<FieldType> name={['ozon', 'descriptionCategoryId']} hidden />

            {!!data.length && data.map(item => <OzonField item={item} form={form} key={item.id} />)}
        </>
    );
});

export default OzonInfo;
