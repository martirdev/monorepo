import {Form, FormInstance} from 'antd';
import {memo} from 'react';

import {CategorySelect} from '_features/selects/categories';
import {PlaceSelect} from '_features/selects/places';
import {trpc} from '_shared/api/trpc';

type FieldType = {
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
    const ozonValues = Form.useWatch('ozon', form);

    const {data} = trpc.getSettingsByCategory.useQuery({
        categoryId: ozonValues?.category?.toString(),
        descriptionCategoryId: ozonValues?.descriptionCategoryId,
        mpKeyId: ozonValues?.place
    });

    console.log(ozonValues);

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

                        console.log({option});
                        form.setFieldValue(['ozon', 'descriptionCategoryId'], option.category_id);
                    }}
                />
            </Form.Item>

            <Form.Item<FieldType> name={['ozon', 'descriptionCategoryId']} hidden />
        </>
    );
});

export default OzonInfo;
