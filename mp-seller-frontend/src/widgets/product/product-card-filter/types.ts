import {ProductType} from '../product-card-list/types';

export type Range = {
    from: string;
    to: string;
};

export type ProductsRequest = {
    type?: 'ym' | 'ozon';
    places?: string[];
    priceRange?: Range;
    filter?: string; // фильтр по остальным параметрам артикул, название и др.
};

export type ProductsResponse = typeof Array<ProductType>; // Моковые данные уже имеются

export type ProductCardFilterType = {
    onChange: () => void;
};

export type PlacesOptions = {
    label: string, 
    value: string
}
