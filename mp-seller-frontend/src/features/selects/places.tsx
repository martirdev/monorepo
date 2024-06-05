import {Select} from 'antd';

import {trpc} from '_shared/api/trpc';

const {Option} = Select;

type PlaceSelectPropsType = {
    type: 'ym' | 'ozon';
};

export const PlaceSelect = ({type}: PlaceSelectPropsType) => {
    const {data = [], isLoading} = trpc.getMarketplaceKeys.useQuery();

    const flattenData = data.reduce<(typeof data)[number]['places']>((acc, key) => {
        if (key.type === type) {
            acc.push(...key.places.map(place => ({...place, key})));
        }
        return acc;
    }, []);

    return (
        <Select placeholder={flattenData[0]?.name} loading={isLoading} allowClear>
            {flattenData.map(place => (
                <Option value={place.id} key={place.id}>
                    {place.name}
                </Option>
            ))}
        </Select>
    );
};
