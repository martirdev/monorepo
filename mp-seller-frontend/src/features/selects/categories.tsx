import {Select} from 'antd';
import {DefaultOptionType} from 'antd/es/select';

import {trpc} from '_shared/api/trpc';

type PlaceSelectPropsType = {
    type: 'ym' | 'ozon';
    onChange?: (value: any, option: DefaultOptionType | DefaultOptionType[]) => void;
};

export const CategorySelect = ({type, onChange, ...rest}: PlaceSelectPropsType) => {
    const {data = [], isLoading} = trpc.getMarketplaceCategories.useQuery(type);

    return (
        <Select
            placeholder={data[0]?.label}
            loading={isLoading}
            onChange={onChange}
            options={data}
            allowClear
            {...rest}
        />
    );
};
