type PlaceType = {
    id: string;
    mp_id: string;
    name: string;
    marketplaceKeyId: string;
};

export type KeyForMarketplaceType = {
    id: string;
    encrypted_api_key: string;
    type: 'ozon' | 'ym'; // тип ключа
    places: PlaceType[];
};

export type PlacesListType = {
    placesDataSource: Array<KeyForMarketplaceType>;
};
