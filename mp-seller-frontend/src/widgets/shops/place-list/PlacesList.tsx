import { Key, memo, useState } from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import { MOCK_SHOPS } from "./temporaryConsts";
import { KeyForMarketplaceType } from "./types";
import { getMarketplacelogo } from "../../../shared/mp-logos/getMarketplacelogo";

const columns: ColumnsType<KeyForMarketplaceType> = [
    {
        title: "",
        dataIndex: "type",
        key: "type",
        render: (_, { type }) =>
            // <div className="w-8">{getMarketplacelogo(type)}</div>
            getMarketplacelogo(type),
        width: "1%",
    },
    {
        title: "Ключ",
        dataIndex: "api_key",
        width: "10%",
    },
    {
        title: "Магазины",
        key: "places",
        dataIndex: "places",
        render: (_, { places }) => (
            <>
                {places.map((place) => {
                    return <Tag key={place.id}>{place.name}</Tag>;
                })}
            </>
        ),
    },
];

const PlacesList = memo(function PlacesList() {
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
                dataSource={MOCK_SHOPS}
                rowSelection={rowSelection}
            />
        </div>
    );
});

export default PlacesList;
