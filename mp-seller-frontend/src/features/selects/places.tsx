import {Select} from 'antd';
import {DefaultOptionType} from 'antd/es/select';

import {trpc} from '_shared/api/trpc';

type PlaceSelectPropsType = {
    type: 'ym' | 'ozon';
    onChange?: (value: any, option: DefaultOptionType | DefaultOptionType[]) => void;
};

export const PlaceSelect = ({type, onChange, ...rest}: PlaceSelectPropsType) => {
    const {data = [], isLoading} = trpc.getMarketplaceKeys.useQuery();

    const flattenData = data.reduce<DefaultOptionType[]>((acc, key) => {
        if (key.type === type) {
            acc.push(
                ...key.places.map(place => ({
                    ...place,
                    value: place.marketplaceKeyId,
                    label: place.name,
                    keyValue: key
                }))
            );
        }
        return acc;
    }, []);

    return (
        <Select
            placeholder={flattenData[0]?.name}
            loading={isLoading}
            onChange={onChange}
            options={flattenData}
            allowClear
            {...rest}
        />
    );
};
