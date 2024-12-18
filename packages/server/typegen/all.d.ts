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
                            id: string;
                            length: number | null;
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
                                id: string;
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
                        createdAt: string;
                        updatedAt: string;
                        description: string | null;
                        productId: string | null;
                        meta: never;
                        packageId: string | null;
                        package: {
                            id: string;
                            length: number | null;
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
                                id: string;
                                name: string;
                                value: string;
                            };
                        }[];
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
