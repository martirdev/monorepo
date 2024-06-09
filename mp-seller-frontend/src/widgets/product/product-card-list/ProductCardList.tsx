import {PlusOutlined} from '@ant-design/icons';
import {Button, Table, Tag} from 'antd';
import {useForm, useWatch} from 'antd/es/form/Form';
import {groupBy} from 'lodash';
import {memo, useCallback, useState} from 'react';

import {trpc} from '_shared/api/trpc';
import {MarketplaceIcon} from '_shared/mp-logos';
import {BottomMenu} from '_widgets/bottom-menu';

import ProductCardFilter from '../product-card-filter/ProductCardFilter';
import AddNewProductSidebar from '../product-card-sidebar/AddNewProduct';

const columns = [
    {
        title: 'Артикул',
        dataIndex: 'id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => Number(a.articule) - Number(b.articule)
    },
    {
        title: 'Название',
        dataIndex: 'name'
    },
    {
        title: 'Маркетплейсы',
        dataIndex: 'marketPlaces',
        render: marketplaces => {
            return (
                <>
                    {marketplaces.map(({place}) => (
                        <Tag color="green">
                            <div className="flex gap-1 p-1">
                                <MarketplaceIcon type={place.mp_id ? 'ozon' : 'ym'} className="w-5" />
                                <div>{place.name}</div>
                            </div>
                        </Tag>
                    ))}
                </>
            );
        }
    }
];

const ProductCardList = memo(function ProductCardTable() {
    const [form] = useForm();

    const marketplaceTypes = useWatch('marketplaceTypes', form);
    const places = useWatch('places', form);

    console.log(places);

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

    console.log({marketplaceTypes});
    const {data = []} = trpc.getProducts.useQuery({
        type: marketplaceTypes,
        place_id: places
    });
    const groupedProducts = groupBy(data, x => {
        const productData = x.data as any;
        if ('offer_id' in productData) {
            return productData.offer_id;
        }
        if ('offerId' in productData) {
            return productData.offerId;
        }
        return;
    });
    const convertedValues = Object.entries(groupedProducts).map(([id, values]) => ({
        marketPlaces: values,
        id,
        name: (values[0].data as any)?.name
    }));

    return (
        <div className="flex flex-1 flex-col gap-1">
            <div className="flex justify-end">
                <Button
                    icon={<PlusOutlined />}
                    title="Добавить карточку товара"
                    onClick={showDrawer}
                    type="primary"
                    className="w-40 "
                >
                    Добавить товар
                </Button>
            </div>
            <AddNewProductSidebar onClose={onClose} open={openAddNewProductDrawer} />
            <div className="mt-2 flex justify-between gap-16">
                <div className="min-w-[300px] flex-[0]">
                    <ProductCardFilter form={form} />
                </div>

                <Table
                    columns={columns as any}
                    dataSource={convertedValues}
                    rowSelection={rowSelection}
                    className="flex-1"
                />
            </div>
            {selectedRowKeys.length > 0 && <BottomMenu selectedRowKeys={selectedRowKeys} onCancel={resetSelection} />}
        </div>
    );
});

export default ProductCardList;
