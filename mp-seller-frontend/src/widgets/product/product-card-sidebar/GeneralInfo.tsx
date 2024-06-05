import {Form, FormInstance, Input} from 'antd';
import {memo} from 'react';

type FieldType = {
    product_name?: string;
    vendor_code?: string;
    barcode?: string;
};

type GeneralInfoAboutProductPropsType = {
    form: FormInstance;
};

const GeneralInfoAboutProduct = memo<GeneralInfoAboutProductPropsType>(function AddNewProductSidebar({form: _form}) {
    return (
        <>
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
        </>
    );
});

export default GeneralInfoAboutProduct;
