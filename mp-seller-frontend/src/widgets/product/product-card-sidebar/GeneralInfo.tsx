import {ColorPicker, Form, FormInstance, Input, InputNumber, Select} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import {memo} from 'react';

import {GeneralFieldsType} from './types';

type GeneralInfoAboutProductPropsType = {
    form: FormInstance;
};

const CURRENCY_CODES = ['RUB', 'BYN', 'KZT', 'EUR', 'USD', 'CNY'].map(item => ({label: item, value: item}));
const DIMMENCIONS = ['mm', 'cm', 'in'].map(item => ({label: item, value: item}));
const SERVICE_CODE = ['IS_CODE_SERVICE', 'IS_NO_CODE_SERVICE'].map(item => ({label: item, value: item}));
const VAT = ['0', '0.1', '0.2'].map(item => ({label: item, value: item}));
const WEIGHT_UNITS = ['g', 'kg', 'lb'].map(item => ({label: item, value: item}));

const GeneralInfoAboutProduct = memo<GeneralInfoAboutProductPropsType>(function AddNewProductSidebar({form: _form}) {
    return (
        <>
            <Form.Item<GeneralFieldsType> name="barcode" label="Баркод">
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="currency_code" label="Валюта" required>
                <Select options={CURRENCY_CODES} />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="name" label="Название" required>
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="description" label="Описание" required>
                <TextArea autoSize={{minRows: 3, maxRows: 5}} />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="vendor" label="Бренд" required>
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="tags" label="Теги">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="price" label="Цена" required>
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="old_price" label="Старая цена">
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="vat" label="Коммисия" required>
                <Select options={VAT} />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="offer_id" label="Артикул" required>
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="image_group_id" label="ID Группы изображении">
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="color_image" label="Цвет изображений">
                <ColorPicker format="hex" showText />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="primary_image" label="Основное изображение">
                <Input />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="images" label="Изображения" required>
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="images360" label="Изображения 360">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="dimension_unit" label="Единицы размеров" required>
                <Select options={DIMMENCIONS} />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="width" label="Ширина" required>
                <InputNumber />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="height" label="Высота" required>
                <InputNumber />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="depth" label="Глубина" required>
                <InputNumber />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="weight_unit" label="Единицы веса" required>
                <Select options={WEIGHT_UNITS} />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="weight" label="Вес" required>
                <InputNumber />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="geo_names" label="Гео">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<GeneralFieldsType> name="service_type" label="Тип сервиса">
                <Select options={SERVICE_CODE} />
            </Form.Item>
        </>
    );
});

export default GeneralInfoAboutProduct;
