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
                    productVariants: {
                        id: string;
                        name: string;
                        description: string | null;
                        meta: never;
                        productId: string;
                        packageId: string | null;
                        categoryId: string | null;
                        lastPriceId: string | null;
                        category: {
                            id: string;
                            name: string;
                            meta: never;
                            isActive: boolean | null;
                            parentCategoryId: string | null;
                        } | null;
                        package: {
                            id: string;
                            productVariantId: string;
                            width: number | null;
                            height: number | null;
                            length: number | null;
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
                        params: {
                            productVariantId: string;
                            productParamValueId: string;
                            paramValue: {
                                id: string;
                                value: string;
                                paramId: string;
                                param: {
                                    id: string;
                                    name: string;
                                };
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
    "/shop/products/variants": {
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
                    params: {
                        productVariantId: string;
                        productParamValueId: string;
                        paramValue: {
                            id: string;
                            value: string;
                            paramId: string;
                            param: {
                                id: string;
                                name: string;
                            };
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
} & {
    "/admin/orders": {
        $post: {
            input: {
                json: {
                    offset?: number | undefined;
                };
            };
            output: {
                orders: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    clientId: string;
                    totalAmount: string;
                    client: {
                        id: string;
                        createdAt: string;
                        updatedAt: string;
                        firstName: string | null;
                        secondName: string | null;
                        thirdName: string | null;
                    };
                    orderStatuses: {
                        id: string;
                        createdAt: string;
                        orderId: string;
                        statusId: string;
                        comment: string | null;
                    }[];
                    orderProducts: {
                        id: string;
                        createdAt: string;
                        productId: string;
                        orderId: string;
                        priceId: string;
                        quantity: number;
                        removedAt: string | null;
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/orders/create": {
        $post: {
            input: {
                json: {
                    products: {
                        productId: string;
                        quantity: number;
                    }[];
                    clientId: string;
                };
            };
            output: {
                message: string;
                orderId: string;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/prices/create": {
        $post: {
            input: {
                json: {
                    productId: string;
                    price: number;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/inventory": {
        $post: {
            input: {
                json: {
                    offset?: number | undefined;
                };
            };
            output: {
                inventory: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    productVariantId: string;
                    sku: string;
                    stockedQuantity: number;
                    reservedQuantity: number;
                    productVariant: {
                        id: string;
                        name: string;
                        createdAt: string;
                        updatedAt: string;
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
                                id: string;
                                value: string;
                                paramId: string;
                                param: {
                                    id: string;
                                    name: string;
                                };
                            };
                        }[];
                    };
                    items: {
                        id: string;
                        stockedQuantity: number;
                        reservedQuantity: number;
                        stockId: string;
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/inventory/upsert": {
        $post: {
            input: {
                json: {
                    productVariantId: string;
                    sku: string;
                    id?: string | undefined;
                    stockedQuantity?: number | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/categories": {
        $get: {
            input: {};
            output: {
                categories: {
                    id: string;
                    name: string;
                    meta: never;
                    isActive: boolean | null;
                    parentCategoryId: string | null;
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/categories/create": {
        $post: {
            input: {
                json: {
                    name: string;
                    isActive: boolean;
                    parentCategoryId?: string | undefined;
                }[];
            };
            output: {
                categories: {
                    id: string;
                    name: string;
                    meta: never;
                    isActive: boolean | null;
                    parentCategoryId: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
    "/admin/categories/update": {
        $post: {
            input: {
                json: {
                    id: string;
                    name: string;
                    isActive: boolean;
                    parentCategoryId?: string | undefined;
                }[];
            };
            output: {
                categories: {
                    id: string;
                    name: string;
                    meta: never;
                    isActive: boolean | null;
                    parentCategoryId: string | null;
                }[];
            };
            outputFormat: "json";
            status: 200;
        };
    };
    "/admin/categories/delete": {
        $delete: {
            input: {
                json: string[];
            };
            output: {
                message: string;
                deletedCategories: {
                    id: string;
                    name: string;
                    meta: never;
                    isActive: boolean | null;
                    parentCategoryId: string | null;
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/clients": {
        $get: {
            input: {};
            output: {
                clients: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    firstName: string | null;
                    secondName: string | null;
                    thirdName: string | null;
                    contacts: {
                        id: string;
                        type: "vk" | "ok" | "telegram" | "instagram" | "email" | "youtube" | "phone" | null;
                        contact: string | null;
                        clientId: string | null;
                    }[];
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/clients/create": {
        $post: {
            input: {
                json: {
                    contacts: {
                        type: "vk" | "ok" | "telegram" | "instagram" | "email" | "youtube" | "phone";
                        contact: string;
                        id?: string | undefined;
                    }[];
                    id?: string | undefined;
                    firstName?: string | undefined;
                    secondName?: string | undefined;
                    thirdName?: string | undefined;
                };
            };
            output: {
                client: {
                    contacts: {
                        id: string;
                        type: "vk" | "ok" | "telegram" | "instagram" | "email" | "youtube" | "phone" | null;
                        contact: string | null;
                        clientId: string | null;
                    }[];
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    firstName: string | null;
                    secondName: string | null;
                    thirdName: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
    "/admin/clients/update": {
        $post: {
            input: {
                json: {
                    id: string;
                    contacts: ({
                        type: "vk" | "ok" | "telegram" | "instagram" | "email" | "youtube" | "phone";
                        contact: string;
                        action: "add";
                    } | {
                        id: string;
                        action: "remove";
                    })[];
                    firstName?: string | undefined;
                    secondName?: string | undefined;
                    thirdName?: string | undefined;
                };
            };
            output: {
                client: {
                    contacts: {
                        id: string;
                        type: "vk" | "ok" | "telegram" | "instagram" | "email" | "youtube" | "phone" | null;
                        contact: string | null;
                        clientId: string | null;
                    }[];
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    firstName: string | null;
                    secondName: string | null;
                    thirdName: string | null;
                };
            };
            outputFormat: "json";
            status: 200;
        };
    };
    "/admin/clients/delete": {
        $delete: {
            input: {
                json: string[];
            };
            output: {
                message: string;
                deletedClients: {
                    id: string;
                    createdAt: string;
                    updatedAt: string;
                    firstName: string | null;
                    secondName: string | null;
                    thirdName: string | null;
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products": {
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
                    productVariants: {
                        id: string;
                        name: string;
                        createdAt: string;
                        updatedAt: string;
                        description: string | null;
                        meta: never;
                        productId: string;
                        packageId: string | null;
                        categoryId: string | null;
                        lastPriceId: string | null;
                        category: {
                            id: string;
                            name: string;
                            meta: never;
                            isActive: boolean | null;
                            parentCategoryId: string | null;
                        } | null;
                        package: {
                            id: string;
                            productVariantId: string;
                            width: number | null;
                            height: number | null;
                            length: number | null;
                            weight: number | null;
                        } | null;
                        images: {
                            image: {
                                id: string;
                                url: string;
                                alt: string | null;
                            };
                        }[];
                        params: {
                            paramValue: {
                                id: string;
                                value: string;
                                paramId: string;
                                param: {
                                    id: string;
                                    name: string;
                                };
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
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products/create": {
        $post: {
            input: {
                json: {
                    name: string;
                    images: {
                        url: string;
                        type: "added";
                    }[];
                    params: {
                        name: string;
                        values: string[];
                    }[];
                    description?: string | undefined;
                    meta?: string | undefined;
                    category?: string | undefined;
                    package?: {
                        width?: number | undefined;
                        height?: number | undefined;
                        length?: number | undefined;
                        weight?: number | undefined;
                    } | undefined;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products/delete": {
        $delete: {
            input: {
                json: {
                    id: string;
                };
            };
            output: {
                message: string;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products/variants": {
        $post: {
            input: {
                json: {
                    search: string;
                };
            };
            output: {
                variants: {
                    id: string;
                    name: string;
                    createdAt: string;
                    updatedAt: string;
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
                            id: string;
                            value: string;
                            paramId: string;
                            param: {
                                id: string;
                                name: string;
                            };
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
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/admin/products/variants/update": {
        $post: {
            input: {
                json: {
                    id: string;
                    name: string;
                    package: {
                        width?: number | undefined;
                        height?: number | undefined;
                        length?: number | undefined;
                        weight?: number | undefined;
                    };
                    images: ({
                        url: string;
                        type: "added";
                    } | {
                        id: string;
                        type: "deleted";
                    })[];
                    description?: string | undefined;
                    meta?: string | undefined;
                    category?: string | undefined;
                };
            };
            output: {
                message: string;
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
