import {ReactNode} from 'react';

export type AddNewProductSidebarType = {onClose: () => void; open: boolean};

export type SelectedOptiontype = {label: string; value: string; icon?: ReactNode}[];

export type GeneralFieldsType = {
    barcode?: string;
    color_image?: string;
    currency_code: 'BYN' | 'KZT' | 'EUR' | 'USD' | 'CNY' | 'RUB';
    depth: number;
    dimension_unit: 'in' | 'mm' | 'cm';
    geo_names?: string[];
    height: number;
    image_group_id?: string;
    images: string[];
    images360?: string[];
    name: string;
    offer_id: string;
    old_price?: string;
    price: string;
    primary_image?: string;
    service_type?: 'IS_CODE_SERVICE' | 'IS_NO_CODE_SERVICE';
    vat: '0' | '0.1' | '0.2';
    weight: number;
    weight_unit: 'g' | 'kg' | 'lb';
    width: number;

    vendor: string;
    description: string;
    tags?: string[];
} & OzonFieldsType &
    YMFieldsType;

export type OzonFieldsType = {
    ozon: {
        place: string;
        category: number;
        description_category_id: number;
        mpKeyId: string;
        attributes: Record<string, {value: string; dictionary_value_id?: number}>;
    };
};

export type YMFieldsType = {
    ym: {
        place: string;
        category: number;
        categoryName: string;
        mpKeyId: string;
        attributes: Record<string, {value: string; valueId?: number}>;
    };
};

export type OzonParamsRequest = {
    complex_id: number;
    id: number;
    values: [
        {
            dictionary_value_id?: number;
            value: string;
        }
    ];
}[];

export type YMParamsRequest = {
    parameterId: number;
    valueId: number;
    value: string;
}[];
