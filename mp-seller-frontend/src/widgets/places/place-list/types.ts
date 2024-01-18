type PlaceType = {
    id: string;
    name: string; // название магазина в маркетплейсе
};

export type KeyForMarketplaceType = {
    id: string;
    key: string;
    api_key: string;
    type: 'ozon' | 'ym'; // тип ключа
    places: PlaceType[];
};
