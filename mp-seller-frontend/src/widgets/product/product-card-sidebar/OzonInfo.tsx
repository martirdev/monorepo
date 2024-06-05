import {Button, Form, type FormProps} from 'antd';
import {memo} from 'react';

import {CategorySelect} from '_features/selects/categories';
import {PlaceSelect} from '_features/selects/places';

type FieldType = {
    place?: string;
    category?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo);
};

const OzonInfo = memo(function OzonInfo() {
    return (
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
            <Form.Item<FieldType> label="Магазин" name="place" rules={[{required: true, message: 'Выберите магазин'}]}>
                <PlaceSelect type="ozon" />
            </Form.Item>

            <Form.Item<FieldType>
                label="Категория"
                name="category"
                rules={[{required: true, message: 'Выберите категорию'}]}
            >
                <CategorySelect type="ozon" />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    );
});

export default OzonInfo;
