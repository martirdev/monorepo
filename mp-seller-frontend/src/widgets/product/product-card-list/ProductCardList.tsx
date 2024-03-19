import {PlusOutlined} from '@ant-design/icons';
import {Button, Checkbox, Table, Tag, Tooltip} from 'antd';
import type {GetProp} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import {memo, useCallback, useState} from 'react';

import {MarketplaceIcon} from '_shared/mp-logos';
import {currency} from '_shared/utils/intl/numbers';
import {BottomMenu} from '_widgets/bottom-menu';

import ProductCardFilter from '../product-card-filter/ProductCardFilter';
import AddNewProductSidebar from '../product-card-sidebar/AddNewProduct';
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

const onChange: GetProp<typeof Checkbox.Group, 'onChange'> = checkedValues => {
    console.log('checked = ', checkedValues);
};

const ProductCardList = memo(function ProductCardTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    const [openAddNewProductDrawer, setOpenAddNewProductDrawer] = useState(false);

    const showDrawer = () => {
        setOpenAddNewProductDrawer(true);
    };

    const onClose = () => {
        setOpenAddNewProductDrawer(false);
    };

    const onSelectChange = useCallback(
        (newSelectedRowKeys: string[]) => {
            console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
        },
        [setSelectedRowKeys]
    );

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange
    };

    const resetSelection = useCallback(() => {
        setSelectedRowKeys([]);
    }, [setSelectedRowKeys]);

    return (
        <div className="flex flex-1 flex-col gap-1">
            <Button icon={<PlusOutlined />} title="Создать карточку товара" onClick={showDrawer} type="primary">
                Создать КТ
            </Button>
            <AddNewProductSidebar onClose={onClose} open={openAddNewProductDrawer} />
            <div className="mx-40 mt-2 flex justify-between gap-16">
                <ProductCardFilter onChange={onChange} />

                <Table
                    columns={columns}
                    dataSource={TEMPOPARY_MOCK_PRODUCTS}
                    rowSelection={rowSelection}
                    className="flex-1"
                />
            </div>
            {selectedRowKeys.length > 0 && <BottomMenu selectedRowKeys={selectedRowKeys} onCancel={resetSelection} />}
        </div>
    );
});

export default ProductCardList;
