export type AddPlaceDrawerType = {onClose: () => void; open: boolean; title: string};

export type FieldType = {
    marketpace: string;
    name: string;
    APIkey?: string;
    ClientId?: string;
    token?: string;
};

export type MarketplaceFormType = {selectedMarketplace: string};

export type FooterAddDrawerType = {onClose: () => void};
