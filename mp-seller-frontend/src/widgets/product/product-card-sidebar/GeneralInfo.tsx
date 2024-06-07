import {ColorPicker, Form, FormInstance, Input, Select} from 'antd';
import {memo} from 'react';

type FieldType = {
    barcode?: string;
    color_image?: string;
    currency_code: string;
    depth?: number;
    dimension_unit?: string;
    geo_names?: string[];
    height?: number;
    image_group_id?: string;
    images?: string[];
    images360?: string[];
    name?: string;
    offer_id?: string;
    old_price?: string;
    price?: string;
    primary_image?: string;
    service_type?: string;
    vat?: string;
    weight?: number;
    weight_unit?: string;
    width?: number;
};

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
            <Form.Item<FieldType> name="barcode" label="Баркод">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="currency_code" label="Валюта">
                <Select options={CURRENCY_CODES} />
            </Form.Item>
            <Form.Item<FieldType> name="name" label="Название">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="price" label="Цена">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="old_price" label="Старая цена">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="vat" label="Коммисия">
                <Select options={VAT} />
            </Form.Item>
            <Form.Item<FieldType> name="offer_id" label="ID предложения">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="image_group_id" label="ID Группы изображении">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="color_image" label="Цвет изображений">
                <ColorPicker format="hex" showText />
            </Form.Item>
            <Form.Item<FieldType> name="primary_image" label="Основное изображение">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="images" label="Изображения">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name="images360" label="Изображения 360">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name="dimension_unit" label="Единицы размеров">
                <Select options={DIMMENCIONS} />
            </Form.Item>
            <Form.Item<FieldType> name="width" label="Ширина">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name="height" label="Высота">
                <Input inputMode="numeric" />
            </Form.Item>
            <Form.Item<FieldType> name="depth" label="Глубина">
                <Input inputMode="numeric" />
            </Form.Item>
            <Form.Item<FieldType> name="weight_unit" label="Единицы веса">
                <Select options={WEIGHT_UNITS} />
            </Form.Item>
            <Form.Item<FieldType> name="weight" label="Вес">
                <Input inputMode="numeric" />
            </Form.Item>
            <Form.Item<FieldType> name="geo_names" label="Гео">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name="service_type" label="Тип сервиса">
                <Select options={SERVICE_CODE} />
            </Form.Item>
        </>
    );
});

export default GeneralInfoAboutProduct;
