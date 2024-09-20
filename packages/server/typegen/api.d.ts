import * as hono_hono_base from 'hono/hono-base';
import * as lucia from 'lucia';
import * as hono_utils_http_status from 'hono/utils/http-status';
import * as hono_types from 'hono/types';

declare const appRouter: hono_hono_base.HonoBase<hono_types.BlankEnv, {
    "/clients": {
        $get: {
            input: {
                query: {
                    id?: string | string[] | undefined;
                    name?: string | string[] | undefined;
                    page?: string | string[] | undefined;
                    pageSize?: string | string[] | undefined;
                };
            };
            output: {
                clients: {
                    id: string;
                    name: string;
                    firstName: string | null;
                    createdAt: string;
                    middleName: string | null;
                    lastName: string | null;
                    contactInfo: string | null;
                    updatedAt: string;
                }[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
        $post: {
            input: {
                json: {
                    id: string;
                    name: string;
                    firstName?: string | undefined;
                    middleName?: string | undefined;
                    lastName?: string | undefined;
                    contactInfo?: string | undefined;
                };
            };
            output: {
                client: {
                    id: string;
                    name: string;
                    firstName: string | null;
                    createdAt: string;
                    middleName: string | null;
                    lastName: string | null;
                    contactInfo: string | null;
                    updatedAt: string;
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
        $put: {
            input: {
                json: {
                    id: string;
                    name: string;
                    firstName?: string | undefined;
                    middleName?: string | undefined;
                    lastName?: string | undefined;
                    contactInfo?: string | undefined;
                };
            };
            output: {
                client: {
                    id: string;
                    name: string;
                    firstName: string | null;
                    createdAt: string;
                    middleName: string | null;
                    lastName: string | null;
                    contactInfo: string | null;
                    updatedAt: string;
                };
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
    "/clients/:id": {
        $delete: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                success: boolean;
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        };
    };
} & {
    "/user": {
        $get: {
            input: {};
            output: undefined;
            outputFormat: "redirect";
            status: 302;
        };
    };
    "/user/callback": {
        $get: {
            input: {};
            output: undefined;
            outputFormat: "redirect";
            status: 302;
        };
    };
    "/user/logout": {
        $get: {
            input: {
                cookie: {
                    auth_session: string;
                };
            };
            output: undefined;
            outputFormat: "redirect";
            status: 302;
        };
    };
    "/user/me": {
        $get: {
            input: {
                cookie: {
                    auth_session: string;
                };
            };
            output: {
                user: null;
                permissions: never[];
                organizations: never[];
            };
            outputFormat: "json";
            status: hono_utils_http_status.StatusCode;
        } | {
            input: {
                cookie: {
                    auth_session: string;
                };
            };
            output: {
                user: {
                    id: lucia.UserId;
                    yandexUserId: string | null;
                    firstName: string | null;
                    secondName: string | null;
                    createdAt: string;
                };
                permissions: {
                    [x: string]: ({
                        id: string;
                        name: string | null;
                    } | null)[];
                };
                organizations: ({
                    id: string;
                    name: string | null;
                    createdAt: string;
                } | null)[];
            };
            outputFormat: "json";
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
}, "/">;
type AppRouter = typeof appRouter;

export { type AppRouter, appRouter };
