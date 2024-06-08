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
        description_category_id: number;
        mpKeyId: string;
    };
};

type OzonInfoPropsType = {
    form: FormInstance<FieldType>;
};

const OzonInfo = memo<OzonInfoPropsType>(function OzonInfo({form}) {
    const category = Form.useWatch(['ozon', 'category'], form);
    const descriptionCategoryId = Form.useWatch(['ozon', 'description_category_id'], form);
    const mpKeyId = Form.useWatch(['ozon', 'mpKeyId'], form);

    const {data = []} = trpc.getSettingsByCategory.useQuery(
        {
            categoryId: category?.toString(),
            descriptionCategoryId: descriptionCategoryId,
            mpKeyId: mpKeyId
        },
        {
            enabled: !!category && !!descriptionCategoryId && !!mpKeyId
        }
    );

    return (
        <>
            <Form.Item<FieldType> label="Магазин" name={['ozon', 'place']} required>
                <PlaceSelect
                    type="ozon"
                    onChange={(_value, option) => {
                        if (Array.isArray(option)) {
                            return;
                        }
                        form.setFieldValue(['ozon', 'mpKeyId'], option.marketplaceKeyId);
                    }}
                />
            </Form.Item>

            <Form.Item<FieldType> name={['ozon', 'mpKeyId']} hidden />

            <Form.Item<FieldType> label="Категория" name={['ozon', 'category']} required>
                <CategorySelect
                    type="ozon"
                    onChange={(_value, option) => {
                        if (Array.isArray(option)) {
                            return;
                        }
                        form.setFieldValue(['ozon', 'description_category_id'], option.category_id);
                    }}
                    optionFilterProp="label"
                    showSearch
                />
            </Form.Item>

            <Form.Item<FieldType> name={['ozon', 'description_category_id']} hidden />

            {!!data.length && data.map(item => <OzonField item={item} form={form} key={item.id} />)}
        </>
    );
});

export default OzonInfo;
