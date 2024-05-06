type PlaceType = {
    id: string;
    name: string; // название магазина в маркетплейсе
};

export type KeyForMarketplaceType = {
    id: string;
    encrypted_api_key: string;
    type: string;
    places: {
        id: string;
        mp_id: string;
        name: string;
        marketplaceKeyId: string;
    }[];
};

export type PlacesListType = {
    placesDataSource: Array<KeyForMarketplaceType>;
};
