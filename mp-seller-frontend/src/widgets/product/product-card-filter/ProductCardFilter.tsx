import {Checkbox, Input, Space} from 'antd';
import {SearchProps} from 'antd/es/input';
import {memo, useMemo, useState} from 'react';

import {MOCK_SHOPS} from '_widgets/places/place-list/temporaryConsts';

import {ProductCardFilterType} from './types';

const headerClassName = 'font-medium mb-6';
const inputClassName = 'max-w-[90px]';

const {Search} = Input;

const MP_OPTIONS = [
    {label: 'Яндекс.Маркет', value: 'ym'},
    {label: 'Озон', value: 'ozon'}
];

const ProductCardFilter = memo<ProductCardFilterType>(function ProductCardFilter({onChange}) {
    const [search, setSearch] = useState('');

    const onSearch: SearchProps['onSearch'] = value => setSearch(value);

    const filterData = MOCK_SHOPS.filter(item =>
        item.places.some(place => place.name.toLowerCase().includes(search.toLowerCase()))
    );

    const placesOptions = useMemo(() => {
        const placesData = filterData || MOCK_SHOPS;
        return placesData.flatMap(({places}) => {
            return places.map(({id, name}) => ({value: id, label: name}));
        });
    }, [filterData]);

    return (
        <div className="overflow-auto">
            <div>
                <p className={headerClassName}>Маркетплейсы</p>

                <Checkbox.Group options={MP_OPTIONS} className="flex flex-col gap-3" onChange={onChange} />
            </div>
            <div>
                <p className={headerClassName}>Магазины</p>
                <Search
                    placeholder="Введите название магазина"
                    className="mb-4 w-64"
                    onSearch={onSearch}
                    allowClear={true}
                />
                <div className="h-40 overflow-auto">
                    <Checkbox.Group options={placesOptions} onChange={onChange} className="flex flex-col gap-3" />
                </div>
            </div>
            <div>
                <p className={headerClassName}>Цена</p>
                <div className="flex justify-between gap-1">
                    <Space.Compact>
                        <Input placeholder="от" onChange={onChange} allowClear className={inputClassName} />
                    </Space.Compact>
                    <span>—</span>
                    <Input placeholder="до" onChange={onChange} allowClear className={inputClassName} />
                </div>
            </div>
        </div>
    );
});

export default ProductCardFilter;
