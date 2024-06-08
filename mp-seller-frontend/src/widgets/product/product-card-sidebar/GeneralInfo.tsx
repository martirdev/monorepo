import {ColorPicker, Form, FormInstance, Input, InputNumber, Select} from 'antd';
import {memo} from 'react';

type FieldType = {
    ozon: {
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
            <Form.Item<FieldType> name={['ozon', 'barcode']} label="Баркод">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'currency_code']} label="Валюта" required>
                <Select options={CURRENCY_CODES} />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'name']} label="Название" required>
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'price']} label="Цена" required>
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'old_price']} label="Старая цена">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'vat']} label="Коммисия" required>
                <Select options={VAT} />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'offer_id']} label="Артикул" required>
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'image_group_id']} label="ID Группы изображении">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'color_image']} label="Цвет изображений">
                <ColorPicker format="hex" showText />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'primary_image']} label="Основное изображение">
                <Input />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'images']} label="Изображения" required>
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'images360']} label="Изображения 360">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'dimension_unit']} label="Единицы размеров">
                <Select options={DIMMENCIONS} />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'width']} label="Ширина">
                <InputNumber />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'height']} label="Высота">
                <InputNumber />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'depth']} label="Глубина">
                <InputNumber />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'weight_unit']} label="Единицы веса">
                <Select options={WEIGHT_UNITS} />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'weight']} label="Вес">
                <InputNumber />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'geo_names']} label="Гео">
                <Select mode="tags" />
            </Form.Item>
            <Form.Item<FieldType> name={['ozon', 'service_type']} label="Тип сервиса">
                <Select options={SERVICE_CODE} />
            </Form.Item>
        </>
    );
});

export default GeneralInfoAboutProduct;
