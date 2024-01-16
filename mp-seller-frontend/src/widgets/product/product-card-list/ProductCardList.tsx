import { Key, memo, useState } from "react";
import { Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";

import { TEMPOPARY_MOCK_PRODUCTS } from "./temporaryConsts";
import { ProductType } from "./types";
import { currency } from "../../../utils/intl/numbers";
import { getMarketplacelogo } from "../../../shared/mp-logos/getMarketplacelogo";

const columns: ColumnsType<ProductType> = [
    {
        title: "Артикул",
        dataIndex: "articule",
        key: "articule",
        defaultSortOrder: "descend",
        sorter: (a, b) => Number(a.articule) - Number(b.articule),
    },
    {
        title: "Название",
        dataIndex: "name",
    },
    {
        title: "Маркетплейсы",
        key: "marketplaces",
        dataIndex: "marketplaces",
        render: (_, { marketplaces }) => (
            <>
                {marketplaces.map((marketplace) => {
                    return (
                        <Tooltip title={currency.format(marketplace.price)}>
                            <Tag
                                color={
                                    marketplace.isSynchronized ? "green" : "red"
                                }
                                key={marketplace.id}
                            >
                                <div className="flex gap-1 p-1">
                                    <div>
                                        {getMarketplacelogo(marketplace.type)}
                                    </div>
                                    <div>{marketplace.name}</div>
                                </div>
                            </Tag>
                        </Tooltip>
                    );
                })}
            </>
        ),
    },
];

const ProductCardList = memo(function ProductCardTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    return (
        <div>
            <Table
                columns={columns}
                dataSource={TEMPOPARY_MOCK_PRODUCTS}
                rowSelection={rowSelection}
            />
        </div>
    );
});

export default ProductCardList;
