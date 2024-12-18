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
                    productToProductCategory: {
                        productId: string;
                        productCategoryId: string;
                        productCategory: {
                            id: string;
                            name: string;
                            parentCategoryId: string | null;
                            isActive: boolean | null;
                            meta: never;
                        };
                    }[];
                    productVariants: {
                        id: string;
                        name: string;
                        description: string | null;
                        productId: string | null;
                        meta: never;
                        packageId: string | null;
                        package: {
                            length: number | null;
                            id: string;
                            width: number | null;
                            height: number | null;
                            weight: number | null;
                        } | null;
                        images: {
                            id: string;
                            productVariantId: string | null;
                            url: string;
                            alt: string | null;
                        }[];
                        productVariantsToProductParams: {
                            productParam: {
                                value: string;
                                id: string;
                                name: string;
                            };
                        }[];
                    }[];
                } | undefined;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
}, "/">;
type AppRouter = typeof shopRoutes;

export { type AppRouter, shopRoutes };
