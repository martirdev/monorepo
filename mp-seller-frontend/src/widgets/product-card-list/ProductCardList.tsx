import {Table, Tag, Tooltip} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {Key, memo, useState} from 'react';

import {MarketplaceIcon} from '_shared/mp-logos';
import {currency} from '_shared/utils/intl/numbers';

import {TEMPOPARY_MOCK_PRODUCTS} from './temporaryConsts';
import {ProductType} from './types';

const columns: ColumnsType<ProductType> = [
    {
        title: 'Артикул',
        dataIndex: 'articule',
        key: 'articule',
        defaultSortOrder: 'descend',
        sorter: (a, b) => Number(a.articule) - Number(b.articule)
    },
    {
        title: 'Название',
        dataIndex: 'name'
    },
    {
        title: 'Маркетплейсы',
        key: 'marketplaces',
        dataIndex: 'marketplaces',
        render: (_, {marketplaces}) => (
            <>
                {marketplaces.map(marketplace => {
                    return (
                        <Tooltip title={currency.format(marketplace.price)} key={marketplace.id}>
                            <Tag color={marketplace.isSynchronized ? 'green' : 'red'}>
                                <div className="flex gap-1 p-1">
                                    <MarketplaceIcon type={marketplace.type} className="w-5" />
                                    <div>{marketplace.name}</div>
                                </div>
                            </Tag>
                        </Tooltip>
                    );
                })}
            </>
        )
    }
];

const ProductCardList = memo(function ProductCardTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    return (
        <div>
            <Table columns={columns} dataSource={TEMPOPARY_MOCK_PRODUCTS} rowSelection={rowSelection} />
        </div>
    );
});

export default ProductCardList;
