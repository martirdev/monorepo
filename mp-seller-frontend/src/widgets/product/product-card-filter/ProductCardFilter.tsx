import {Checkbox, Form} from 'antd';
import FormItem from 'antd/es/form/FormItem';
import {memo} from 'react';

import {PlaceSelect} from '_features/selects/places';

import {ProductCardFilterType} from './types';

const MP_OPTIONS = [
    {label: 'Яндекс.Маркет', value: 'ym'},
    {label: 'Озон', value: 'ozon'}
];

const ProductCardFilter = memo<ProductCardFilterType>(function ProductCardFilter({form}) {
    return (
        <Form form={form} layout="vertical">
            <FormItem name="marketplaceTypes" label={<span className="font-medium">Маркетплейсы</span>}>
                <Checkbox.Group options={MP_OPTIONS} className="flex flex-col gap-3" />
            </FormItem>
            <FormItem name="places" label={<span className="font-medium">Магазины</span>}>
                <PlaceSelect className="w-full" optionFilterProp="label" showSearch mode="multiple" />
            </FormItem>
        </Form>
    );
});

export default ProductCardFilter;
