type MarketplaceInfoType = {
    id: string;
    isSynchronized: boolean;
    type: string;
    price: number;
    name: string;
};

export type ProductType = {
    id: string;
    acrticule: string;
    name: string;
    marketplaces: Array<MarketplaceInfoType>;
};
