import { PlusOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { SearchProps } from 'antd/es/input';
import { useCallback, useMemo, useState } from 'react';

import {trpc} from '_shared/api/trpc';
import {trpc} from '_shared/api/trpc';
import AddPlaceDrawer from '_widgets/places/place-drawer';
import PlacesList from '_widgets/places/place-list';

const {Search} = Input;

const Places = function Places() {
    const {data = []} = trpc.getMarketplaceKeys.useQuery();
    const {data = []} = trpc.getMarketplaceKeys.useQuery();
    const [search, setSearch] = useState('');
    const [openAddDrawer, setOpenAddDrawer] = useState(false);
    const {data} = trpc.getMarketplaceKeys.useQuery()

    const showAddDrawer = useCallback(() => {
        setOpenAddDrawer(true);
    }, []);

    const onClose = useCallback(() => {
        setOpenAddDrawer(false);
    }, []);

    const onSearch: SearchProps['onSearch'] = value => setSearch(value);

    const tableData = useMemo(
        () => data.filter(item => item.places.some(place => place.name.toLowerCase().includes(search.toLowerCase()))),
        [search, data]
        () => data.filter(item => item.places.some(place => place.name.toLowerCase().includes(search.toLowerCase()))),
        [search, data]
    );

    return (
        <div>
            <div className="mb-14 flex justify-between">
                <Search
                    placeholder="Введите название магазина"
                    onSearch={onSearch}
                    allowClear
                    className="w-full max-w-sm"
                />
                <Button type="primary" icon={<PlusOutlined />} onClick={showAddDrawer}>
                    Добавить магазин
                </Button>
            </div>
            <PlacesList placesDataSource={tableData} />
            <PlacesList placesDataSource={tableData} />

            <AddPlaceDrawer onClose={onClose} open={openAddDrawer} title={'Добавление магазина'} />
        </div>
    );
};

export default Places;
