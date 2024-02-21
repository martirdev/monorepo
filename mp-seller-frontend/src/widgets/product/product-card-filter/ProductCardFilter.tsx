import {Checkbox, Input, Space} from 'antd';
import {memo} from 'react';

import {PlacesOptions, ProductCardFilterType} from './types';
import { MOCK_SHOPS } from '_widgets/places/place-list/temporaryConsts';

const headerClassName = 'font-medium mb-6';
const inputClassName = 'max-w-[90px]';

const { Search } = Input;

const mpOptions = [
    {label: 'Яндекс.Маркет', value: 'ym'},
    {label: 'Озон', value: 'ozon'}
];

const placesOptions: PlacesOptions[] = MOCK_SHOPS.flatMap((shop) => {
    const { id, places } = shop;
    return places.map((place) => {
        return { label: place.name, value: id };
    });
});


const ProductCardFilter = memo<ProductCardFilterType>(function ProductCardFilter({onChange}) {
    return (
        <div className="">
            <div>
                <p className={headerClassName}>Маркетплейсы</p>

                <Checkbox.Group options={mpOptions} className="flex flex-col gap-3" onChange={onChange} />
            </div>
            <div>
                <p className={headerClassName}>Магазины</p>
                <Search placeholder="Введите название магазина" className='w-60 mb-4' />
                <Checkbox.Group options={placesOptions} onChange={onChange} className="flex flex-col gap-3"/>
            </div>
            <div>
                <p className={headerClassName}>Цена</p>
                <div className="flex justify-between gap-1">
                    <Space.Compact>
                        <Input placeholder="от" onChange={onChange} allowClear className={inputClassName} />
                    </Space.Compact>
                    <p>—</p>
                    <Input placeholder="до" onChange={onChange} allowClear className={inputClassName} />
                </div>
            </div>
        </div>
    );
});

export default ProductCardFilter;
