export type AddPlaceDrawerType = {onClose: () => void; open: boolean; title: string};

export type FieldType = {
    type: string; //'ozon' или 'ym'
    place: string; // название магазина
    apiKey?: string;
    clientId?: string;
};

export type MarketplaceFormType = {selectedMarketplace: string};

export type FooterAddDrawerType = {onClose: () => void; isLoading: boolean};
