import { memo, useState } from "react";
import { Table, Tag, Tooltip } from "antd";
import type { ColumnsType } from "antd/es/table";
import { AppleOutlined, TwitterOutlined } from "@ant-design/icons";

import { TEMPOPARY_MOCK_PRODUCTS } from "../../widgets/product-card-list/temporaryConsts";
import { ProductType } from "./types";

const ProductCardList = memo(function ProductCardTable() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const getMarketplacelogo = (marketplaceName: string) => {
        switch (marketplaceName) {
            case "ym":
                return <AppleOutlined />;
            case "ozon":
                return <TwitterOutlined />;
        }
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const columns: ColumnsType<ProductType> = [
        {
            title: "Артикул",
            dataIndex: "acrticule",
            key: "acrticule",
            defaultSortOrder: "descend",
            sorter: (a, b) => Number(a.acrticule) - Number(b.acrticule),
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
                    {marketplaces.map((marketplace, dataIndex) => {
                        return (
                            <Tooltip title={marketplace.price + " ₽"}>
                                <Tag
                                    color={
                                        marketplace.isSynchronized
                                            ? "green"
                                            : "red"
                                    }
                                    key={dataIndex}
                                    icon={getMarketplacelogo(marketplace.type)}
                                >
                                    {marketplace.name}
                                </Tag>
                            </Tooltip>
                        );
                    })}
                </>
            ),
        },
    ];
    return (
        <div>
            <Table
                columns={columns}
                dataSource={TEMPOPARY_MOCK_PRODUCTS}
                rowSelection={rowSelection}
            />
            ;
        </div>
    );
});

export default ProductCardList;
