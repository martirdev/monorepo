import * as hono_hono_base from 'hono/hono-base';
import * as hono_utils_http_status from 'hono/utils/http-status';

declare const app: hono_hono_base.HonoBase<{}, {
    "/shop/codegen": {
        $get: {
            input: {};
            output: string;
            outputFormat: "text";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/shop/products/products": {
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
                            name: string;
                            value: string;
                        };
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/shop/products/:id": {
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
                                name: string;
                                value: string;
                            };
                        }[];
                    }[];
                } | undefined;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/admin/products/product": {
        $get: {
            input: {
                query: {
                    id: string;
                };
            };
            output: {
                product: {
                    id: string;
                    name: string;
                    createdAt: string;
                    updatedAt: string;
                    description: string | null;
                    price: string | null;
                    count: number | null;
                    masterProductId: string;
                } | undefined;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products/products": {
        $post: {
            input: {
                json: {
                    offset?: number | undefined;
                };
            };
            output: {
                products: {
                    id: string;
                    name: string;
                    createdAt: string;
                    updatedAt: string;
                    description: string | null;
                    price: string | null;
                    count: number | null;
                    masterProductId: string;
                    productToParams: {
                        params: {
                            name: string;
                            value: string;
                        };
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/codegen": {
        $get: {
            input: {};
            output: string;
            outputFormat: "text";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/ping": {
        $get: {
            input: {};
            output: {
                data: "pong";
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/auth/*": {
        $get: {
            input: {};
            output: {};
            outputFormat: string;
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/auth/*": {
        $post: {
            input: {};
            output: {};
            outputFormat: string;
            status: hono_utils_http_status.StatusCode;
        };
    };
}, "/">;

type AppType = typeof app;

export { type AppType, app as default };
