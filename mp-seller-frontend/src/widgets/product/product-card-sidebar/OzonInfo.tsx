import {Button, Form, type FormProps, Select} from 'antd';
import {memo} from 'react';

const {Option} = Select;

type FieldType = {
    places?: string;
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
        <Form
            name="basic"
            initialValues={{remember: true}}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<FieldType>
                label="Магазины ОЗОН"
                name="places"
                rules={[{required: true, message: 'Пожалуйста, заполните магазины!'}]}
            >
                <Select placeholder="Выберите магазины ОЗОН" allowClear>
                    <Option value="1">ЛампаДА</Option>
                    <Option value="2">Пифагор</Option>
                    <Option value="other">Другое</Option>
                </Select>
            </Form.Item>

            <Form.Item<FieldType>
                label="Категория на ОЗОН"
                name="category"
                rules={[{required: true, message: 'Пожалуйста, введите категории!'}]}
            >
                <Select placeholder="Выберите категории на ОЗОН" allowClear>
                    <Option value="1">Электроника</Option>
                    <Option value="2">Канцелярия</Option>
                    <Option value="3">Бытовая техника</Option>
                    <Option value="other">Другое</Option>
                </Select>
            </Form.Item>

            <Form.Item>
                <Button type="primary">Сохранить</Button>
            </Form.Item>
        </Form>
    );
});

export default OzonInfo;
