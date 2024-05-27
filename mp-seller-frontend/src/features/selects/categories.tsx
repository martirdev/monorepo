import {Select} from 'antd';

import {trpc} from '_shared/api/trpc';

const {Option} = Select;

type PlaceSelectPropsType = {
    type: 'ym' | 'ozon';
};

export const CategorySelect = ({type}: PlaceSelectPropsType) => {
    const {data = [], isLoading} = trpc.getMarketplaceCategories.useQuery(type);

    return (
        <Select placeholder={data[0]?.label} loading={isLoading} allowClear>
            {data.map(category => (
                <Option value={category.value} key={category.value}>
                    {category.label}
                </Option>
            ))}
        </Select>
    );
};
