import {Button, Form, type FormProps, Input} from 'antd';
import {memo} from 'react';

type FieldType = {
    product_name?: string;
    vendor_code?: string;
    barcode?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
    console.log('Failed:', errorInfo);
};

const GeneralInfoAboutProduct = memo(function AddNewProductSidebar() {
    return (
        <Form
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Название товара"
                name="product_name"
                rules={[{required: true, message: 'Пожалуйста, заполните название товара!'}]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Артикул"
                name="vendor_code"
                rules={[{required: true, message: 'Пожалуйста, введите артикул!'}]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Штрихкод"
                name="barcode"
                rules={[{required: true, message: 'Пожалуйста, введите штрихкод!'}]}
            >
                <Input />
            </Form.Item>

            <Form.Item>
                <Button type="primary">Сохранить</Button>
            </Form.Item>
        </Form>
    );
});

export default GeneralInfoAboutProduct;
