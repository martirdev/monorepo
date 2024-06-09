import {Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {memo, useCallback, useMemo, useState} from 'react';

import {MarketplaceIcon} from '_shared/mp-logos';

import {KeyForMarketplaceType, PlacesListType} from './types';

const columns: ColumnsType<KeyForMarketplaceType> = [
    {
        title: '',
        dataIndex: 'type',
        key: 'type',
        render: (_, {type}) => <MarketplaceIcon type={type} />,
        width: '1%'
    },
    {
        title: 'Ключ',
        dataIndex: 'encrypted_api_key',
        width: '10%'
    },
    {
        title: 'Магазины',
        key: 'places',
        dataIndex: 'places',
        render: (_, {places}) => (
            <>
                {places.map(place => {
                    return <Tag key={place.id}>{place.name}</Tag>;
                })}
            </>
        )
    }
];

const PlacesList = memo<PlacesListType>(function PlacesList({placesDataSource}) {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);

    const onSelectChange = useCallback(
        (newSelectedRowKeys: string[]) => {
            setSelectedRowKeys(newSelectedRowKeys);
        },
        [setSelectedRowKeys]
    );

    const rowSelection = useMemo(
        () => ({
            selectedRowKeys,
            onChange: onSelectChange
        }),
        [selectedRowKeys, onSelectChange]
    );

    return (
        <div>
            <Table columns={columns} dataSource={placesDataSource} rowSelection={rowSelection} rowKey="id" />
        </div>
    );
});

export default PlacesList;
