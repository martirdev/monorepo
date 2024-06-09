type MarketplaceInfoType = {
    id: string;
    isSynchronized: boolean;
    type: string;
    price: number;
    name: string;
};

export type ProductType = {
    id: string;
    key: string;

    articule: string;
    name: string;
    marketPlaces: Array<MarketplaceInfoType>;
};
