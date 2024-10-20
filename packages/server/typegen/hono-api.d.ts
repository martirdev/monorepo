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
                    ids: string[];
                };
            };
            output: {
                products: {
                    id: string;
                    name: string;
                    description: string | null;
                    price: string | null;
                    count: number | null;
                    masterProductId: string;
                    productToParams: {
                        params: {
                            value: string;
                            name: string;
                        };
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/products/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                products: {
                    id: string;
                    name: string;
                    products: {
                        id: string;
                        name: string;
                        description: string | null;
                        price: string | null;
                        count: number | null;
                        productToParams: {
                            params: {
                                value: string;
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
