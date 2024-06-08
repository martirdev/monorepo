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
        mpKeyId: string;
    };
};

type YMInfoPropsType = {
    form: FormInstance<FieldType>;
};

const YMinfo = memo(function YMinfo({form}: YMInfoPropsType) {
    const category = Form.useWatch(['ym', 'category'], form);
    const mpKeyId = Form.useWatch(['ym', 'mpKeyId'], form);

    const {data = []} = trpc.getSettingsByCategory.useQuery(
        {
            categoryId: category?.toString(),
            mpKeyId: mpKeyId
        },
        {
            enabled: !!category && !!mpKeyId
        }
    );

    return (
        <>
            <Form.Item<FieldType> label="Магазин" name={['ym', 'place']} required>
                <PlaceSelect
                    type="ym"
                    onChange={(_value, option) => {
                        if (Array.isArray(option)) {
                            return;
                        }
                        form.setFieldValue(['ym', 'mpKeyId'], option.marketplaceKeyId);
                    }}
                />
            </Form.Item>

            <Form.Item<FieldType> label="Категория" name={['ym', 'category']} required>
                <CategorySelect type="ym" showSearch optionFilterProp="label" />
            </Form.Item>

            {!!data.length && data.map(item => <YMField item={item} form={form} key={item.id} />)}
        </>
    );
});

export default YMinfo;
