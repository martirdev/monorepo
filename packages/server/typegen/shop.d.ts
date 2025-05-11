import * as hono_hono_base from 'hono/hono-base';
import * as hono_utils_http_status from 'hono/utils/http-status';
import * as hono_types from 'hono/types';

declare const shopRoutes: hono_hono_base.HonoBase<hono_types.BlankEnv, {
    "/codegen": {
        $get: {
            input: {};
            output: string;
            outputFormat: "text";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/products/products": {
        $post: {
            input: {
                json: {
                    id: string;
                };
            };
            output: {
                products: {
                    id: string;
                    name: string;
                    productVariants: {
                        id: string;
                        name: string;
                        description: string | null;
                        meta: never;
                        productId: string;
                        packageId: string | null;
                        categoryId: string | null;
                        lastPriceId: string | null;
                        params: {
                            productVariantId: string;
                            productParamValueId: string;
                            paramValue: {
                                value: string;
                                id: string;
                                paramId: string;
                                param: {
                                    id: string;
                                    name: string;
                                };
                            };
                        }[];
                        category: {
                            id: string;
                            name: string;
                            meta: never;
                            isActive: boolean | null;
                            parentCategoryId: string | null;
                        } | null;
                        package: {
                            length: number | null;
                            id: string;
                            productVariantId: string;
                            width: number | null;
                            height: number | null;
                            weight: number | null;
                        } | null;
                        images: {
                            productVariantId: string;
                            imageId: string;
                            image: {
                                id: string;
                                url: string;
                                alt: string | null;
                            };
                        }[];
                        stock: {
                            id: string;
                            createdAt: string;
                            updatedAt: string;
                            productVariantId: string;
                            sku: string;
                            stockedQuantity: number;
                            reservedQuantity: number;
                        };
                        lastPrice: {
                            id: string;
                            createdAt: string;
                            productVariantId: string;
                            price: string;
                        } | null;
                    }[];
                } | undefined;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/products/variants": {
        $post: {
            input: {
                json: {
                    ids: string[];
                };
            };
            output: {
                variants: {
                    id: string;
                    name: string;
                    description: string | null;
                    meta: never;
                    productId: string;
                    packageId: string | null;
                    categoryId: string | null;
                    lastPriceId: string | null;
                    params: {
                        productVariantId: string;
                        productParamValueId: string;
                        paramValue: {
                            value: string;
                            id: string;
                            paramId: string;
                            param: {
                                id: string;
                                name: string;
                            };
                        };
                    }[];
                    product: {
                        id: string;
                        name: string;
                        createdAt: string;
                        updatedAt: string;
                    };
                    images: {
                        productVariantId: string;
                        imageId: string;
                        image: {
                            id: string;
                            url: string;
                            alt: string | null;
                        };
                    }[];
                    stock: {
                        id: string;
                        createdAt: string;
                        updatedAt: string;
                        productVariantId: string;
                        sku: string;
                        stockedQuantity: number;
                        reservedQuantity: number;
                    };
                    lastPrice: {
                        id: string;
                        createdAt: string;
                        productVariantId: string;
                        price: string;
                    } | null;
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
}, "/">;
type AppRouter = typeof shopRoutes;

export { type AppRouter, shopRoutes };
